<template>
  <thead class="mu-thead">
    <slot></slot>
  </thead>
</template>

<script>
export default {
  name: 'mu-thead',
  created () {
    this.isThead = true
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-thead {
  border-bottom: 1px solid @borderColor;
}
</style>
