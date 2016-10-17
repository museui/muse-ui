<template>
  <div class="mu-text-field-hint" :class="{'show': show}">
    {{text}}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-text-field-hint{
  position: absolute;
  opacity: 0;
  transition: opacity .45s @easeOutFunction;
  color: @disabledColor;
  line-height: 36px;
  &.show{
    opacity: 1;
  }
}
</style>
