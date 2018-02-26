export default {
  name: 'mu-step-label',
  props: {
    active: Boolean,
    completed: Boolean,
    disabled: Boolean,
    num: [String, Number]
  },
  render (h) {
    const slots = this.$slots;
    const isSlotsIcon = slots.icon && slots.icon.length > 0;
    const icon = this.completed ? h('svg', {
      staticClass: 'mu-step-label-icon',
      attrs: {
        viewBox: '0 0 24 24'
      }
    }, [
      h('path', {
        attrs: {
          d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
        }
      })
    ]) : h('div', { staticClass: 'mu-step-label-circle' }, this.num);

    return h('span', {
      staticClass: 'mu-step-label',
      class: {
        active: this.active,
        completed: this.completed,
        disabled: this.disabled
      },
      on: this.$listeners
    }, [
      this.num || isSlotsIcon
        ? h('span', { staticClass: 'mu-step-label-icon-container' }, [isSlotsIcon ? slots.icon : icon]) : undefined,
      slots.default
    ]);
  }
};
