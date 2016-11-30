<template>
<div class="mu-linear-progress" :style="{'height': size + 'px', 'border-radius': (size ? size / 2 : '') + 'px'}">
  <div :style="linearStyle" :class="linearClass"></div>
</div>
</template>

<script>
import {getColor} from '../utils'
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
    },
    color: {
      type: String
    },
    size: {
      type: Number
    }
  },
  computed: {
    percent () {
      return (this.value - this.min) / (this.max - this.min) * 100
    },
    linearStyle () {
      const {size, color, mode, percent} = this
      return {
        height: size + 'px',
        'background-color': getColor(color),
        'border-radius': (size ? size / 2 : '') + 'px',
        width: mode === 'determinate' ? percent + '%' : ''
      }
    },
    linearClass () {
      return 'mu-linear-progress-' + this.mode
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
  background-color: @lighterPrimaryColor;
  border-radius: 2px;
  margin: 0px;
  overflow: hidden;
}

.mu-linear-progress-indeterminate{
  position: absolute;
  top: 0;
  bottom: 0;
  width: 40%;
  border-radius: 2px;
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
  border-radius: 2px;
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
