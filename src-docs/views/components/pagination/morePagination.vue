<template>
  <mu-pagination :total="total" :current="current" @click="handleClick">
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
