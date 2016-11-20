<template>
<paper class="mu-drawer" :style="style" :class="{'open': open, 'right': right}" :zDepth="zDepth">
  <slot></slot>
</paper>
</template>

<script>
import paper from '../paper'
import PopupManager from '../internal/popup/manager'
import {getWidth} from '../utils'
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
  computed: {
    style () {
      return {
        width: getWidth(this.width)
      }
    }
  },
  methods: {
    overlayClick () {
      this.$emit('close', 'overlay')
    },
    escPress () {
      this.$emit('close', 'keyboard')
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
        if (this.$el) this.$el.style.zIndex = ''
      }
    }
  },
  beforeDestroy () {
    PopupManager.close(this)
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
