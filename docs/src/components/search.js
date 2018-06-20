import algoliasearch from 'algoliasearch';
import algoliasearchSvg from '../assets/images/search-by-algolia.svg';
export default {
  computed: {
    locale () {
      return this.$route && this.$route.meta && this.$route.meta.lang;
    },
    index () {
      if (!this.locale) return;
      const client = algoliasearch('RGHCT36SHC', 'f38ef54caaee2e01cbd18a077325dee1');
      return client.initIndex('muse-ui-' + this.locale.substring(0, 2));
    }
  },
  data () {
    return {
      searchText: '',
      data: []
    };
  },
  methods: {
    createAlgoliasearchLink (h) {
      return (
        <div class='algolia-search-footer' slot='popover'>
          <a class='algolia-search-link' target='_blank' href='https://www.algolia.com/docsearch'>
            <img src={algoliasearchSvg}/>
          </a>
        </div>
      );
    },
    search (text) {
      if (!text || !this.locale) return;
      this.index.search({ query: text, hitsPerPage: 8 }, (err, res) => {
        if (err) {
          console.error(err);
          return;
        }
        this.data = res.hits.map(hit => {
          let content = hit._highlightResult.content.value.replace(/\s+/g, ' ');
          const highlightStart = content.indexOf('<em>');
          if (highlightStart > -1) {
            const startEllipsis = highlightStart - 15 > 0;
            content = (startEllipsis ? '...' : '') +
              content.slice(Math.max(0, highlightStart - 15), content.length);
          } else if (content.indexOf('|') > -1) {
            content = '';
          }
          return {
            value: hit.title + hit.content + hit.component,
            title: hit._highlightResult.title.value,
            highlightedCompo: hit._highlightResult.component.value,
            anchor: hit.anchor,
            content: content,
            component: hit.component
          };
        });
      });
    }
  },
  render (h) {
    return h('mu-auto-complete', {
      staticClass: 'mu-docs-search',
      ref: 'input',
      props: {
        solo: true,
        data: this.data,
        value: this.searchText,
        placement: 'bottom-end',
        textline: 'two-line',
        popoverClass: 'mu-search-popover',
        maxHeight: 500 - 36,
        space: 8,
        dense: false
      },
      on: {
        input: (val) => {
          this.searchText = val;
          if (this.timer) clearTimeout(this.timer);
          this.timer = setTimeout(() => this.search(this.searchText), 200);
        },
        select: (value, item) => {
          this.searchText = '';
          this.$refs.input.blur();
          this.$nextTick(() => {
            this.$router.push(`/${this.locale}/${item.component}${item.anchor ? '#' + item.anchor : ''}`);
          });
        }
      },
      scopedSlots: {
        default: ({ item }) => {
          return [
            h('mu-list-item-content', [
              item.title ? h('mu-list-item-title', {
              }, [
                h('span', {
                  staticClass: 'search-component',
                  domProps: {
                    innerHTML: item.highlightedCompo
                  }
                }),
                h('span', {
                  staticClass: 'search-separator'
                }, '>'),
                h('span', {
                  domProps: {
                    innerHTML: item.title
                  }
                })
              ]) : undefined,
              h('mu-list-item-sub-title', {
                domProps: {
                  innerHTML: item.content
                }
              })
            ])
          ];
        }
      }
    }, [
      h('mu-icon', {
        staticClass: 'mu-search-icon',
        props: {
          value: 'search'
        },
        slot: 'prepend'
      }),
      this.createAlgoliasearchLink(h)
    ]);
  }
};

