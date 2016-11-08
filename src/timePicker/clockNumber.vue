<template>
<span class="mu-clock-number" :class="numberClass" :style="numberStyle">{{value === 0 ? '00' : value}}</span>
</template>

<script>
import {isInner} from './timeUtils'

const positions = [
    [0, 5],
    [54.5, 16.6],
    [94.4, 59.5],
    [109, 114],
    [94.4, 168.5],
    [54.5, 208.4],
    [0, 223],
    [-54.5, 208.4],
    [-94.4, 168.5],
    [-109, 114],
    [-94.4, 59.5],
    [-54.5, 19.6]
]
const innerPositions = [
    [0, 40],
    [36.9, 49.9],
    [64, 77],
    [74, 114],
    [64, 151],
    [37, 178],
    [0, 188],
    [-37, 178],
    [-64, 151],
    [-74, 114],
    [-64, 77],
    [-37, 50]
]

export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'minute',
      validator (val) {
        return ['hour', 'minute'].indexOf(val) !== -1
      }
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isInner () {
      return isInner(this)
    },
    numberClass () {
      return {
        selected: this.selected,
        inner: this.isInner
      }
    },
    numberStyle () {
      let pos = this.value
      if (this.type === 'hour') {
        pos %= 12
      } else {
        pos = pos / 5
      }
      let transformPos = positions[pos]
      if (this.isInner) transformPos = innerPositions[pos]
      const [x, y] = transformPos
      return {
        transform: `translate(${x}px, ${y}px)`,
        left: this.isInner ? 'calc(50% - 14px)' : 'calc(50% - 16px)'
      }
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-clock-number{
  display: inline-block;
  width: 32px;
  height: 32px;
  line-height: 24px;
  position: absolute;
  top: 10px;
  text-align: center;
  padding-top: 5px;
  font-size: 1.1em;
  pointer-events: none;
  border-radius: 100%;
  box-sizing: border-box;
  transform: translate(0px, 5px);
  user-select: none;
  &.selected {
    background-color: @primaryColor;
    color: @alternateTextColor;
  }
  &.inner {
    width: 28px;
    height: 28px;
  }
}
</style>
