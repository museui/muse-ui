<template>
<div class="mu-dropDown-menu">
  <icon class="mu-dropDown-menu-icon" :class="iconClass" value="arrow_drop_down"></icon>
  <div class="mu-dropDown-menu-text" @click="open" :class="labelClass">
    {{label}}
  </div>
  <div class="mu-dropDown-menu-line" :class="underlineClass"></div>
  <popover v-if="openMenu && $slots && $slots.default && $slots.default.length > 0" :trigger="trigger" :anchorOrigin="anchorOrigin"  @close="close">
    <mu-menu @change="change" :class="menuClass" :value="value" :autoWidth="autoWidth" @itemClick="itemClick" desktop :maxHeight="maxHeight">
      <slot></slot>
    </mu-menu>
  </popover>
</div>
</template>

<script>
import icon from '../icon'
import popover from '../popover'
import {menu} from '../menu'
export default {
  name: 'mu-dropDown-menu',
  props: {
    value: {},
    maxHeight: {
      type: Number
    },
    autoWidth: {
      type: Boolean,
      default: true
    },
    labelClass: {
      type: [String, Array, Object]
    },
    menuClass: {
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
    }
  },
  data () {
    return {
      openMenu: false,
      trigger: null,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'left'
      }
    }
  },
  computed: {
    label () {
      if (!this.$slots || !this.$slots.default || this.$slots.length === 0 || !this.value) return ''
      let text = ''
      this.$slots.default.forEach((vNode) => {
        if (!vNode.componentOptions || !vNode.componentOptions.propsData || !vNode.componentOptions.propsData.value) return
        const {value, title} = vNode.componentOptions.propsData
        if (value === this.value) {
          text = title
          return false
        }
      })
      return text
    }
  },
  mounted () {
    this.trigger = this.$el
    this.openMenu = this.openImmediately
  },
  methods: {
    close () {
      this.openMenu = false
    },
    open () {
      this.openMenu = true
    },
    itemClick () {
      this.close()
    },
    change (value) {
      this.$emit('change', value)
    }
  },
  components: {
    icon,
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
}

.mu-dropDown-menu-icon{
  position: absolute;
  right: 16px;
  top: 16px;
  color: @borderColor;
}

.mu-dropDown-menu-text{
  padding-left: 24px;
  padding-right: 48px;
  line-height: 56px;
  opacity: 1;
  position: relative;
  color: @textColor;
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
