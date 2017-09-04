<template>
  <div>
    <div v-if="fixedHeader">
      <table class="mu-table">
        <slot name="header"></slot>
      </table>
    </div>
    <div :style="bodyStyle">
      <table class="mu-table" :id="tableId">
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
let uuid = 0
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
    enableSelectAll: {
      type: Boolean,
      default: false
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
      isSelectAll: false,
      tableId: `mu-table-${uuid++}`,
      unSortedRows: null
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
  mounted () {
    if (this.allRowsSelected) {
      this.selectAll()
    }
  },
  methods: {
    handleRowClick (index, tr) {
      this.$emit('rowClick', index, tr)
      this.$emit('row-click', index, tr)
    },
    handleRowHover (index, tr) {
      this.$emit('rowHover', index, tr)
      this.$emit('row-hover', index, tr)
    },
    handleRowHoverExit (index, tr) {
      this.$emit('rowHoverExit', index, tr)
      this.$emit('row-hover-exit', index, tr)
    },
    handleRowSelect (selectedRows) {
      this.$emit('rowSelection', selectedRows)
      this.$emit('row-selection', selectedRows)
    },
    handleCellClick (rowIndex, columnName, td, tr) {
      this.$emit('cellClick', rowIndex, columnName, td, tr)
      this.$emit('cell-click', rowIndex, columnName, td, tr)
    },
    handleCellHover (rowIndex, columnName, td, tr) {
      this.$emit('cellHover', rowIndex, columnName, td, tr)
      this.$emit('cell-hover', rowIndex, columnName, td, tr)
    },
    handleCellHoverExit (rowIndex, columnName, td, tr) {
      this.$emit('cellHoverExit', rowIndex, columnName, td, tr)
      this.$emit('cell-hover-exit', rowIndex, columnName, td, tr)
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
    getTbody () {
      for (let i = 0; i < this.$children.length; i++) {
        const childItem = this.$children[i]
        if (childItem.isTbody) return childItem
      }
    },
    getUnsortedRows () {
      const body = document.getElementById(this.tableId).getElementsByTagName('tbody')[0]
      const rows = body.getElementsByTagName('tr')
      this.unSortedRows = []
      for (var i = 0; i < rows.length; i++) {
        this.unSortedRows.push(rows[i])
      }
    },
    handleSort (colIndex, dir) {
      if (this.unSortedRows === null) {
        this.getUnsortedRows()
      }
      const body = document.getElementById(this.tableId).getElementsByTagName('tbody')[0]
      const rows = body.getElementsByTagName('tr')
      var isSorting = true
      var shouldSort = false
      var sortCount = 0

      if (dir === null) {
        var l = rows.length
        var oldRows = []
        for (var r = 0; r < l; r++) {
          oldRows.push(body.childNodes[r])
        }
        for (var n = 0; n < l; n++) {
          body.removeChild(oldRows[n])
        }
        for (var t = 0; t < l; t++) {
          body.appendChild(this.unSortedRows[t])
        }
      }

      while (isSorting) {
        isSorting = false
        for (var i = 0; i < rows.length - 1; i++) {
          const a = rows[i].cells[colIndex].innerHTML.toLowerCase()
          const b = rows[i + 1].cells[colIndex].innerHTML.toLowerCase()
          if (dir === 'asc') {
            if (a > b) {
              shouldSort = true
              break
            }
          } else if (dir === 'dsc') {
            if (b > a) {
              shouldSort = true
              break
            }
          }
        }
        if (shouldSort) {
          if (rows[i + 1]) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
            isSorting = true
            sortCount++
          }
        } else {
          if (sortCount === 0 && dir === 'asc') {
            dir = 'dsc'
            isSorting = true
          }
        }
      }
    }
  },
  watch: {
    allRowsSelected (val, oldVal) {
      if (val === oldVal) return
      if (val) {
        this.selectAll()
      } else {
        this.unSelectAll()
      }
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-table {
  background-color: @alternateTextColor;
  width: 100%;
  padding: 0 24px;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
}
</style>
