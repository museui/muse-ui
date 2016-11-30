<template>
<div>
  <mu-circular-progress mode="determinate" :size="40" :value="value"/>
  <mu-circular-progress mode="determinate" :size="60" :strokeWidth="5" :value="value"/>
  <mu-circular-progress mode="determinate" :size="90" color="red" :value="value"/>
</div>
</template>

<script>
export default {
  data () {
    return {
      value: 0
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.value += 10
      if (this.value > 100) this.value = 0
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>
