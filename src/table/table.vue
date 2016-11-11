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
    showCheckbox: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isSelectAll: false
    }
  },
  computed: {
    bodyStyle () {
      return {
        overflow: 'auto',
        height: this.height
      }
    }
  },
  methods: {
    handleRowClick (index, rowId, tr) {
      this.$emit('rowClick', index, rowId, tr)
    },
    handleRowHover (index, rowId, tr) {
      this.$emit('rowHover', index, rowId, tr)
    },
    handleRowHoverExit (index, rowId, tr) {
      this.$emit('rowHoverExit', index, rowId, tr)
    },
    handleRowSelect (selectedRows) {
      this.$emit('rowSelection', selectedRows)
    },
    handleCellClick (rowIndex, columnName, td, rowId, tr) {
      this.$emit('cellClick', rowIndex, columnName, td, rowId, tr)
    },
    handleCellHover (rowIndex, columnName, td, rowId, tr) {
      this.$emit('cellHover', rowIndex, columnName, td, rowId, tr)
    },
    handleCellHoverExit (rowIndex, columnName, td, rowId, tr) {
      this.$emit('cellHoverExit', rowIndex, columnName, td, rowId, tr)
    },
    changeSelectAll (isSelectAll) {
      this.isSelectAll = isSelectAll
    },
    selectAll () {
      const tbody = this.getTbody()
      if (tbody) tbody.selectAll()
    },
    unSelectAll () {
      const tbody = this.getTbody()
      if (tbody) tbody.unSelectAll()
    },
    selectRow (rowId) {
      const tbody = this.getTbody()
      if (tbody) tbody.selectRow(rowId)
    },
    unSelectRow (rowId) {
      const tbody = this.getTbody()
      if (tbody) tbody.unSelectRow(rowId)
    },
    getTbody () {
      for (let i = 0; i < this.$children.length; i++) {
        const childItem = this.$children[i]
        if (childItem.isTbody) return childItem
      }
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-table {
  background-color: @alternateTextColor;
  padding: 0 24px;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
}
</style>
