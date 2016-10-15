<template>
  <div>
    <hr class="mu-text-field-line" />
    <hr class="mu-text-field-focus-line" :class="lineClass"/>
  </div>
</template>

<script>
export default {
  props: {
    focus: {
      type: Boolean,
      default: false
    },
    value: {
    },
    error: {
      type: Boolean
    },
    warning: {
      type: Boolean
    }
  },
  computed: {
    lineClass () {
      return {
        focus: this.focus || this.value,
        warning: this.warning && !this.error,
        error: this.error
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
  bottom: 8px;
  left: 0;
  right: 0;
  position: absolute;
  .mu-text-field.has-icon & {
    left: 56px;
  }
}

.mu-text-field-focus-line{
  margin: 0;
  height: 2px;
  border: none;
  background-color: @primary1Color;
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  transform: scaleX(0);
  transition: transform .45s @easeOutFunction;
  .mu-text-field.has-icon & {
    left: 56px;
  }
  &.focus {
    transform: scaleX(1);
  }
  &.error {
    background-color: @red;
  }
  &.warning {
    background-color: @yellow;
  }
}
</style>
