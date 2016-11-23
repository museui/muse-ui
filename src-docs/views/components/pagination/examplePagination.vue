<template>
  <mu-pagination :total="5" :current="1" :isCircle="true" @click="handleClick">
  </mu-pagination>
</template>

<script>
export default{
  data () {
    return {

    }
  },
  methods: {
    handleClick (e) {
      console.log(e)
    }
  }
}
</script>
