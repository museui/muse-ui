<template>
<div class="mu-circular-progress" :style="{'width': size + 'px', 'height': size + 'px'}">
  <circular v-if="mode === 'indeterminate'" :size="size" :color="color" :borderWidth="strokeWidth" />
  <svg class="mu-circular-progress-determinate"
    :viewBox="'0 0 ' + size + ' ' + size" :style="circularSvgStyle"
    v-if="mode === 'determinate'">
    <circle class="mu-circular-progress-determinate-path"
      :r="radius" :cx="size / 2" :cy="size / 2" fill="none"
      stroke-miterlimit="20" :stroke-width="strokeWidth"
      :style="circularPathStyle"
    ></circle>
  </svg>
</div>
</template>

<script>
import circular from '../internal/circular'
import {getColor} from '../utils'
export default {
  name: 'mu-circular-progress',
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
      type: Number,
      default: 24
    },
    strokeWidth: {
      type: Number,
      default: 3
    }
  },
  computed: {
    radius () {
      return (this.size - this.strokeWidth) / 2
    },
    circularSvgStyle () {
      return {
        width: this.size,
        height: this.size
      }
    },
    circularPathStyle () {
      const relVal = this.getRelativeValue()
      return {
        stroke: getColor(this.color),
        'stroke-dasharray': `${this.getArcLength(relVal)}, ${this.getArcLength(1)}`
      }
    }
  },
  methods: {
    // material ui 两个计算方法
    getArcLength (fraction) {
      return fraction * Math.PI * (this.size - this.strokeWidth)
    },
    getRelativeValue () {
      const {value, min, max} = this
      const clampedValue = Math.min(Math.max(min, value), max)
      return clampedValue / (max - min)
    }
  },
  components: {
    circular
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-circular-progress {
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.mu-circular-progress-determinate{
  position: relative;
}

.mu-circular-progress-determinate-path{
  stroke: @primaryColor;
  stroke-linecap: round;
  transition: all 0.3s linear;
}
</style>
