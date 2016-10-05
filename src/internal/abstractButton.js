import touchRipple from './touchRipple'
const IS_TOUCH = ('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch
export default {
  props: {
    href: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rippleColor: {
      type: String,
      default: ''
    },
    rippleOpacity: {
      type: Number
    },
    centerRipple: {
      type: Boolean,
      default: true
    },
    wrapperClass: {
      type: String,
      default: ''
    },
    wrapperStyle: {
    },
    containerElement: {
      type: String
    }
  },
  data () {
    return {
      hover: false
    }
  },
  computed: {
    buttonClass () {
      let classNames = []
      if (this.disabled) classNames.push('disabled')
      if (this.hover) classNames.push('hover')
      return classNames.join(' ')
    }
  },
  methods: {
    handlerHover () {
      if (!IS_TOUCH) this.hover = true
    },
    handlerOut () {
      this.hover = false
    }
  },
  render (h) {
    let children
    if (this.disabled) {
      children = this.$slots.default
    } else {
      children = [h(touchRipple, {
        class: this.wrapperClass,
        style: this.wrapperStyle,
        props: {
          color: this.rippleColor,
          centerRipple: this.centerRipple,
          opacity: this.rippleOpacity
        }
      }, this.$slots.default)]
    }
    return h(this.href ? 'a' : this.containerElement ? this.containerElement : 'button', {
      class: this.buttonClass,
      domProps: {
        disabled: this.disabled,
        href: this.disabled ? 'javascript:;' : this.href
      },
      style: {
        'user-select': 'none'
      },
      on: {
        mouseenter: this.handlerHover,
        mouseleave: this.handlerOut,
        touchend: this.handlerOut,
        touchcancel: this.handlerOut
      }
    }, children)
  }
}
