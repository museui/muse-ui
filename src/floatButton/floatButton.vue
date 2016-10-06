<template>
<abstract-button :href="href" @click.native="handlerClick" :style="buttonStyle" :disabled="disabled" class="mu-float-button" :class="[buttonClass]">
  <div class="mu-float-button-wrapper">
    <icon :value="this.icon" :class="[iconClass]"></icon>
  </div>
</abstract-button>
</template>

<script>
import abstractButton from '../internal/abstractButton'
import icon from '../icon'
import {getColor} from '../utils'
export default {
  name: 'mu-float-button',
  props: {
    icon: {
      type: String
    },
    iconClass: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
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
    handlerClick (e) {
      this.$emit('click', e)
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
  background-color: @primary1Color;
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
  background-color: @accent1Color;
}
</style>
