<template>
  <mu-pagination :total="total" :defaultCurrent="defaultCurrent" :showQuickJumper="showQuickJumper"  @pageChange="handleClick">
  </mu-pagination>
</template>

<script>
export default{
  data () {
    return {
      total: 500,
      defaultCurrent: 1,
      showQuickJumper: true
    }
  },
  methods: {
    handleClick (newIndex) {

    }
  }
}
</script>
