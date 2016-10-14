<template>
  <div class="mu-focus-ripple-wrapper">
    <div ref="innerCircle" :style="style" class="mu-focus-ripple"></div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: ''
    },
    opacity: {
      type: Number
    }
  },
  computed: {
    style () {
      return {
        color: this.color,
        opacity: this.opacity
      }
    }
  },
  methods: {
    setRippleSize () {
      const el = this.$refs.innerCircle
      const height = el.offsetHeight
      const width = el.offsetWidth
      const size = Math.max(height, width)

      let oldTop = 0

      if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
        oldTop = parseInt(el.style.top)
      }

      el.style.height = `${size}px`
      el.style.top = `${(height / 2) - (size / 2) + oldTop}px`
    }
  },
  mounted () {
    this.setRippleSize()
  },
  updated () {
    this.setRippleSize()
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-focus-ripple-wrapper{
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}

.mu-focus-ripple{
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  opacity: 0.16;
  background-color: currentColor;
  animation: mu-pulsate 750ms @easeInOutFunction;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes mu-pulsate {
  0% {
    transform: scale(0.72);
  }
  100% {
    transform: scale(0.85);
  }
}
</style>
