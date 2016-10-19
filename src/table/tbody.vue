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
  methods: {
    handleRowClick (e, tr) {
      const rowId = tr.rowId
      const index = this.selectedRows.indexOf(rowId)
      if (index === -1) {
        this.selectedRows.push(rowId)
      } else {
        this.selectedRows.splice(index, 1)
      }
    }
  }
}
</script>
