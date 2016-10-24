import touchRipple from './touchRipple'
import focusRipple from './focusRipple'
import keycode from 'keycode'
import {isPc} from '../utils'
let tabPressed = false
let listening = false

function listenForTabPresses () {
  if (!listening) {
    window.addEventListener('keydown', (event) => {
      tabPressed = keycode(event) === 'tab'
    })
    listening = true
  }
}

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
    disableFocusRipple: {
      type: Boolean,
      default: false
    },
    disableKeyboardFocus: {
      type: Boolean,
      default: false
    },
    disableTouchRipple: {
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
      type: [String, Object]
    },
    containerElement: {
      type: String
    },
    tabIndex: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'button'
    },
    keyboardFocused: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      hover: false,
      isKeyboardFocused: false
    }
  },
  computed: {
    buttonClass () {
      let classNames = []
      if (this.disabled) classNames.push('disabled')
      if (this.hover || this.isKeyboardFocused) classNames.push('hover')
      return classNames.join(' ')
    }
  },
  mounted () {
    listenForTabPresses()
    if (this.isKeyboardFocused) {
      this.$el.focus()
      this.$emit('KeyboardFocus', true)
    }
  },
  updated () {
    const {disabled, disableKeyboardFocus, keyboardFocused} = this
    if (!disabled && keyboardFocused && !disableKeyboardFocus) {
      this.isKeyboardFocused = true
    }
  },
  beforeUpdate () {
    if ((this.disabled || this.disableKeyboardFocus) && this.isKeyboardFocused) {
      this.isKeyboardFocused = false
      this.$emit('KeyboardFocus', false)
    }
  },
  beforeDestory () {
    this.cancelFocusTimeout()
  },
  methods: {
    handlerHover () {
      if (!this.disabled && isPc()) this.hover = true
    },
    handlerOut () {
      this.hover = false
    },
    removeKeyboardFocus (event) {
      if (this.isKeyboardFocused) {
        this.isKeyboardFocused = false
        this.$emit('KeyboardFocus', false)
      }
    },
    setKeyboardFocus (event) {
      if (!this.isKeyboardFocused) {
        this.isKeyboardFocused = true
        this.$emit('KeyboardFocus', true)
      }
    },

    cancelFocusTimeout () {
      if (this.focusTimeout) {
        clearTimeout(this.focusTimeout)
        this.focusTimeout = null
      }
    },
    handlerKeydown (event) {
      if (!this.disabled && !this.disableKeyboardFocus) {
        if (keycode(event) === 'enter' && this.isKeyboardFocused) {
          this.$el.click()
        }
        if (keycode(event) === 'esc' && this.isKeyboardFocused) {
          this.removeKeyboardFocus(event)
        }
      }
    },
    handlerKeyup (event) {
      if (!this.disabled && !this.disableKeyboardFocus) {
        if (keycode(event) === 'space' && this.isKeyboardFocused) {
          this.handleTouchTap(event)
        }
      }
    },
    handlerFocus (event) {
      if (!this.disabled && !this.disableKeyboardFocus) {
        this.focusTimeout = setTimeout(() => {
          if (tabPressed) {
            this.setKeyboardFocus(event)
            tabPressed = false
          }
        }, 150)
      }
    },
    handlerBlur (event) {
      this.cancelFocusTimeout()
      this.removeKeyboardFocus(event)
    },
    handleClick (event) {
      if (!this.disabled) {
        tabPressed = false
        this.removeKeyboardFocus(event)
      }
    },
    createButtonChildren (h) {
      const {
        isKeyboardFocused,
        disabled,
        disableFocusRipple,
        disableKeyboardFocus,
        rippleColor,
        rippleOpacity,
        disableTouchRipple
      } = this
      let children = []
      children = children.concat(this.$slots.default)
      const FocusRipple = isKeyboardFocused && !disabled && !disableFocusRipple && !disableKeyboardFocus ? h(focusRipple, {
        color: rippleColor,
        opacity: rippleOpacity
      }) : undefined

      if (!disabled && !disableTouchRipple) {
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
      children.unshift(FocusRipple)
      return children
    }
  },
  render (h) {
    var domProps = {
      disabled: this.disabled,
      href: this.disabled ? 'javascript:;' : this.href,
      type: this.type
    }
    if (!this.disabled) domProps.tabIndex = this.tabIndex
    return h(this.href ? 'a' : this.containerElement ? this.containerElement : 'button', {
      class: this.buttonClass,
      domProps: domProps,
      style: {
        'user-select': 'none',
        'outline': 'none',
        'cursor': 'pointer'
      },
      on: {
        mouseenter: this.handlerHover,
        mouseleave: this.handlerOut,
        touchend: this.handlerOut,
        touchcancel: this.handlerOut,
        click: this.handleClick,
        focus: this.handlerFocus,
        blur: this.handlerBlur,
        keydown: this.handlerKeydown,
        keyup: this.handlerKeyup
      }
    }, this.createButtonChildren(h))
  }
}
