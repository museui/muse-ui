<template>
<transition name="mu-popover">
  <div class="mu-popover">
    <slot></slot>
  </div>
</transition>
</template>

<script>
import Popup from '../internal/popup'
import * as domUtil from '../utils/domUtil'
import clickoutside from '../internal/clickoutside'
import scroll from '../internal/scroll'
export default {
  name: 'mu-popover',
  mixins: [Popup, clickoutside, scroll],
  props: {
    overlay: {
      default: false
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
    getElInfo (el) {
      let offset = domUtil.getOffset(el)
      return {
        left: offset.left,
        top: offset.top,
        width: el.offsetWidth,
        height: el.offsetHeight
      }
    },
    getAnchorPositon (elInfo) {
      let left
      let top
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      switch (this.anchorOrigin.horizontal) {
        case 'left':
          left = elInfo.left
          break
        case 'middle':
          left = elInfo.left + elInfo.width / 2
          break
        case 'right':
          left = elInfo.left + elInfo.width
          break
      }

      switch (this.anchorOrigin.vertical) {
        case 'top':
          top = elInfo.top
          break
        case 'center':
          top = elInfo.top + elInfo.height / 2
          break
        case 'bottom':
          top = elInfo.top + elInfo.height
          break
      }

      return {
        left: left,
        top: top,
        right: windowWidth - left,
        bottom: windowHeight - top
      }
    },
    computerPosition () {
      const elInfo = this.getElInfo(this.trigger)
      const anchorPostion = this.getAnchorPositon(elInfo)
      const contentHeight = this.$el.offsetHeight
      const contentWidth = this.$el.offsetWidth
      let position
      let top
      let left
      switch (this.targetOrigin.vertical) {
        case 'top':
          if (anchorPostion.bottom > contentHeight) {
            position = 'bottom'
            top = anchorPostion.top
          } else {
            position = 'top'
            top = anchorPostion.top - contentHeight
          }
          break
        case 'center':
          position = 'bottom'
          top = anchorPostion.top - contentHeight / 2
          break
        case 'bottom':
          if (anchorPostion.top > contentHeight) {
            position = 'top'
            top = anchorPostion.top - contentHeight
          } else {
            position = 'bottom'
            top = anchorPostion.top
          }
          break
      }

      switch (this.targetOrigin.horizontal) {
        case 'left':
          if (anchorPostion.right > contentWidth) {
            left = anchorPostion.left
          } else {
            left = anchorPostion.left - contentWidth
          }
          break
        case 'middle':
          left = anchorPostion.left - contentWidth / 2
          break
        case 'right':
          if (anchorPostion.left > contentWidth) {
            left = anchorPostion.left - contentWidth
          } else {
            left = anchorPostion.left
          }
          break
      }
      return {
        position: position,
        left: left,
        top: top
      }
    },
    setStyle () {
      // if (!this.open) return
      const position = this.computerPosition()
      this.$el.style.left = `${Math.max(0, position.left)}px`
      this.$el.style.top = `${Math.max(0, position.top)}px`
    },
    close () {
      this.$emit('close')
    },
    overlayClick () {
      this.close()
    },
    clickOutSide () {
      // this.close()
    },
    windowScroll () {
      console.log(1)
      this.setStyle()
      const elInfo = this.getElInfo(this.trigger)
      if (elInfo.top < 0 || elInfo.left < 0) this.close()
    }
  },
  mounted () {
    this.setStyle()
  },
  updated () {
    this.setStyle()
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
  transform: scale(0);
  opacity: 0;
}


</style>
