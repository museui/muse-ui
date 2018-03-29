import touchRipple from './touchRipple'
import focusRipple from './focusRipple'
import keycode from 'keycode'
import {isPc} from '../utils'
import config from '../config'
import routerMixin from './routerMixin'
let tabPressed = false
let listening = false

function listenForTabPresses () {
  if (!listening) {
    typeof window !== 'undefined' && window.addEventListener('keydown', (event) => {
      tabPressed = keycode(event) === 'tab'
    })
    listening = true
  }
}

export default {
  mixins: [routerMixin],
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
      if (!this.disabled && (this.hover || this.isKeyboardFocused)) classNames.push('hover')
      return classNames.join(' ')
    }
  },
  beforeMount () {
    const {disabled, disableKeyboardFocus, keyboardFocused} = this
    if (!disabled && keyboardFocused && !disableKeyboardFocus) {
      this.isKeyboardFocused = true
    }
  },
  mounted () {
    listenForTabPresses()
    if (this.isKeyboardFocused) {
      this.$el.focus()
      this.$emit('keyboardFocus', true)
    }
  },
  beforeUpdate () {
    if ((this.disabled || this.disableKeyboardFocus) && this.isKeyboardFocused) {
      this.isKeyboardFocused = false
      this.$emit('keyboardFocus', false)
    }
  },
  beforeDestory () {
    this.cancelFocusTimeout()
  },
  methods: {
    handleHover (event) {
      if (!this.disabled && isPc()) {
        this.hover = true
        this.$emit('hover', event)
      }
    },
    handleOut (event) {
      if (!this.disabled && isPc()) {
        this.hover = false
        this.$emit('hoverExit', event)
      }
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
    handleKeydown (event) {
      if (!this.disabled && !this.disableKeyboardFocus) {
        if (keycode(event) === 'enter' && this.isKeyboardFocused) {
          this.$el.click()
        }
        if (keycode(event) === 'esc' && this.isKeyboardFocused) {
          this.removeKeyboardFocus(event)
        }
      }
    },
    handleKeyup (event) {
      if (!this.disabled && !this.disableKeyboardFocus) {
        if (keycode(event) === 'space' && this.isKeyboardFocused) {
        }
      }
    },
    handleFocus (event) {
      if (!this.disabled && !this.disableKeyboardFocus) {
        this.focusTimeout = setTimeout(() => {
          if (tabPressed) {
            this.setKeyboardFocus(event)
            tabPressed = false
          }
        }, 150)
      }
    },
    handleBlur (event) {
      this.cancelFocusTimeout()
      this.removeKeyboardFocus(event)
    },
    handleClick (event) {
      if (!this.disabled) {
        tabPressed = false
        this.$el.blur() // 点击之后失去焦点
        this.removeKeyboardFocus(event)
        this.$emit('click', event)
      }
    },
    getTagName () {
      // const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') !== -1
      const defaultTag = 'button'
      switch (true) {
        case !!this.to:
          return 'router-link'
        case !!this.href:
          return 'a'
        case !!this.containerElement:
          return this.containerElement
        default:
          return defaultTag
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
      const FocusRipple = isKeyboardFocused && !config.disableFocusRipple && !disabled &&
                          !disableFocusRipple && !disableKeyboardFocus ? h(focusRipple, {
                            color: rippleColor,
                            opacity: rippleOpacity
                          }) : undefined

      if (!disabled && !disableTouchRipple && !config.disableTouchRipple) {
        children = [h(touchRipple, {
          class: this.wrapperClass,
          style: this.wrapperStyle,
          props: {
            color: this.rippleColor,
            centerRipple: this.centerRipple,
            opacity: this.rippleOpacity
          }
        }, this.$slots.default)]
      } else {
        children = [h('div', {
          class: this.wrapperClass,
          style: this.wrapperStyle
        }, this.$slots.default)]
      }
      children.unshift(FocusRipple)
      return children
    }
  },
  watch: {
    disabled (val) {
      if (!val) this.hover = false
    }
  },
  render (h) {
    const domProps = {
      disabled: this.disabled,
      type: this.type
    }
    const props = this.to ? {
      to: this.to,
      tag: this.tag,
      activeClass: this.activeClass,
      event: this.event,
      exact: this.exact,
      append: this.append,
      replace: this.replace
    } : {}

    if (this.href) {
      domProps.href = this.disabled ? 'javascript:;' : this.href
    }

    if (!this.disabled) domProps.tabIndex = this.tabIndex
    const tagName = this.getTagName()
    return h(tagName, {
      class: this.buttonClass,
      domProps,
      props,
      style: {
        'user-select': this.disabled ? '' : 'none',
        '-webkit-user-select': this.disabled ? '' : 'none',
        'outline': 'none',
        'cursor': this.disabled ? '' : 'pointer',
        'appearance': 'none'
      },
      [tagName === 'router-link' ? 'nativeOn' : 'on']: {
        mouseenter: this.handleHover,
        mouseleave: this.handleOut,
        touchend: this.handleOut,
        touchcancel: this.handleOut,
        click: this.handleClick,
        focus: this.handleFocus,
        blur: this.handleBlur,
        keydown: this.handleKeydown,
        keyup: this.handleKeyup
      }
    }, this.createButtonChildren(h))
  }
}
