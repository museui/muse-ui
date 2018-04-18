import AbstractButton from '../internal/AbstractButton';
import StepLabel from './StepLabel';

export default {
  name: 'mu-step-button',
  props: {
    active: Boolean,
    completed: Boolean,
    disabled: Boolean,
    ripple: {
      type: Boolean,
      default: true
    },
    num: [String, Number],
    last: Boolean,
    childrenInLabel: {
      type: Boolean,
      default: true
    }
  },
  render (h) {
    const slots = this.$slots;

    const stepLabel = h(StepLabel, {
      props: {
        active: this.active,
        completed: this.completed,
        num: this.num,
        disabled: this.disabled
      }
    }, [
      slots.default,
      slots.icon && slots.icon.map(vNode => {
        if (!vNode.tag) return vNode;
        vNode.data = vNode.data || {};
        vNode.data.slot = 'icon';
      })
    ]);

    return h(AbstractButton, {
      staticClass: 'mu-step-button',
      props: {
        disabled: this.disabled,
        ripple: this.ripple
      },
      on: this.$listeners
    }, [this.childrenInLabel ? stepLabel : slots.default]);
  }
};
