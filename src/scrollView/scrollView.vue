<template>
  <div class="mu-scroll-view">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'mu-scroll-view'
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-scroll-view{
  width: 100%;
  flex: 1;
  .scrollable();
  .no-scrollbar();
  position: relative;
}
</style>
