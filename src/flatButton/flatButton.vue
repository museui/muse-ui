<template>
<abstract-button
  :disabled="disabled" wrapperClass="mu-flat-button-wrapper" :href="href" :style="buttonStyle" class="mu-flat-button"
  @click.native="handlerClick" :rippleColor="rippleColor"
  :rippleOpacity="rippleOpacity"
  :class="buttonClass" :centerRipple="false">
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
    color: {
      type: String,
      default: ''
    },
    hoverColor: {
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
  methods: {
    handlerClick (e) {
      this.$emit('click', e)
    }
  },
  computed: {
    buttonStyle () {
      return {
        'backgroud-color': this.hover ? getColor(this.hoverColor) : getColor(this.backgroundColor),
        'color': getColor(this.color)
      }
    },
    buttonClass () {
      return {
        'mu-flat-button-primary': this.primary,
        'mu-flat-button-secondary': this.secondary,
        'label-before': this.labelPosition === 'before'
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
  min-width: 88px;
  transition-duration: 300ms;
  transition-timing-function: @easeOutFunction;
  transform: translate3d(0, 0, 0);
  text-decoration: none;
  text-transform: uppercase;
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
    + .mu-flat-button-label {
      padding-left: 8px;
    }
  }
  .mu-circle-ripple{
    color: @textColor;
  }
  &.label-before {
    padding-right: 8px;
    .mu-icon {
      margin-right: 4px;
      margin-left: 0;
    }
    .mu-flat-button-label {
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
  padding-left: 16px;
}

@media (min-width: 480px) {
  .mu-flat-button {
    min-width: 88px;
  }
}
</style>
