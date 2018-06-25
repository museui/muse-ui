import popup from '../internal/mixins/popup';
import { SlideTopTransition, SlideBottomTransition } from '../internal/transitions';
import color from '../internal/mixins/color';

export default {
  name: 'mu-snackbar',
  mixins: [popup, color],
  props: {
    overlay: {
      default: false
    },
    escPressClose: {
      default: false
    },
    textColor: String,
    message: String,
    position: {
      type: String,
      default: 'bottom',
      validator (val) {
        return ['top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-end'].indexOf(val) !== -1;
      }
    }
  },
  render (h) {
    const message = h('div', {
      staticClass: 'mu-snackbar-message'
    }, this.$slots.default && this.$slots.default.length > 0 ? this.$slots.default : this.message);
    const action = this.$slots.action ? h('div', {
      staticClass: 'mu-snackbar-action'
    }, this.$slots.action) : undefined;

    return h(this.position.indexOf('top') !== -1 ? SlideTopTransition : SlideBottomTransition, [
      this.open ? h('div', {
        staticClass: `mu-snackbar ${this.getColorClass()} ${this.getTextColorClass()}`,
        style: {
          'z-index': this.zIndex,
          'background-color': this.getColor(this.color),
          'color': this.getColor(this.textColor)
        },
        class: {
          ['mu-snackbar-' + this.position]: !!this.position
        },
        on: this.$listeners
      }, [message, action]) : undefined
    ]);
  }
};
