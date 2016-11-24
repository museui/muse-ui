<template>
  <mu-pagination :total="total" :current="current" @pageChange="handleClick">
  </mu-pagination>
</template>

<script>
export default{
  data () {
    return {
      total: 500,
      defaultCurrent: 1
    }
  },
  methods: {
    handleClick (newIndex) {

    }
  }
}
</script>
