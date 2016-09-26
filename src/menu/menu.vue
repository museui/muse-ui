<template>
<div class="mu-menu">
    <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    desktop: {
      type: Boolean,
      default: false
    },
    maxHeight: {
      type: Number
    },
    multiple: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-menu {
  overflow: auto;
  padding: 16px 0px;
  .mu-divider {
    margin: 7px 0px 8px;
  }
}
</style>
