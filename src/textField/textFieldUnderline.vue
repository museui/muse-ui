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
        focus: this.focus || this.value
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
  top: 43px;
  left: 0;
  right: 0;
  position: absolute;
  .mu-text-field.has-icon & {
    left: 56px;
  }
  .mu-text-field.has-label & {
    top: 63px;
  }
}

.mu-text-field-focus-line{
  margin: 0;
  height: 2px;
  border: none;
  background-color: @primary1Color;
  position: absolute;
  top: 42px;
  left: 0;
  right: 0;
  transform: scaleX(0);
  transition: transform .45s @easeOutFunction;
  .mu-text-field.has-icon & {
    left: 56px;
  }
  .mu-text-field.has-label & {
    top: 62px;
  }
  &.focus {
    transform: scaleX(1);
  }
}
</style>
