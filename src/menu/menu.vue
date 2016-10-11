<template>
<div class="mu-menu" :style="{'width': contentWidth, 'maxHeight': maxHeight + 'px'}" >
  <div ref="list" class="mu-menu-list" :style="{'width': contentWidth}" :class="{'mu-menu-destop': desktop}">
    <slot></slot>
  </div>
</div>
</template>

<script>
import {getWidth} from '../utils'
export default {
  name: 'mu-menu',
  props: {
    desktop: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    autoWidth: {
      type: Boolean,
      default: true
    },
    width: {
      type: [String, Number]
    },
    maxHeight: {
      type: Number
    },
    value: {}
  },
  computed: {
    keyWidth () {
      return this.desktop ? 64 : 56
    },
    contentWidth () {
      return this.autoWidth ? '' : getWidth(this.width)
    }
  },
  mounted () {
    if (this.autoWidth) this.setWidth()
  },
  updated () {
    if (this.autoWidth) this.setWidth()
  },
  methods: {
    setWidth () {
      const el = this.$el
      const listEl = this.$refs.list
      const elWidth = el.offsetWidth
      const keyWidth = this.keyWidth
      const minWidth = keyWidth * 1.5
      let keyIncrements = elWidth / keyWidth
      let newWidth

      keyIncrements = keyIncrements <= 1.5 ? 1.5 : Math.ceil(keyIncrements)
      newWidth = keyIncrements * keyWidth

      if (newWidth < minWidth) newWidth = minWidth

      el.style.width = `${newWidth}px`
      listEl.style.width = `${newWidth}px`
    },
    handlerChange (value) {
      this.$emit('change', value)
    },
    handlerClick (item) {
      this.$emit('itemClick', item)
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-menu {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  z-index: 90;
}

.mu-menu-list {
  padding: 8px 0;
  -webkit-user-select: none;
  > .mu-divider {
    margin: 7px 0px 8px;
  }
  > .mu-sub-header {
    padding-left: 24px;
    margin-top: -8px
  }
}

.mu-menu-destop {
  padding: 16px 0;
  > .mu-sub-header {
    margin-top: -16px;
  }
}
</style>
