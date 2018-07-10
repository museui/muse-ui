import BaseTheme from './baseTheme';
import ColorTheme from './colorTheme';
import light from './light';
import dark from './dark';

const themes = [
  BaseTheme, ColorTheme
];

const vars = {
  light,
  dark
};

function getThemeStyle () {
  const themeId = 'muse-theme';
  let styleEl = document.getElementById(themeId);
  if (styleEl) return styleEl;
  styleEl = document.createElement('style');
  styleEl.id = themeId;
  document.body.appendChild(styleEl);
  return styleEl;
}

export default {
  addCreateTheme (theme) {
    const length = themes.length;
    themes.splice(length - 1, 0, theme);
    return this;
  },
  add (name, varObj = {}, extendName = 'light') {
    const theme = {
      name,
      ...vars[extendName],
      ...varObj
    };
    vars[name] = theme;
    return this;
  },
  use (name) {
    const themeEl = getThemeStyle();
    themeEl.innerHTML = themes.map((theme) => theme(vars[name], vars[name].type, name)).join(' ');
    return this;
  },
  generate (name) {
    return themes.map((theme) => theme(vars[name], vars[name].type, name)).join(' ');
  }
};
