<template>
  <div class="mu-list" :class="{'first-sub-header': isFirstSubHeader}">
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
  },
  data () {
    return {
      isFirstSubHeader: false
    }
  },
  mounted () {
    this.isFirstSubHeader = this.$slots.default && this.$slots.default[0].elm.classList.contains('mu-sub-header')
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
  &.first-sub-header {
    padding-top: 0;
  }
}
</style>
