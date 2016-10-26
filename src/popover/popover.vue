<template>
<transition name="mu-popover">
  <div class="mu-popover"  v-clickoutside="clickOutSide">
    <slot></slot>
  </div>
</transition>
</template>

<script>
import Popup from '../internal/popup'
import clickoutside from '../internal/clickoutside'
import scroll from '../internal/scroll'
export default {
  name: 'mu-popover',
  mixins: [Popup, scroll],
  props: {
    overlay: {
      default: false
    },
    overlayOpacity: {
      default: 0.01
    },
    trigger: {
      type: window.Element
    },
    anchorOrigin: {
      type: Object,
      default () {
        return {
          vertical: 'bottom',
          horizontal: 'left'
        }
      }
    },
    targetOrigin: {
      type: Object,
      default () {
        return {
          vertical: 'top',
          horizontal: 'left'
        }
      }
    }
  },
  methods: {
    getAnchorPosition (el) {
      const rect = el.getBoundingClientRect()
      const a = {
        top: rect.top,
        left: rect.left,
        width: el.offsetWidth,
        height: el.offsetHeight
      }

      a.right = rect.right || a.left + a.width
      a.bottom = rect.bottom || a.top + a.height
      a.middle = a.left + ((a.right - a.left) / 2)
      a.center = a.top + ((a.bottom - a.top) / 2)

      return a
    },
    getTargetPosition (targetEl) {
      return {
        top: 0,
        center: targetEl.offsetHeight / 2,
        bottom: targetEl.offsetHeight,
        left: 0,
        middle: targetEl.offsetWidth / 2,
        right: targetEl.offsetWidth
      }
    },
    getElInfo (el) {
      let box = el.getBoundingClientRect()
      return {
        left: box.left,
        top: box.top,
        width: el.offsetWidth,
        height: el.offsetHeight
      }
    },
    setStyle () {
      const {targetOrigin, anchorOrigin} = this

      const anchor = this.getAnchorPosition(this.trigger)
      let target = this.getTargetPosition(this.$el)

      let targetPosition = {
        top: anchor[anchorOrigin.vertical] - target[targetOrigin.vertical],
        left: anchor[anchorOrigin.horizontal] - target[targetOrigin.horizontal]
      }
      if (anchor.top < 0 || anchor.top > window.innerHeight ||
          anchor.left < 0 || anchor.left > window.innerWidth) {
        this.close('overflow')
        return
      }
      target = this.getTargetPosition(this.$el) // update as height may have changed
      targetPosition = this.applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition)

      this.$el.style.left = `${Math.max(0, targetPosition.left)}px`
      this.$el.style.top = `${Math.max(0, targetPosition.top)}px`
    },
    getOverlapMode (anchor, target, median) {
      if ([anchor, target].indexOf(median) >= 0) return 'auto'
      if (anchor === target) return 'inclusive'
      return 'exclusive'
    },

    getPositions (anchor, target) {
      const a = {...anchor}
      const t = {...target}

      const positions = {
        x: ['left', 'right'].filter((p) => p !== t.horizontal),
        y: ['top', 'bottom'].filter((p) => p !== t.vertical)
      }

      const overlap = {
        x: this.getOverlapMode(a.horizontal, t.horizontal, 'middle'),
        y: this.getOverlapMode(a.vertical, t.vertical, 'center')
      }

      positions.x.splice(overlap.x === 'auto' ? 0 : 1, 0, 'middle')
      positions.y.splice(overlap.y === 'auto' ? 0 : 1, 0, 'center')

      if (overlap.y !== 'auto') {
        a.vertical = a.vertical === 'top' ? 'bottom' : 'top'
        if (overlap.y === 'inclusive') {
          t.vertical = t.vertical
        }
      }

      if (overlap.x !== 'auto') {
        a.horizontal = a.horizontal === 'left' ? 'right' : 'left'
        if (overlap.y === 'inclusive') {
          t.horizontal = t.horizontal
        }
      }

      return {
        positions: positions,
        anchorPos: a
      }
    },

    applyAutoPositionIfNeeded (anchor, target, targetOrigin, anchorOrigin, targetPosition) {
      const {positions, anchorPos} = this.getPositions(anchorOrigin, targetOrigin)

      if (targetPosition.top < 0 || targetPosition.top + target.bottom > window.innerHeight) {
        let newTop = anchor[anchorPos.vertical] - target[positions.y[0]]
        if (newTop + target.bottom <= window.innerHeight) {
          targetPosition.top = Math.max(0, newTop)
        } else {
          newTop = anchor[anchorPos.vertical] - target[positions.y[1]]
          if (newTop + target.bottom <= window.innerHeight) targetPosition.top = Math.max(0, newTop)
        }
      }
      if (targetPosition.left < 0 || targetPosition.left + target.right > window.innerWidth) {
        let newLeft = anchor[anchorPos.horizontal] - target[positions.x[0]]
        if (newLeft + target.right <= window.innerWidth) {
          targetPosition.left = Math.max(0, newLeft)
        } else {
          newLeft = anchor[anchorPos.horizontal] - target[positions.x[1]]
          if (newLeft + target.right <= window.innerWidth) targetPosition.left = Math.max(0, newLeft)
        }
      }
      return targetPosition
    },
    close (reason) {
      this.$emit('close', reason)
    },
    overlayClick () {
      this.close('overlay')
    },
    clickOutSide () {
      this.close('clickOutSide')
    },
    onScroll () {
      this.setStyle()
    },
    escPress () {
      this.close('esc')
    }
  },
  mounted () {
    this.setStyle()
  },
  updated () {
    this.setStyle()
  },
  directives: {
    clickoutside
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-popover{
  position: fixed;
  background: @canvasColor;
  border-radius: 2px;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  .depth(1);
  transform-origin: center top;
}

.mu-popover-enter-active, .mu-popover-leave-active{
  transition-duration: 300ms;
  transition-property: opacity, transform;
}

.mu-popover-enter, .mu-popover-leave-active {
  transform: scaleY(0);
  opacity: 0;
}


</style>
