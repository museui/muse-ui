<template>
<div class="mu-card-actions">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'mu-card-actions'
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-card-actions {
  padding: 8px;
  position: relative;
}
</style>
