<template>
  <div @mousedown="handleMouseDown" @mouseup="end()" @mouseleave="end()" @touchstart="handleTouchStart"  @touchend="end()" @touchcancel="end()">
    <div :style="style" ref="holder">
      <circle-ripple :key="ripple.key" :color="ripple.color" :opacity="ripple.opacity" :merge-style="ripple.style" v-for="ripple in ripples"></circle-ripple>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import circleRipple from './circleRipple'
export default {
  props: {
    centerRipple: {
      type: Boolean,
      default: true
    },
    style: {
      type: Object,
      default () {
        return {
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: '0',
          left: '0',
          overflow: 'hidden'
        }
      }
    },
    color: {
      type: String,
      default: ''
    },
    opacity: {
      type: Number
    }
  },
  data () {
    return {
      nextKey: 0,
      ripples: []
    }
  },
  mounted () {
    this.ignoreNextMouseDown = false
  },
  methods: {
    start (event, isRippleTouchGenerated) {
      if (this.ignoreNextMouseDown && !isRippleTouchGenerated) {
        this.ignoreNextMouseDown = false
        return
      }
      this.ripples.push({
        key: this.nextKey++,
        color: this.color,
        opacity: this.opacity,
        style: this.centerRipple ? {} : this.getRippleStyle(event)
      })
      this.ignoreNextMouseDown = isRippleTouchGenerated
    },
    end () {
      if (this.ripples.length === 0) return
      this.ripples.splice(0, 1)
      this.stopListeningForScrollAbort()
    },
    stopListeningForScrollAbort () {
      if (!this.handleMove) this.handleMove = this.handleTouchMove.bind(this)
      document.body.removeEventListener('touchmove', this.handleMove, false)
    },
    startListeningForScrollAbort (event) {
      this.firstTouchY = event.touches[0].clientY
      this.firstTouchX = event.touches[0].clientX
      // Note that when scolling Chrome throttles this event to every 200ms
      // Also note we don't listen for scroll events directly as there's no general
      // way to cover cases like scrolling within containers on the page
      document.body.addEventListener('touchmove', this.handleMove, false)
    },
    handleMouseDown (event) {
      // only listen to left clicks
      if (event.button === 0) {
        this.start(event, false)
      }
    },
    handleTouchStart (event) {
      event.stopPropagation()
      // If the user is swiping (not just tapping), save the position so we can
      // abort ripples if the user appears to be scrolling.
      if (event.touches) {
        this.startListeningForScrollAbort(event)
        this.startTime = Date.now()
      }
      this.start(event.touches[0], true)
    },
    handleTouchMove (event) {
      const timeSinceStart = Math.abs(Date.now() - this.startTime)
      if (timeSinceStart > 300) {
        this.stopListeningForScrollAbort()
        return
      }
      // If the user is scrolling...
      const deltaY = Math.abs(event.touches[0].clientY - this.firstTouchY)
      const deltaX = Math.abs(event.touches[0].clientX - this.firstTouchX)
      // Call it a scroll after an arbitrary 6px (feels reasonable in testing)
      if (deltaY > 6 || deltaX > 6) this.end()
    },
    getRippleStyle (event) {
      let holder = this.$refs.holder
      let rect = holder.getBoundingClientRect()
      let x = event.offsetX
      let y
      if (x !== undefined) {
        y = event.offsetY
      } else {
        x = event.clientX - rect.left
        y = event.clientY - rect.top
      }
      let max
      if (rect.width === rect.height) {
        max = rect.width * 1.412
      } else {
        max = Math.sqrt(
          (rect.width * rect.width) + (rect.height * rect.height)
        )
      }
      const dim = (max * 2) + 'px'
      return {
        width: dim,
        height: dim,
        'margin-left': -max + x + 'px',
        'margin-top': -max + y + 'px'
      }
    }
  },
  components: {
    'circle-ripple': circleRipple
  }
}
</script>

<style lang="css">
</style>
