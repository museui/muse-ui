<template>
<div class="mu-dropDown-menu" :class="{'disabled': disabled}">
  <svg viewBox="0 0 24 24"  class="mu-dropDown-menu-icon" :class="iconClass">
    <path d="M7 10l5 5 5-5z"/>
  </svg>
  <div class="mu-dropDown-menu-text" @click="handleOpen" :class="labelClass">
    <div class="mu-dropDown-menu-text-overflow">{{label}}</div>
  </div>
  <div class="mu-dropDown-menu-line" :class="underlineClass"></div>
  <popover v-if="!disabled && $slots && $slots.default && $slots.default.length > 0" :scroller="scroller" :open="openMenu" :trigger="trigger" :anchorOrigin="anchorOrigin"  @close="handleClose">
    <mu-menu :style="{width: menuWidth + 'px'}" @change="change"
      :class="menuClass" :listClass="menuListClass" :value="value" :multiple="multiple"
      :autoWidth="autoWidth" @itemClick="itemClick"
      :popover="openMenu" desktop :maxHeight="maxHeight">
      <slot></slot>
    </mu-menu>
  </popover>
</div>
</template>

<script>
import popover from '../popover'
import {menu} from '../menu'
import {isNull} from '../utils'
import resize from '../internal/resize'
export default {
  name: 'mu-dropDown-menu',
  mixins: [resize],
  props: {
    value: {},
    maxHeight: {
      type: Number
    },
    autoWidth: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    labelClass: {
      type: [String, Array, Object]
    },
    menuClass: {
      type: [String, Array, Object]
    },
    menuListClass: {
      type: [String, Array, Object]
    },
    underlineClass: {
      type: [String, Array, Object]
    },
    iconClass: {
      type: [String, Array, Object]
    },
    openImmediately: {
      type: Boolean,
      default: false
    },
    anchorOrigin: {
      type: Object,
      default () {
        return {
          vertical: 'top',
          horizontal: 'left'
        }
      }
    },
    anchorEl: {
      type: Object
    },
    scroller: {},
    separator: {
      type: String,
      default: ','
    }
  },
  data () {
    return {
      openMenu: false,
      trigger: null,
      menuWidth: null,
      label: ''
    }
  },
  mounted () {
    this.trigger = this.anchorEl || this.$el
    this.openMenu = this.openImmediately
    this.label = this.getText()
    this.setMenuWidth()
  },
  methods: {
    handleClose () {
      this.$emit('close')
      this.openMenu = false
    },
    handleOpen () {
      this.$emit('open')
      this.openMenu = true
    },
    itemClick () {
      if (!this.multiple) this.handleClose()
    },
    change (value) {
      this.$emit('change', value)
    },
    setMenuWidth () {
      if (!this.$el) return
      this.menuWidth = this.autoWidth ? '' : this.$el.offsetWidth
    },
    onResize () {
      this.setMenuWidth()
    },
    getText () {
      if (!this.$slots || !this.$slots.default || this.$slots.length === 0 || isNull(this.value)) return ''
      let text = []
      this.$slots.default.forEach((vNode) => {
        if (!vNode.componentOptions || !vNode.componentOptions.propsData || isNull(vNode.componentOptions.propsData.value)) return
        const {value, title} = vNode.componentOptions.propsData
        if (value === this.value || (this.multiple && this.value.length && this.value.indexOf(value) !== -1)) {
          text.push(title)
          return false
        }
      })
      return text.join(this.separator)
    }
  },
  updated () {
    this.setMenuWidth()
  },
  watch: {
    anchorEl (val) {
      if (val) this.trigger = val
    },
    value () {
      this.label = this.getText()
    }
  },
  components: {
    popover,
    'mu-menu': menu
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-dropDown-menu {
  display: inline-block;
  font-size: 15px;
  height: 48px;
  position: relative;
  transition: all .45s @easeOutFunction;
  cursor: pointer;
  overflow: hidden;
  &.disabled{
    color: @disabledColor;
    cursor: not-allowed;
  }
}

.mu-dropDown-menu-icon{
  position: absolute;
  right: 16px;
  top: 16px;
  color: @borderColor;
  fill: currentColor;
  display: inline-block;
  width: 24px;
  height: 24px;
  user-select:none
}

.mu-dropDown-menu-text{
  padding-left: 24px;
  padding-right: 48px;
  line-height: 56px;
  opacity: 1;
  position: relative;
  color: @textColor;
  .mu-dropDown-menu.disabled &{
    color: @disabledColor;
  }
}

.mu-dropDown-menu-text-overflow{
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
}
.mu-dropDown-menu-line {
  bottom: 1px;
  left: 0px;
  margin: -1px 24px;
  right: 0px;
  position: absolute;
  height: 1px;
  background-color: @borderColor;
  transition: all .45s @easeOutFunction;
  html.pixel-ratio-2 & {
    .transform(scaleY(0.5));
  }
  html.pixel-ratio-3 & {
    .transform(scaleY(0.33));
  }
}
</style>
