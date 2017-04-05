<template>
<paper class="mu-drawer" :style="drawerStyle" :class="{'open': open, 'right': right}" :zDepth="zDepth">
  <slot></slot>
</paper>
</template>

<script>
import paper from '../paper'
import PopupManager from '../internal/popup/manager'
import {getZIndex} from '../internal/popup/utils'
import {getWidth} from '../utils'
const transitionEvents = ['msTransitionEnd', 'mozTransitionEnd', 'oTransitionEnd', 'webkitTransitionEnd', 'transitionend']

export default {
  name: 'mu-drawer',
  props: {
    right: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: false
    },
    docked: {
      type: Boolean,
      default: true
    },
    width: {
      type: [Number, String]
    },
    zDepth: {
      type: Number,
      default: 2
    }
  },
  data () {
    return {
      overlayZIndex: getZIndex(),
      zIndex: getZIndex()
    }
  },
  computed: {
    drawerStyle () {
      return {
        width: getWidth(this.width),
        'z-index': this.docked ? '' : this.zIndex
      }
    },
    overlay () {
      return !this.docked
    }
  },
  methods: {
    overlayClick () {
      this.$emit('close', 'overlay')
    },
    bindTransition () {
      this.handleTransition = (e) => {
        if (e.propertyName !== 'transform') return
        this.$emit(this.open ? 'show' : 'hide')
      }
      transitionEvents.forEach((eventName) => {
        this.$el.addEventListener(eventName, this.handleTransition)
      })
    },
    unBindTransition () {
      if (!this.handleTransition) return
      transitionEvents.forEach((eventName) => {
        this.$el.removeEventListener(eventName, this.handleTransition)
      })
    },
    resetZIndex () {
      this.overlayZIndex = getZIndex()
      this.zIndex = getZIndex()
    }
  },
  watch: {
    open (val) {
      if (val && !this.docked) {
        PopupManager.open(this)
      } else {
        PopupManager.close(this)
      }
    },
    docked (val, oldVal) {
      if (val && !oldVal) {
        PopupManager.close(this)
      }
    }
  },
  mounted () {
    if (this.open && !this.docked) PopupManager.open(this)
    this.bindTransition()
  },
  beforeDestroy () {
    PopupManager.close(this)
    this.unBindTransition()
  },
  components: {
    paper
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-drawer {
  width: 256px;
  position: fixed;
  top: 0;
  bottom: 0;
  .scrollable();
  .no-scrollbar();
  transition-property: transform, visibility;
  transition-duration: 0.45s;
  transform: translate3d(-100%, 0, 0);
  border-radius: 0;
  left: 0;
  visibility: hidden;
  z-index: 200;
  &.right {
    right: 0;
    left: auto;
    transform: translate3d(100%, 0, 0);
  }
  &.open {
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }
}
</style>
