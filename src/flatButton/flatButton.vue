<template>
<abstract-button
  :disabled="disabled" wrapperClass="mu-flat-button-wrapper" :href="href" :style="buttonStyle" class="mu-flat-button"
  :class="{'mu-flat-button-primary': primary, 'mu-flat-button-secondary': secondary, 'label-before': labelPosition === 'before'}" :centerRipple="false">
  <span class="mu-flat-button-label" :class="[labelClass]" v-if="label && labelPosition === 'before'">{{label}}</span>
  <icon :value="icon"></icon>
  <span class="mu-flat-button-label" :class="[labelClass]" v-if="label && labelPosition === 'after'">{{label}}</span>
  <slot></slot>
</abstract-button>
</template>

<script>
import abstractButton from '../internal/abstractButton'
import icon from '../icon'
import {getColor} from '../utils'
export default {
  name: 'mu-flat-button',
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
    href: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    hoverColor: {
      type: String,
      default: ''
    }
  },
  computed: {
    buttonStyle () {
      return {
        'backgroud-color': this.hover ? getColor(this.hoverColor) : getColor(this.backgroundColor)
      }
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
.mu-flat-button {
  display: inline-block;
  overflow: hidden;
  position: relative;
  border-radius: 2px;
  height: 36px;
  line-height: 36px;
  min-width: 64px;
  transition-duration: 300ms;
  transition-timing-function: @easeOutFunction;
  transform: translate3d(0, 0, 0);
  text-decoration: none;
  border: none;
  appearance: none;
  background: none;
  color: @textColor;
  .flex-shrink(0);
  margin: 0;
  outline: 0;
  padding: 0;
  cursor: pointer;
  &.hover {
    background-color: fade(@textColor, 10%);
  }
  &.disabled{
    color: @disabledColor;
    cursor: default;
    background: none;
  }
  .mu-icon {
    vertical-align: middle;
    margin-left: 12px;
    margin-right: 0;
  }
  .mu-circle-ripple{
    color: @textColor;
  }
  &.label-before {
    .mu-icon {
      margin-right: 12px;
      margin-left: 0;
    }
    .mu-flat-button-label {
      padding-left: 16px;
      padding-right: 8px;
    }
  }
}
.mu-flat-button-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.mu-flat-button-primary{
  color: @primary1Color;
}

.mu-flat-button-secondary{
  color: @accent1Color;
}

.mu-flat-button-label{
  vertical-align: middle;
  padding-right: 16px;
  padding-left: 8px;
}

@media (min-width: 480px) {
  .mu-flat-button {
    min-width: 88px;
  }
}
</style>
