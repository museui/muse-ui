<template>
<div class="mu-menu" tabindex="0" v-clickoutside="clickoutside"  @keydown="handleKeydown" :style="{'width': contentWidth}" >
  <div ref="list" class="mu-menu-list" :style="{'width': contentWidth, 'max-height': maxHeight + 'px'}" :class="menuListClass">
    <slot></slot>
  </div>
</div>
</template>

<script>
import {getWidth, convertClass} from '../utils'
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
    listClass: {
      type: [String, Object, Array]
    },
    // 内部使用，是否是弹出菜单
    popover: {
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
    },
    menuListClass () {
      const {desktop, listClass} = this
      const classNames = []
      if (desktop) classNames.push('mu-menu-destop')
      return classNames.concat(convertClass(listClass))
    }
  },
  mounted () {
    this.setWidth()
    const selectedIndex = this.getSelectedIndex()
    this.setScollPosition()
    this.focusIndex = this.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : this.initiallyKeyboardFocused ? 0 : -1
    this.isKeyboardFocused = this.initiallyKeyboardFocused
  },
  beforeUpdate () {
    const selectedIndex = this.getSelectedIndex()
    this.focusIndex = this.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0
  },
  updated () {
    this.setWidth()
  },
  methods: {
    clickoutside () {
      this.setFocusIndex(-1, false)
    },
    setWidth () {
      if (!this.autoWidth) return
      const el = this.$el
      const listEl = this.$refs.list
      const elWidth = el.offsetWidth
      if (elWidth === 0) return // 被隐藏时不计算宽度
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
    handleChange (value) {
      this.$emit('change', value)
    },
    handleClick (item) {
      this.$emit('itemClick', item)
      this.$emit('item-click', item)
    },
    handleKeydown (event) {
      const key = keycode(event)
      switch (key) {
        case 'down':
          event.stopPropagation()  // 防止菜单嵌套
          event.preventDefault()
          this.incrementKeyboardFocusIndex()
          break
        case 'tab':
          event.stopPropagation()
          event.preventDefault()
          if (event.shiftKey) {
            this.decrementKeyboardFocusIndex()
          } else {
            this.incrementKeyboardFocusIndex()
          }
          break
        case 'up':
          event.stopPropagation()
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
    setScollPosition (selectedIndex) {
      const desktop = this.desktop
      let focusedMenuItem = null
      this.$children.forEach((child) => {
        if (child.active) focusedMenuItem = child
      })
      const menuItemHeight = desktop ? 32 : 48

      if (focusedMenuItem) {
        const selectedOffSet = focusedMenuItem.$el.offsetTop
        // Make the focused item be the 2nd item in the list the user sees
        let scrollTop = selectedOffSet - menuItemHeight
        if (scrollTop < menuItemHeight) scrollTop = 0
        this.$refs.list.scrollTop = scrollTop
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
    },
    popover (val) {
      if (val) {
        setTimeout(() => {
          const selectedIndex = this.getSelectedIndex()
          if (this.disableAutoFocus) {
            this.$el.focus()
          } else {
            this.setFocusIndex(selectedIndex, false)
          }
        }, 300)
      }
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
  z-index: 90;
  outline: none;
}

.mu-menu-list {
  padding: 8px 0;
  user-select: none;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
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
