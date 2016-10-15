<template>
<div class="mu-menu" tabIndex="0" v-clickoutside="clickoutside"  @keydown="handlerKeydown" :style="{'width': contentWidth, 'maxHeight': maxHeight + 'px'}" >
  <div ref="list" class="mu-menu-list" :style="{'width': contentWidth}" :class="{'mu-menu-destop': desktop}">
    <slot></slot>
  </div>
</div>
</template>

<script>
import {getWidth} from '../utils'
import keycode from 'keycode'
import clickoutside from '../internal/clickoutside'
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
    disableAutoFocus: {
      type: Boolean,
      default: false
    },
    initiallyKeyboardFocused: {
      type: Boolean,
      default: false
    },
    value: {}
  },
  data () {
    return {
      focusIndex: -1,
      isKeyboardFocused: false
    }
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
    this.setScollPosition()
    const selectedIndex = this.getSelectedIndex()
    this.focusIndex = this.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0
    this.isKeyboardFocused = this.initiallyKeyboardFocused
  },
  beforeUpdate () {
    const selectedIndex = this.getSelectedIndex()
    this.focusIndex = this.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0
  },
  updated () {
    if (this.autoWidth) this.setWidth()
  },
  methods: {
    clickoutside () {
      this.setFocusIndex(-1, false)
    },
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
    },
    handlerKeydown (event) {
      const key = keycode(event)
      switch (key) {
        case 'down':
          event.preventDefault()
          this.incrementKeyboardFocusIndex()
          break
        case 'tab':
          event.preventDefault()
          if (event.shiftKey) {
            this.decrementKeyboardFocusIndex()
          } else {
            this.incrementKeyboardFocusIndex()
          }
          break
        case 'up':
          event.preventDefault()
          this.decrementKeyboardFocusIndex()
          break
      }
    },
    decrementKeyboardFocusIndex () {
      let index = this.focusIndex
      const maxIndex = this.getMenuItemCount() - 1
      index--
      if (index < 0) index = maxIndex
      this.setFocusIndex(index, true)
    },
    incrementKeyboardFocusIndex () {
      let index = this.focusIndex
      const maxIndex = this.getMenuItemCount() - 1
      index++
      if (index > maxIndex) index = 0
      this.setFocusIndex(index, true)
    },
    getMenuItemCount () {
      let menuItemCount = 0
      this.$children.forEach((child) => {
        if (child._isMenuItem && !child.disabled) menuItemCount++
      })
      return menuItemCount
    },
    getSelectedIndex () {
      let selectedIndex = -1
      let menuItemIndex = 0

      this.$children.forEach((child) => {
        if (child.active) selectedIndex = menuItemIndex
        if (child._isMenuItem && !child.disabled) menuItemIndex++
      })

      return selectedIndex
    },
    setFocusIndex (newIndex, isKeyboardFocused) {
      this.focusIndex = newIndex
      this.isKeyboardFocused = isKeyboardFocused
    },
    setScollPosition () {
      const desktop = this.desktop
      const focusedMenuItem = this.focusedMenuItem
      const menuItemHeight = desktop ? 32 : 48

      if (focusedMenuItem) {
        const selectedOffSet = focusedMenuItem.$el.offsetTop
        // Make the focused item be the 2nd item in the list the user sees
        let scrollTop = selectedOffSet - menuItemHeight
        if (scrollTop < menuItemHeight) scrollTop = 0

        this.$el.scrollTop = scrollTop
      }
    }
  },
  watch: {
    focusIndex (newVal, oldVal) {
      if (newVal === oldVal) return
      let menuItemIndex = 0
      this.$children.forEach((child) => {
        if (!child._isMenuItem || child.disabled) return
        const isFocused = menuItemIndex === newVal
        let focusState = 'none'
        if (isFocused) {
          focusState = this.isKeyboardFocused ? 'keyboard-focused' : 'focused'
        }
        child.focusState = focusState
        menuItemIndex++
      })
    }
  },
  directives: {
    clickoutside
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
