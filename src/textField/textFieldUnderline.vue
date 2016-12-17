<template>
  <div>
    <hr class="mu-text-field-line" :class="lineClass" />
    <hr v-if="!disabled" class="mu-text-field-focus-line" :style="errorStyle" :class="focusLineClass"/>
  </div>
</template>

<script>
import {getColor, convertClass} from '../utils'
export default {
  props: {
    focus: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean
    },
    errorColor: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    normalClass: {
      type: [String, Object, Array]
    },
    focusClass: {
      type: [String, Object, Array]
    }
  },
  computed: {
    lineClass () {
      const {disabled, normalClass} = this
      let classNames = []
      if (disabled) classNames.push('disabled')
      return classNames.concat(convertClass(normalClass))
    },
    focusLineClass () {
      const {normalClass, focus, focusClass, error} = this
      let classNames = []
      classNames.concat(convertClass(normalClass))
      if (error) classNames.push('error')
      if (focus) classNames.push('focus')
      return classNames.concat(convertClass(focusClass))
    },
    errorStyle () {
      return {
        'background-color': this.error ? getColor(this.errorColor) : ''
      }
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-text-field-line {
  margin: 0;
  height: 1px;
  border: none;
  background-color: @borderColor;
  left: 0;
  right: 0;
  position: absolute;
  .mu-text-field.has-icon & {
    left: 56px;
  }
  &.disabled{
    height: auto;
    background-color: transparent;
    border-bottom: 2px dotted @disabledColor;
  }
}

.mu-text-field-focus-line{
  margin: 0;
  height: 2px;
  border: none;
  background-color: @primaryColor;
  position: absolute;
  left: 0;
  right: 0;
  margin-top: -1px;
  transform: scaleX(0);
  transition: transform .45s @easeOutFunction;
  .mu-text-field.has-icon & {
    left: 56px;
  }
  &.focus {
    transform: scaleX(1);
  }
  &.error {
    transform: scaleX(1);
    background-color: @red;

  }
}
</style>
