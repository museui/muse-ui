export default {
  name: 'mu-breadcrumbs',
  props: {
    divider: {
      type: String,
      default: '/'
    }
  },
  methods: {
    createChildren (h) {
      if (!this.$slots.default) return;
      const divider = this.$slots.divider ? this.$slots.divider : this.divider;
      const children = [];
      const length = this.$slots.default.length;
      const dividerData = { staticClass: 'mu-breadcrumbs-divider' };

      this.$slots.default.forEach((el, i) => {
        children.push(el);
        if (!el.componentOptions || el.componentOptions.tag !== 'mu-breadcrumbs-item' || i === length - 1) return;

        children.push(this.$createElement('li', dividerData, divider));
      });
      return children;
    }
  },
  render (h) {
    return h('ul', {
      staticClass: 'mu-breadcrumbs',
      on: this.$listeners
    }, this.createChildren(h));
  }
};
