<template>
  <div class="mu-list">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'mu-list',
  props: {
    nestedLevel: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style lang="less">
@import "../styles/import.less";
.mu-list {
  padding: 8px 0;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: visible;
  .mu-sub-header:first-child{
    margin-top: -8px;
  }
}
</style>
