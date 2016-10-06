<template>
  <abstract-button :disabled="disabled" @click.native="handlerClick" :href="href" :style="buttonStyle"
    class="mu-raised-button" :rippleColor="rippleColor":rippleOpacity="rippleOpacity"
    :class="buttonClass" wrapperClass="mu-raised-button-wrapper" :centerRipple="false">
    <span class="mu-raised-button-label" :class="[labelClass]" v-if="label && labelPosition === 'before'">{{label}}</span>
    <icon :value="icon"></icon>
    <span class="mu-raised-button-label" :class="[labelClass]" v-if="label && labelPosition === 'after'">{{label}}</span>
    <slot></slot>
  </abstract-button>
</template>

<script>
import abstractButton from '../internal/abstractButton'
import {getColor} from '../utils'
import icon from '../icon'
export default {
  name: 'mu-raised-button',
  props: {
    label: {
      type: String
    },
    icon: {
      type: String
    },
    labelPosition: {
      type: String,
      default: 'after'
    },
    labelClass: {
      type: String,
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
    fullWidth: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ''
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
  computed: {
    buttonStyle () {
      return {
        'backgroud-color': getColor(this.backgroundColor),
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
        'mu-raised-button-full': this.fullWidth
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
  background: @alternateTextColor;
  color: @textColor;
  .flex-shrink(0);
  margin: 0;
  outline: 0;
  padding: 0;
  cursor: pointer;
  &.hover {
    .mu-raised-button-wrapper {
      background-color: fade(@textColor, 10%);
    }
  }
  &.disabled{
    color: fade(@textColor, 30%);
    cursor: default;
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
}
.mu-raised-button-primary{
  background-color: @primary1Color;
}

.mu-raised-button-secondary{
  background-color: @accent1Color;
}

.mu-raised-button-full{
  width: 100%;
}

.mu-raised-button-inverse {
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

@media (min-width: 480px) {
  .mu-raised-button {
    min-width: 88px;
    &:hover {
      .depth(2);
    }
  }
}
</style>
