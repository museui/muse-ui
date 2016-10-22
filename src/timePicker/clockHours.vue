<template>
<div class="mu-clock-hours">
  <clock-pointer hasSelected :value="getSelected()" type="hour" />
  <clock-number v-for="hour in hours" :selected="getSelected() === hour" :key="hour" type="hour" :value="hour" />
  <div ref="mask" @mouseup="handleUp" @mousemove="handleMove" @touchmove="handleTouchMove" @touchend="handleTouchEnd" class="mu-clock-hours-mask"></div>
</div>
</template>

<script>
import clockNumber from './clockNumber'
import clockPointer from './clockPointer'
import {getTouchEventOffsetValues, rad2deg} from './timeUtils'
export default {
  props: {
    format: {
      type: String,
      default: 'ampm',
      validator (val) {
        return ['ampm', '24hr'].indexOf(val) !== -1
      }
    },
    initialHours: {
      type: Number,
      default: new Date().getHours()
    }
  },
  computed: {
    hours () {
      const hourSize = this.format === 'ampm' ? 12 : 24
      const hours = []
      for (let i = 1; i <= hourSize; i++) {
        hours.push(i % 24)
      }
      return hours
    }
  },
  methods: {
    getSelected () {
      let hour = this.initialHours
      if (this.format === 'ampm') {
        hour %= 12
        hour = hour || 12
      }
      return hour
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
      if (this.isMousePressed(event) !== 1) return
      this.setClock(event, false)
    },

    handleTouchMove (event) {
      event.preventDefault()
      this.setClock(event.changedTouches[0], false)
    },

    handleTouchEnd (event) {
      event.preventDefault()
      this.setClock(event.changedTouches[0], true)
    },

    setClock (event, finish) {
      if (typeof event.offsetX === 'undefined') {
        const offset = getTouchEventOffsetValues(event)

        event.offsetX = offset.offsetX
        event.offsetY = offset.offsetY
      }
      const hours = this.getHours(event.offsetX, event.offsetY)
      this.$emit('change', hours, finish)
    },

    getHours (offsetX, offsetY) {
      const step = 30
      const x = offsetX - this.center.x
      const y = offsetY - this.center.y
      const cx = this.basePoint.x - this.center.x
      const cy = this.basePoint.y - this.center.y

      const atan = Math.atan2(cx, cy) - Math.atan2(x, y)

      let deg = rad2deg(atan)
      deg = Math.round(deg / step) * step
      deg %= 360

      let value = Math.floor(deg / step) || 0

      const delta = Math.pow(x, 2) + Math.pow(y, 2)
      const distance = Math.sqrt(delta)

      value = value || 12
      if (this.format === '24hr') {
        if (distance < 90) {
          value += 12
          value %= 24
        }
      } else {
        value %= 12
      }

      return value
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
  components: {
    'clock-number': clockNumber,
    'clock-pointer': clockPointer
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-clock-hours{
  height: 100%;
  width: 100%;
  border-radius: 100%;
  position: relative;
  pointer-events: none;
  box-sizing: border-box;
}

.mu-clock-hours-mask{
  height: 100%;
  width: 100%;
  pointer-events: auto;
}
</style>
