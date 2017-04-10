<template>
  <abstract-button @KeyboardFocus="handleKeyboardFocus"
    @hover="handleHover" @hoverExit="handleHoverExit" @click="handleClick"
    :type="type" :href="href" :target="target" :style="buttonStyle"
    :to="to" :tag="tag" :activeClass="activeClass" :event="event" :exact="exact" :append="append" :replace="replace"
    class="mu-raised-button" :rippleColor="rippleColor":rippleOpacity="rippleOpacity"
    :disabled="disabled" :keyboardFocused="keyboardFocused"
    :class="buttonClass" wrapperClass="mu-raised-button-wrapper" :centerRipple="false">
    <span class="mu-raised-button-label" :class="labelClass" v-if="label && labelPosition === 'before'">{{label}}</span>
    <icon :value="icon" :class="iconClass"></icon>
    <slot></slot>
    <span class="mu-raised-button-label" :class="labelClass" v-if="label && labelPosition === 'after'">{{label}}</span>
  </abstract-button>
</template>

<script>
import abstractButton from '../internal/abstractButton'
import routerMixin from '../internal/routerMixin'
import {getColor} from '../utils'
import icon from '../icon'
export default {
  name: 'mu-raised-button',
  mixins: [routerMixin],
  props: {
    icon: {
      type: String
    },
    iconClass: {
      type: [String, Array, Object]
    },
    label: {
      type: String
    },
    labelPosition: {
      type: String,
      default: 'after'
    },
    labelClass: {
      type: [String, Array, Object],
      default: ''
    },
    primary: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    keyboardFocused: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    type: {
      type: String
    },
    href: {
      type: String,
      default: ''
    },
    target: {
      type: String
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    rippleColor: {
      type: String
    },
    rippleOpacity: {
      type: Number
    }
  },
  data () {
    return {
      focus: false
    }
  },
  computed: {
    buttonStyle () {
      return {
        'background-color': getColor(this.backgroundColor),
        'color': getColor(this.color)
      }
    },
    inverse () {
      return this.primary || this.secondary || this.backgroundColor
    },
    buttonClass () {
      return {
        'mu-raised-button-primary': this.primary,
        'mu-raised-button-secondary': this.secondary,
        'label-before': this.labelPosition === 'before',
        'mu-raised-button-inverse': this.inverse,
        'mu-raised-button-full': this.fullWidth,
        'focus': this.focus,
        'no-label': !this.label
      }
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    },
    handleKeyboardFocus (isFocus) {
      this.focus = isFocus
      this.$emit('keyboardFocus', isFocus)
      this.$emit('keyboard-focus', isFocus)
    },
    handleHover (e) {
      this.$emit('hover', e)
    },
    handleHoverExit (e) {
      this.$emit('hoverExit', e)
      this.$emit('hover-exit', e)
    }
  },
  components: {
    'abstract-button': abstractButton,
    icon
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-raised-button {
  display: inline-block;
  overflow: hidden;
  position: relative;
  border-radius: 2px;
  height: 36px;
  line-height: 36px;
  min-width: 88px;
  transition-duration: 300ms;
  transition-timing-function: @easeOutFunction;
  transform: translate3d(0, 0, 0);
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  appearance: none;
  background-color: @alternateTextColor;
  color: @textColor;
  .flex-shrink(0);
  margin: 0;
  outline: 0;
  padding: 0;
  cursor: pointer;
  &.focus {
    .depth(2);
  }
  &.hover {
    .mu-raised-button-wrapper {
      background-color: fade(@textColor, 10%);
    }
  }
  &.disabled{
    color: fade(@textColor, 30%);
    cursor: not-allowed;
    background-color: darken(@alternateTextColor, 10%);
    box-shadow: none;
    &.hover,
    &:active,
    &:hover {
      box-shadow: none;
      .mu-raised-button-wrapper {
        background-color: transparent;
      }
    }
  }
  .mu-icon {
    vertical-align: middle;
    margin-left: 12px;
    margin-right: 0;
    + .mu-raised-button-label {
      padding-left: 8px;
    }
  }
  &.no-label {
    .mu-icon {
      margin: 0;
    }
  }
  &.label-before {
    .mu-raised-button-wrapper{
      padding-right: 8px;
    }
    .mu-icon {
      margin-right: 4px;
      margin-left: 0;
    }
    .mu-raised-button-label {
      padding-right: 8px;
    }
  }
  .depth(1);
  &:active {
    .depth(2);
  }
}
.mu-raised-button-wrapper{
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.mu-raised-button-primary{
  background-color: @primaryColor;
}

.mu-raised-button-secondary{
  background-color: @accentColor;
}

.mu-raised-button-full{
  width: 100%;
}

.mu-raised-button.mu-raised-button-inverse {
  color: @alternateTextColor;
  .mu-circle-ripple {
    opacity: 0.3;
  }
  &.hover {
    .mu-raised-button-wrapper {
      background-color: fade(@alternateTextColor, 30%);
    }
  }
}

.mu-raised-button-label{
  vertical-align: middle;
  padding-right: 16px;
  padding-left: 16px;
}
</style>
