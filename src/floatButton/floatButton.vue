<template>
<abstract-button :type="type" :href="href" @click="handleClick" :target="target"
  :to="to" :tag="tag" :activeClass="activeClass" :event="event" :exact="exact" :append="append" :replace="replace"
  @keyboardFocus="handleKeyboardFocus" @hover="handleHover" @hoverExit="handleHoverExit"
  :style="buttonStyle" :disabled="disabled" class="mu-float-button" :class="[buttonClass]">
  <div class="mu-float-button-wrapper">
    <slot>
      <icon :value="this.icon" :class="iconClass"></icon>
    </slot>
  </div>
</abstract-button>
</template>

<script>
import abstractButton from '../internal/abstractButton'
import routerMixin from '../internal/routerMixin'
import icon from '../icon'
import {getColor} from '../utils'
export default {
  name: 'mu-float-button',
  mixins: [routerMixin],
  props: {
    icon: {
      type: String
    },
    iconClass: {
      type: [String, Array, Object],
      default: ''
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
    disabled: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    mini: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: ''
    }
  },
  computed: {
    buttonClass () {
      let classNames = []
      if (this.secondary) classNames.push('mu-float-button-secondary')
      if (this.mini) classNames.push('mu-float-button-mini')
      return classNames.join(' ')
    },
    buttonStyle () {
      return {
        'background-color': getColor(this.backgroundColor)
      }
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    },
    handleKeyboardFocus (isFocus) {
      this.$emit('keyboardFocus', isFocus)
      this.$emit('keyboard-focus', isFocus)
    },
    handleHover (event) {
      this.$emit('hover', event)
    },
    handleHoverExit (event) {
      this.$emit('hoverExit', event)
      this.$emit('hover-exit', event)  // 兼容 html 里的用法
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
.mu-float-button {
  position: relative;
  display: inline-block;
  overflow: visible;
  line-height: 1;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  appearance: none;
  background-color: @primaryColor;
  color: @alternateTextColor;
  text-decoration: none;
  transition-duration: 300ms;
  transition-timing-function: @easeOutFunction;
  transform: translate3d(0, 0, 0);
  .flex-shrink(0);
  margin: 0;
  outline: 0;
  padding: 0;
  cursor: pointer;
  .mu-circle-ripple{
    opacity: .3;
  }
  &.disabled{
    color: fade(@textColor, 30%);
    cursor: not-allowed;
    background-color: darken(@alternateTextColor, 10%);
    box-shadow: none;
    &.hover,
    &:active,
    &:hover {
      .mu-float-button-wrapper {
        background-color: transparent;
      }
      box-shadow: none;
    }
  }
  .depth(2);
  &.hover,
  &:active{
    .depth(3);
    .mu-float-button-wrapper {
      background-color: fade(@alternateTextColor, 30%);
    }
  }
}

.mu-float-button-wrapper{
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

.mu-float-button-mini {
  width: 40px;
  height: 40px;
}

.mu-float-button-secondary {
  background-color: @accentColor;
}
</style>
