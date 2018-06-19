import algoliasearch from 'algoliasearch';
export default {
  created () {
    const client = algoliasearch('RGHCT36SHC', 'f38ef54caaee2e01cbd18a077325dee1');
    this.index = client.initIndex('your_index_name');
  },
  render (h) {
    return h('mu-auto-complete', {
      staticClass: 'mu-docs-search',
      props: {
        solo: true,
        icon: 'search'
      }
    });
  }
};

