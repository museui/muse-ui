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
    this._unSelectAll = false
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
    enableSelectAll () {
      return this.$parent.enableSelectAll
    },
    isSelectAll () {
      return this.$parent.isSelectAll
    }
  },
  methods: {
    handleRowClick (e, tr) {
      this.$parent.handleRowClick(this.getRowIndex(tr), tr)
    },
    selectRow (rowId, isClick = true) {
      if (!this.selectable) return
      const index = this.selectedRows.indexOf(rowId)
      if (index === -1) {
        if (!this.multiSelectable) this.selectedRows = []
        this.selectedRows.push(rowId)
        if (this.isSelectAllRow()) {
          this.selectAll(true)
          return
        }
        if (this.$parent.handleRowSelect && isClick) this.$parent.handleRowSelect(this.convertSelectedRows(this.selectedRows))
      }
    },
    isSelectAllRow () {
      if (!this.enableSelectAll || !this.multiSelectable) return false
      let count = 0
      this.$children.forEach((child) => {
        if (child.selectable) count++
      })
      return count === this.selectedRows.length
    },
    unSelectRow (rowId, isClick = true) {
      if (!this.selectable) return
      const index = this.selectedRows.indexOf(rowId)
      if (index !== -1) this.selectedRows.splice(index, 1)
      this._unSelectAll = true
      this.$parent.changeSelectAll(false)
      if (this.$parent.handleRowSelect && isClick) this.$parent.handleRowSelect(this.convertSelectedRows(this.selectedRows))
    },
    selectAll (isSelectAll) {
      if (!this.selectable || !this.multiSelectable) return
      this._unSelectAll = false
      if (!isSelectAll) {
        this.selectedRows = []
        this.$children.forEach((child) => {
          if (child.selectable) this.selectedRows.push(child.rowId)
        })
      }
      this.$parent.changeSelectAll(true)
      if (this.$parent.handleRowSelect) this.$parent.handleRowSelect(this.convertSelectedRows(this.selectedRows))
    },
    unSelectAll () {
      if (!this.selectable || !this.multiSelectable) return
      this.selectedRows = []
      this.$parent.changeSelectAll(false)
      if (this.$parent.handleRowSelect) this.$parent.handleRowSelect([])
    },
    handleCellClick (event, columnName, td, rowId, tr) {
      if (this.$parent.handleCellClick) this.$parent.handleCellClick(this.getRowIndex(tr), columnName, td, tr)
    },
    handleCellHover (event, columnName, td, rowId, tr) {
      if (this.$parent.handleCellHover) this.$parent.handleCellHover(this.getRowIndex(tr), columnName, td, tr)
    },
    handleCellHoverExit (event, columnName, td, rowId, tr) {
      if (this.$parent.handleCellHoverExit) this.$parent.handleCellHoverExit(this.getRowIndex(tr), columnName, td, tr)
    },
    handleRowHover (event, rowId, tr) {
      if (this.$parent.handleRowHover) this.$parent.handleRowHover(this.getRowIndex(tr), tr)
    },
    handleRowHoverExit (event, rowId, tr) {
      if (this.$parent.handleRowHoverExit) this.$parent.handleRowHoverExit(this.getRowIndex(tr), tr)
    },
    getRowIndex (tr) {
      return this.$children.indexOf(tr)
    },
    convertSelectedRows () {
      const selectedIndexs = this.selectedRows.map(rowId => this.convertRowIdToIndex(rowId)).filter(index => index !== -1)
      return this.multiSelectable ? selectedIndexs : selectedIndexs[0]
    },
    convertRowIdToIndex (rowId) {
      for (var i = 0; i < this.$children.length; i++) {
        const child = this.$children[i]
        if (child.rowId && child.rowId === rowId) return i
      }
      return -1
    }
  }
}
</script>
