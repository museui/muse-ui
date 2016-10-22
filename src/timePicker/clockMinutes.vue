<template>
<div class="mu-clock-minutes">
  <clock-pointer hasSelected :value="minutes.selected" :hasSelected="minutes.hasSelected" type="minute" />
  <clock-number v-for="minute in minutes.numbers" :selected="minute.isSelected" :key="minute.minute" type="minute" :value="minute.minute" />
  <div ref="mask" @mouseup="handleUp" @mousemove="handleMove" @touchmove="handleTouch" @touchend="handleTouch" class="mu-clock-minutes-mask"></div>
</div>
</template>

<script>
import clockNumber from './clockNumber'
import clockPointer from './clockPointer'
import {getTouchEventOffsetValues, rad2deg} from './timeUtils'
export default {
  props: {
    initialMinutes: {
      type: Number,
      default () {
        return new Date().getMinutes()
      }
    }
  },
  mounted () {
    const clockElement = this.$refs.mask
    this.center = {
      x: clockElement.offsetWidth / 2,
      y: clockElement.offsetHeight / 2
    }
    this.basePoint = {
      x: this.center.x,
      y: 0
    }
  },
  data () {
    return {
      minutes: null
    }
  },
  created () {
    this.minutes = this.getMinuteNumbers()
  },
  methods: {
    getMinuteNumbers () {
      const minutes = []
      for (let i = 0; i < 12; i++) {
        minutes.push(i * 5)
      }
      const selectedMinutes = this.initialMinutes
      let hasSelected = false

      const numbers = minutes.map((minute) => {
        const isSelected = selectedMinutes === minute
        if (isSelected) {
          hasSelected = true
        }
        return {
          minute,
          isSelected
        }
      })
      return {
        numbers: numbers,
        hasSelected: hasSelected,
        selected: selectedMinutes
      }
    },
    isMousePressed (event) {
      if (typeof event.buttons === 'undefined') {
        return event.nativeEvent.which
      }
      return event.buttons
    },
    handleUp (event) {
      event.preventDefault()
      this.setClock(event, true)
    },
    handleMove (event) {
      event.preventDefault()
      if (this.isMousePressed(event) !== 1) {
        return
      }
      this.setClock(event, false)
    },
    handleTouch (event) {
      event.preventDefault()
      this.setClock(event.changedTouches[0], false)
    },
    setClock (event, finish) {
      if (typeof event.offsetX === 'undefined') {
        const offset = getTouchEventOffsetValues(event)

        event.offsetX = offset.offsetX
        event.offsetY = offset.offsetY
      }

      const minutes = this.getMinutes(event.offsetX, event.offsetY)

      this.$emit('change', minutes, finish)
    },
    getMinutes (offsetX, offsetY) {
      const step = 6
      const x = offsetX - this.center.x
      const y = offsetY - this.center.y
      const cx = this.basePoint.x - this.center.x
      const cy = this.basePoint.y - this.center.y

      const atan = Math.atan2(cx, cy) - Math.atan2(x, y)

      let deg = rad2deg(atan)
      deg = Math.round(deg / step) * step
      deg %= 360

      const value = Math.floor(deg / step) || 0

      return value
    }
  },
  watch: {
    initialMinutes (val) {
      this.minutes = this.getMinuteNumbers()
    }
  },
  components: {
    'clock-number': clockNumber,
    'clock-pointer': clockPointer
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-clock-minutes{
  height: 100%;
  width: 100%;
  border-radius: 100%;
  position: relative;
  pointer-events: none;
  box-sizing: border-box;
}

.mu-clock-minutes-mask{
  height: 100%;
  width: 100%;
  pointer-events: auto;
}
</style>
