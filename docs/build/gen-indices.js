const fs = require('fs');
const path = require('path');
const algoliasearch = require('algoliasearch');
const slugify = require('transliteration').slugify;

const client = algoliasearch('RGHCT36SHC', 'f38ef54caaee2e01cbd18a077325dee1');
const langs = {
  'zh-CN': 'muse-ui-zh',
  'en-US': 'muse-ui-en'
};

['zh-CN', 'en-US'].forEach(lang => {
  const indexName = langs[lang];
  const index = client.initIndex(indexName);
  index.clearIndex(err => {
    if (err) return;
    fs.readdir(path.resolve(__dirname, `../src/docs/${lang}`), (err, files) => {
      if (err) return;
      let indices = [];
      files.forEach(file => {
        const component = file.replace('.md', '');
        if (file.indexOf('.md') === -1) return;
        const content = fs.readFileSync(path.resolve(__dirname, `../src/docs/${lang}/${file}`), 'utf8');
        const matches = content
          .replace(/:::[\s\S]*?:::/g, '')
          .replace(/```[\s\S]*?```/g, '')
          .match(/#{1,4}[^#]*/g)
          .map(match => match.replace(/\n+/g, '\n').split('\n').filter(part => !!part))
          .map(match => {
            const length = match.length;
            if (length > 2) {
              const desc = match.slice(1, length).join('');
              return [match[0], desc];
            }
            return match;
          });
        indices = indices.concat(matches.map(match => {
          const isComponent = match[0].indexOf('##') < 0;
          const title = match[0].replace(/#{1,4}/, '').trim();
          const index = { component: getComponentName(component), title };
          index.ranking = isComponent ? 2 : 1;
          index.anchor = slugify(title);
          index.content = (match[1] || title).replace(/<[^>]+>/g, '');
          return index;
        }));
      });

      index.addObjects(indices.filter(({ title }) => {
        let result = true;
        const chars = [',', ';', '。', '|'];
        for (let i = 0; i < chars.length; i++) {
          if (title.endsWith(chars[i])) {
            result = false;
            break;
          }
        }
        return result;
      }), (err, res) => {
        console.log(err, res);
      });
    });
  });
});

function getComponentName (component) {
  if (!component) return '';
  return component.split('-').map((name) => {
    if (!name) return;
    return name.substring(0, 1).toUpperCase() + name.substring(1);
  }).join('-');
}
