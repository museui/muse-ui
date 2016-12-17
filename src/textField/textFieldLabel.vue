<template>
<div class="mu-text-field-label" :class="labelClass">
  <slot></slot>
</div>
</template>

<script>
import {convertClass} from '../utils'
export default {
  props: {
    focus: {
      type: Boolean,
      default: false
    },
    float: {
      type: Boolean,
      default: false
    },
    normalClass: {
      type: [String, Object, Array]
    },
    focusClass: {
      type: [String, Object, Array]
    }
  },
  computed: {
    labelClass () {
      const {float, focus, normalClass, focusClass} = this
      let classNames = []
      if (float) classNames.push('float')
      classNames = classNames.concat(convertClass(normalClass))
      if (focus) classNames = classNames.concat(convertClass(focusClass))
      return classNames
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-text-field-label {
  line-height: 20px;
  transition: all .45s @easeOutFunction;
  z-index: 1;
  cursor: text;
  transform: translate3d(0, 0, 0) scale(0.75);
  transform-origin: left top;
  user-select: none;
  pointer-events: none;
  backface-visibility: hidden;
  .mu-text-field.has-label & {
    top: 8px;
    position: absolute;
  }
  .mu-text-field.has-label &.float {
    transform: translate3d(0, 28px, 0) scale(1);
    color: @disabledColor;
  }
}
</style>
