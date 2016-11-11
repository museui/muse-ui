<template>
<div class="mu-card">
  <slot></slot>
</div>
</template>
<script>
export default {
  name: 'mu-card'
}
</script>
<style lang="less">
@import "../styles/import.less";
.mu-card {
  background-color: @dialogBackgroundColor;
  position: relative;
  border-radius: 2px;
  .depth(1);
}
</style>
