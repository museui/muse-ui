<template>
  <div class="mu-sub-header" :class="{'inset': inset}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'mu-sub-header',
  props: {
    inset: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-sub-header {
  color: @secondaryTextColor;
  font-size: 14px;
  line-height: 48px;
  padding-left: 16px;
  width: 100%;
  &.inset{
    padding-left: 72px;
  }
}
</style>
