<template>
  <mu-pagination :total="total" :current="current" :isCircle="true" @click="handleClick">
  </mu-pagination>
</template>

<script>
export default{
  data () {
    return {
      total: 5,
      current: 1
    }
  },
  methods: {
    handleClick (newIndex) {
      this.current = newIndex
    }
  }
}
</script>
