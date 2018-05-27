import ExpandTransition from '../internal/ExpandTransition';

export default {
  name: 'mu-step-content',
  props: {
    active: Boolean,
    last: Boolean
  },
  render (h) {
    return h('div', {
      staticClass: 'mu-step-content',
      class: {
        last: this.last
      },
      on: this.$listeners
    }, [
      h('div', {
        style: {
          position: 'relative',
          overflow: 'hidden',
          height: '100%'
        }
      }, [
        h(ExpandTransition, [
          this.active ? h('div', { staticClass: 'mu-step-content-inner', ref: 'inner' }, this.$slots.default) : undefined
        ])
      ])
    ]);
  }
};
