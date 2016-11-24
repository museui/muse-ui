<template>
  <mu-pagination :total="total" :current="current" @pageChange="handleClick">
  </mu-pagination>
</template>

<script>
export default{
  data () {
    return {
      total: 50,
      current: 1
    }
  },
  methods: {
    handleClick (newIndex) {
      console.log(newIndex)
      this.current = 3
    }
  }
}
</script>
