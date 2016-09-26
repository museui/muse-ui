<template>
<div class="mu-card-text">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'mu-card-text'
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-card-text{
  padding: 16px;
  font-size: 14px;
  color: @textColor;
}
</style>
