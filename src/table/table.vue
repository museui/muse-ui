<template>
  <div>
    <div v-if="fixedHeader">
      <table class="mu-table">
        <slot name="header"></slot>
      </table>
    </div>
    <div :style="bodyStyle">
      <table class="mu-table">
        <slot v-if="!fixedHeader" name="header"></slot>
        <slot></slot>
        <slot v-if="!fixedFooter" name="footer"></slot>
      </table>
    </div>
    <div v-if="fixedFooter">
      <table class="mu-table">
        <slot name="footer"></slot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mu-table',
  props: {
    fixedFooter: {
      type: Boolean,
      default: true
    },
    fixedHeader: {
      type: Boolean,
      default: true
    },
    height: {
      type: String
    },
    allRowsSelected: {
      type: Boolean,
      default: false
    },
    multiSelectable: {
      type: Boolean,
      default: false
    },
    selectable: {
      type: Boolean,
      default: true
    },
    showChecbox: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    bodyStyle () {
      return {
        overflow: 'auto',
        height: this.height
      }
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-table {
  background-color: @canvasColor;
  padding: 0 24px;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
}
</style>
