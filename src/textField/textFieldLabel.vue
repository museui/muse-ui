<template>
<div class="mu-text-field-label" :class="{'float': float}" :for="htmlFor">
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    htmlFor: {
      type: String
    },
    focus: {
      type: Boolean,
      default: false
    },
    float: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-text-field-label {
  // position: absolute;
  line-height: 20px;
  transition: all .45s @easeOutFunction;
  z-index: 1;
  cursor: text;
  transform: scale(0.75);
  transform-origin: left top;
  user-select: none;
  pointer-events: none;
  .mu-text-field.has-label & {
    top: 8px;
    position: absolute;
  }
  .mu-text-field.has-label &.float {
    transform: scale(1);
    top: 38px;
    color: @disabledColor;
  }
}
</style>
