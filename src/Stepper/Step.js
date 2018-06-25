export default {
  name: 'mu-step',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    completed: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number
    },
    last: {
      type: Boolean,
      default: false
    }
  },
  render (h) {
    const { active, completed, disabled, index, last } = this;
    const children = [];
    const slots = this.$slots;

    if (slots.default && slots.default.length > 0) {
      slots.default.forEach((vNode) => {
        if (!vNode.componentOptions || !vNode.componentOptions.propsData) return;
        const num = index + 1;
        vNode.componentOptions.propsData = { active, completed, disabled, last, num, ...vNode.componentOptions.propsData };
        children.push(vNode);
      });
    }

    return h('div', { staticClass: 'mu-step', on: this.$listeners }, children);
  }
};
