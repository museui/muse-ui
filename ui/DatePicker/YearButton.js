export default {
  props: {
    year: [String, Number],
    selected: Boolean
  },
  mounted () {
    if (this.selected) this.$parent.scrollToSelectedYear(this.$el);
  },
  render (h) {
    return h('button', {
      staticClass: 'mu-year-button',
      class: {
        selected: this.selected
      },
      on: this.$listeners
    }, [
      h('span', {
        staticClass: 'mu-year-button-text'
      }, this.year)
    ]);
  },
  watch: {
    selected (val) {
      if (val) this.$parent.scrollToSelectedYear(this.$el);
    }
  }

};
