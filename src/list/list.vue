<template>
  <div class="mu-list">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'mu-list'
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
}
</style>
