<template>
  <mu-pagination :total="total" :showSizeChanger="showSizeChanger" :pageSizeOption="pageSizeOption" @pageSizeChange="handleClick">
  </mu-pagination>
</template>

<script>
export default{
  data () {
    return {
      total: 130,
      current: 1,
      showSizeChanger: true,
      pageSizeOption: [10, 20, 30, 40]
    }
  },
  methods: {
    handleClick (newIndex) {
      console.log('page size change event', newIndex)
    }
  }
}
</script>
