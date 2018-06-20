import algoliasearch from 'algoliasearch';
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      searchText: ''
    };
  },
  created () {
    const client = algoliasearch('RGHCT36SHC', 'f38ef54caaee2e01cbd18a077325dee1');
    this.index = client.initIndex('getstarted_actors');
  },
  methods: {
    search (text) {
      if (!text) return;
      this.index.search({ query: text, hitsPerPage: 6 }, (err, res) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(res);
      });
    }
  },
  render (h) {
    return h('mu-auto-complete', {
      staticClass: 'mu-docs-search',
      props: {
        solo: true,
        icon: 'search',
        value: this.searchText
      },
      on: {
        input: (val) => {
          this.searchText = val;
          if (this.timer) clearTimeout(this.timer);
          this.timer = setTimeout(() => this.search(this.searchText), 500);
        },
        select: (value, item) => {
        }
      }
    });
  }
};

