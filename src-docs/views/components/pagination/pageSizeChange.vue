<template>
  <mu-pagination :total="total" :showSizeChanger="showSizeChanger" :pageSizeOption="pageSizeOption" @pageSizeChange="handleClick">
  </mu-pagination>
</template>

<script>
export default{
  data () {
    return {
      total: 500,
      current: 1,
      showSizeChanger: true,
      pageSizeOption: ['15', '20', '25', '30']
    }
  },
  methods: {
    handleClick (newIndex) {

    }
  }
}
</script>
