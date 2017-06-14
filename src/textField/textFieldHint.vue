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
  line-height: 34px;
  user-select: none;
  cursor: text;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  &.show{
    opacity: 1;
  }
  .mu-text-field.multi-line &{
    line-height: 1.5;
  }
}
</style>
