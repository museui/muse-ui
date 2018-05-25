import route from '../internal/mixins/route';
import ripple from '../internal/mixins/ripple';
import button from '../internal/mixins/button';
import color from '../internal/mixins/color';
import AbstractButton from '../internal/AbstractButton';

export default {
  name: 'mu-button',
  mixins: [route, ripple, button, color],
  props: {
    fab: Boolean,
    flat: Boolean,
    icon: Boolean,
    small: Boolean,
    large: Boolean,
    round: Boolean,
    textColor: String,
    fullWidth: Boolean
  },
  computed: {
    buttonClass () {
      const colorClass = this.getNormalColorClass(this.color, this.icon || this.flat);
      const textColorClass = this.getTextColorClass();
      return {
        'mu-fab-button': this.fab,
        'mu-flat-button': this.flat,
        'mu-icon-button': this.icon,
        'mu-raised-button': !this.icon && !this.flat && !this.fab,
        'mu-button-small': this.small,
        'mu-button-large': this.large,
        'mu-button-full-width': !this.fab && !this.icon && this.fullWidth,
        [colorClass]: true,
        [textColorClass]: true,
        'mu-button-round': this.round,
        'is-focus': this.focus
      };
    }
  },
  render (h) {
    return h(AbstractButton, {
      staticClass: 'mu-button',
      class: this.buttonClass,
      style: {
        [this.flat || this.icon ? 'color' : 'background-color' ]: this.getColor(this.color),
        color: this.getColor(this.textColor)
      },
      props: {
        wrapperClass: 'mu-button-wrapper',
        disabled: this.disabled,
        keyboardFocused: this.keyboardFocused,
        type: this.type,
        centerRipple: this.icon,
        ripple: this.ripple,
        rippleOpacity: this.rippleOpacity,
        rippleColor: this.rippleColor,
        ...this.generateRouteProps()
      },
      on: this.getListener()
    }, this.$slots.default);
  }
};
