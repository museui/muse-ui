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
import * as domUtil from '../utils/domUtil'
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
      const el = this.$refs.holder
      const elHeight = el.offsetHeight
      const elWidth = el.offsetWidth
      const offset = domUtil.getOffset(el)
      const isTouchEvent = event.touches && event.touches.length
      const pageX = isTouchEvent ? event.touches[0].pageX : event.pageX
      const pageY = isTouchEvent ? event.touches[0].pageY : event.pageY
      const pointerX = pageX - offset.left
      const pointerY = pageY - offset.top
      const topLeftDiag = this.calcDiag(pointerX, pointerY)
      const topRightDiag = this.calcDiag(elWidth - pointerX, pointerY)
      const botRightDiag = this.calcDiag(elWidth - pointerX, elHeight - pointerY)
      const botLeftDiag = this.calcDiag(pointerX, elHeight - pointerY)
      const rippleRadius = Math.max(
        topLeftDiag, topRightDiag, botRightDiag, botLeftDiag
      )
      const rippleSize = rippleRadius * 2
      const left = pointerX - rippleRadius
      const top = pointerY - rippleRadius
      return {
        directionInvariant: true,
        height: rippleSize + 'px',
        width: rippleSize + 'px',
        top: top + 'px',
        left: left + 'px'
      }
    },
    calcDiag (a, b) {
      return Math.sqrt((a * a) + (b * b))
    }
  },
  components: {
    'circle-ripple': circleRipple
  }
}
</script>

<style lang="css">
</style>
