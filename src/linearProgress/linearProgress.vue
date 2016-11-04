<template>
<div class="mu-linear-progress">
  <div v-if="mode === 'indeterminate'" class="mu-linear-progress-indeterminate"></div>
  <div v-if="mode === 'determinate'" :style="{'width': percent + '%'}" class="mu-linear-progress-determinate"></div>
</div>
</template>

<script>
export default {
  name: 'mu-linear-progress',
  props: {
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    mode: {
      type: String,
      default: 'indeterminate',
      validator (val) {
        return ['indeterminate', 'determinate'].indexOf(val) !== -1
      }
    },
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    percent () {
      return (this.value - this.min) / (this.max - this.min) * 100
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-linear-progress{
  position: relative;
  height: 4px;
  display: block;
  width: 100%;
  background-color: @primary3Color;
  border-radius: 2px;
  margin: 0px;
  overflow: hidden;
}

.mu-linear-progress-indeterminate{
  position: absolute;
  top: 0;
  bottom: 0;
  width: 40%;
  background-color: @primaryColor;
  animation: mu-linear-progress-animate 840ms @easeInOutFunction;
  animation-iteration-count: infinite;
}

.mu-linear-progress-determinate{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: @primaryColor;
  transition: width .3s linear;
}

@keyframes mu-linear-progress-animate {
  0% {
    left: -40%;
  }
  100% {
    left: 100%;
  }
}
</style>
