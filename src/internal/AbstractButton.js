import TouchRipple from './TouchRipple';
import FocusRipple from './FocusRipple';
import route from './mixins/route';
import ripple from './mixins/ripple';
import keycode from 'keycode';
import { isPc } from '../utils';

let tabPressed = false;
let listening = false;

function listenForTabPresses () {
  if (!listening) {
    typeof window !== 'undefined' && window.addEventListener('keydown', (event) => {
      tabPressed = keycode(event) === 'tab';
    });
    listening = true;
  }
}

export default {
  mixins: [route, ripple],
  props: {
    disabled: Boolean,
    centerRipple: Boolean,
    containerElement: String,
    disableKeyboardFocus: Boolean,
    wrapperClass: String,
    wrapperStyle: [String, Object],
    type: {
      type: String,
      default: 'button'
    },
    keyboardFocused: Boolean
  },
  data () {
    return {
      hover: false,
      isKeyboardFocused: false
    };
  },
  computed: {
    buttonClass () {
      const classNames = [];
      if (this.disabled) classNames.push('disabled');
      if (!this.disabled && (this.hover || this.isKeyboardFocused)) classNames.push('hover');
      return classNames.join(' ');
    }
  },
  beforeMount () {
    const { disabled, disableKeyboardFocus, keyboardFocused } = this;
    if (!disabled && keyboardFocused && !disableKeyboardFocus) {
      this.isKeyboardFocused = true;
    }
  },
  mounted () {
    listenForTabPresses();
    if (this.isKeyboardFocused) {
      this.$el.focus();
      this.$emit('keyboardFocus', true);
    }
  },
  beforeUpdate () {
    if ((this.disabled || this.disableKeyboardFocus) && this.isKeyboardFocused) {
      this.isKeyboardFocused = false;
      this.$emit('keyboardFocus', false);
    }
  },
  beforeDestory () {
    this.cancelFocusTimeout();
  },
  methods: {
    handleHover (event) {
      if (!this.disabled && isPc()) {
        this.hover = true;
        this.$emit('hover', event);
        this.$emit('mouseenter', event);
      }
    },
    handleOut (event) {
      if (!this.disabled && isPc()) {
        this.hover = false;
        this.$emit('hoverExit', event);
        this.$emit(event.type, event);
      }
    },
    removeKeyboardFocus (event) {
      if (this.isKeyboardFocused) {
        this.isKeyboardFocused = false;
        this.$emit('KeyboardFocus', false);
      }
    },
    setKeyboardFocus (event) {
      if (!this.isKeyboardFocused) {
        this.isKeyboardFocused = true;
        this.$emit('KeyboardFocus', true);
      }
    },
    cancelFocusTimeout () {
      if (this.focusTimeout) {
        clearTimeout(this.focusTimeout);
        this.focusTimeout = null;
      }
    },
    handleKeydown (event) {
      if (!this.disabled && !this.disableKeyboardFocus) {
        if (keycode(event) === 'enter' && this.isKeyboardFocused) {
          this.$el.click();
          event.preventDefault();
        }
        if (keycode(event) === 'esc' && this.isKeyboardFocused) {
          this.removeKeyboardFocus(event);
        }
      }
      this.$emit('keydown', event);
    },
    handleFocus (event) {
      if (!this.disabled && !this.disableKeyboardFocus) {
        this.focusTimeout = setTimeout(() => {
          if (tabPressed) {
            this.setKeyboardFocus(event);
            tabPressed = false;
          }
        }, 150);
        this.$emit('focus', event);
      }
    },
    handleBlur (event) {
      this.cancelFocusTimeout();
      this.removeKeyboardFocus(event);
      this.$emit('blur', event);
    },
    handleClick (event) {
      if (!this.disabled) {
        tabPressed = false;
        // this.$el.blur(); // 点击之后失去焦点
        this.removeKeyboardFocus(event);
        this.$emit('click', event);
      }
    },
    getTagName () {
      const defaultTag = 'button';
      switch (true) {
        case !!this.to:
          return 'router-link';
        case !!this.href:
          return 'a';
        case !!this.containerElement:
          return this.containerElement;
        default:
          return defaultTag;
      }
    },
    createButtonChildren (h) {
      const {
        isKeyboardFocused,
        disabled,
        ripple,
        disableKeyboardFocus,
        rippleColor,
        rippleOpacity
      } = this;
      let children = [];
      children = children.concat(this.$slots.default);
      const FocusRippleEL = isKeyboardFocused && !disableKeyboardFocus && !disabled && ripple
        ? h(FocusRipple, {
          color: rippleColor,
          opacity: rippleOpacity
        }) : undefined;

      if (!disabled && ripple) {
        children = [h(TouchRipple, {
          class: this.wrapperClass,
          style: this.wrapperStyle,
          ref: 'ripple',
          props: {
            autoBind: false,
            color: this.rippleColor,
            centerRipple: this.centerRipple,
            opacity: this.rippleOpacity
          }
        }, this.$slots.default)];
      } else {
        children = [h('div', {
          class: this.wrapperClass,
          style: this.wrapperStyle
        }, this.$slots.default)];
      }
      children.unshift(FocusRippleEL);
      return children;
    }
  },
  watch: {
    disabled (val) {
      if (!val) this.hover = false;
    }
  },
  render (h) {
    const tagName = this.getTagName();
    const attrs = {
      target: this.target,
      tabindex: !this.disabled ? (this.$attrs.tabindex || 0) : -1
    };

    if (tagName === 'button') {
      attrs.disabled = this.disabled;
      attrs.type = this.type;
    }

    if (this.href && !this.disabled) {
      attrs.href = this.href;
    }

    const props = this.to ? {
      to: this.to,
      tag: this.tag,
      activeClass: this.activeClass,
      event: this.event,
      exact: this.exact,
      append: this.append,
      replace: this.replace,
      exactActiveClass: this.exactActiveClass
    } : {};

    return h(tagName, {
      class: this.buttonClass,
      attrs,
      props,
      style: tagName === 'button' ? {
        'user-select': this.disabled ? '' : 'none',
        '-webkit-user-select': this.disabled ? '' : 'none',
        'outline': 'none',
        'appearance': 'none'
      } : {},
      [tagName === 'router-link' ? 'nativeOn' : 'on']: {
        ...this.$listeners,
        mouseup: (e) => {
          this.$refs.ripple && this.$refs.ripple.end(e);
          this.$emit('mouseup', e);
        },
        mousedown: (e) => {
          this.$refs.ripple && this.$refs.ripple.handleMouseDown(e);
          this.$emit('mousedown', e);
        },
        mouseenter: this.handleHover,
        mouseleave: (e) => {
          this.$refs.ripple && this.$refs.ripple.end(e);
          this.handleOut(e);
        },
        touchstart: (e) => {
          this.$refs.ripple && this.$refs.ripple.handleTouchStart(e);
          this.$emit('touchstart', e);
        },
        touchend: (e) => {
          this.$refs.ripple && this.$refs.ripple.end(e);
          this.handleOut(e);
        },
        touchcancel: (e) => {
          this.$refs.ripple && this.$refs.ripple.end(e);
          this.handleOut(e);
        },
        click: this.handleClick,
        focus: this.handleFocus,
        blur: this.handleBlur,
        keydown: this.handleKeydown
      }
    }, this.createButtonChildren(h));
  }
};
