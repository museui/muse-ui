<template>
<tbody>
  <slot></slot>
</tbody>
</template>

<script>
export default {
  name: 'mu-tbody',
  data () {
    return {
      selectedRows: []
    }
  },
  created () {
    this.isTbody = true
  },
  computed: {
    showCheckbox () {
      return this.$parent.showCheckbox
    },
    selectable () {
      return this.$parent.selectable
    },
    multiSelectable () {
      return this.$parent.multiSelectable
    },
    allRowsSelected () {
      return this.$parent.allRowsSelected
    },
    isSelectAll () {
      return this.$parent.isSelectAll
    }
  },
  methods: {
    handleRowClick (e, tr) {
      this.$parent.handleRowClick(this.getRowIndex(tr), tr.rowId, tr)
    },
    selectRow (rowId) {
      if (!this.selectable) return
      const index = this.selectedRows.indexOf(rowId)
      if (index === -1) {
        if (!this.multiSelectable) this.selectedRows = []
        this.selectedRows.push(rowId)
        if (this.$parent.handleRowSelect) this.$parent.handleRowSelect(this.selectedRows)
      }
    },
    unSelectRow (rowId) {
      if (!this.selectable) return
      const index = this.selectedRows.indexOf(rowId)
      if (index !== -1) this.selectedRows.splice(index, 1)
    },
    selectAll () {
      if (!this.selectable || !this.multiSelectable) return
      this.selectedRows = []
      this.$children.forEach((child) => {
        if (child.selectable) this.selectedRows.push(child.rowId)
      })
      this.$parent.changeSelectAll(true)
      if (this.$parent.handleRowSelect) this.$parent.handleRowSelect(this.selectedRows)
    },
    unSelectAll () {
      if (!this.selectable || !this.multiSelectable) return
      this.selectedRows = []
      this.$parent.changeSelectAll(false)
    },
    handleCellClick (event, columnName, td, rowId, tr) {
      if (this.$parent.handleCellClick) this.$parent.handleCellClick(this.getRowIndex(tr), columnName, td, rowId, tr)
    },
    handleCellHover (event, columnName, td, rowId, tr) {
      if (this.$parent.handleCellHover) this.$parent.handleCellHover(this.getRowIndex(tr), columnName, td, rowId, tr)
    },
    handleCellHoverExit (event, columnName, td, rowId, tr) {
      if (this.$parent.handleCellHoverExit) this.$parent.handleCellHoverExit(this.getRowIndex(tr), columnName, td, rowId, tr)
    },
    handleRowHover (event, rowId, tr) {
      if (this.$parent.handleRowHover) this.$parent.handleRowHover(this.getRowIndex(tr), rowId, tr)
    },
    handleRowHoverExit (event, rowId, tr) {
      if (this.$parent.handleRowHoverExit) this.$parent.handleRowHoverExit(this.getRowIndex(tr), rowId, tr)
    },
    getRowIndex (tr) {
      return this.$children.indexOf(tr)
    }
  }
}
</script>
