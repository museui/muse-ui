<template>
  <mu-pagination :total="total" :defaultCurrent="defaultCurrent" :showSizeChanger="showSizeChanger" :pageSizeOption="pageSizeOption" @click="handleClick">
  </mu-pagination>
</template>

<script>
export default{
  data () {
    return {
      total: 500,
      defaultCurrent: 1,
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
