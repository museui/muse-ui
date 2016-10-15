<template>
<label class="mu-text-field-label" :class="{'float': float}" :for="htmlFor">
  <slot></slot>
</label>
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
  position: absolute;
  line-height: 22px;
  top: 38px;
  transition: all .45s @easeOutFunction;
  z-index: 1;
  cursor: text;
  transform: scale(0.75) translate(0px, -28px);
  transform-origin: left top;
  user-select: none;
  pointer-events: none;
  &.float {
    transform: scale(1) translate(0, 0);
    pointer-events: auto;
  }
  .mu-text-field.disabled & {
    cursor: not-allowed;
  }
}
</style>
