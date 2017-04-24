<template>
  <div class="mu-icon-menu">
    <icon-button :tooltip="tooltip" :tooltipPosition="tooltipPosition" :icon="icon" :iconClass="iconClass" @click="handleOpen">
      <slot name="icon"></slot>
    </icon-button>
    <popover v-if="$slots && $slots.default && $slots.default.length > 0" :open="openMenu" :trigger="trigger" :scroller="scroller" :anchorOrigin="anchorOrigin"
      :targetOrigin="targetOrigin" @close="handleClose">
      <mu-menu @change="change" :popover="openMenu" :value="value" :class="menuClass" :listClass="menuListClass"
        @itemClick="itemClick" :multiple="multiple" :desktop="desktop" :maxHeight="maxHeight">
        <slot></slot>
      </mu-menu>
    </popover>
  </div>
</template>

<script>
import iconButton from '../iconButton'
import popover from '../popover'
import {menu} from '../menu'
export default {
  name: 'mu-icon-menu',
  props: {
    icon: {
      type: String,
      required: true
    },
    iconClass: {
      type: [String, Array, Object]
    },
    menuClass: {
      type: [String, Array, Object]
    },
    menuListClass: {
      type: [String, Array, Object]
    },
    value: {},
    multiple: {
      type: Boolean,
      default: false
    },
    desktop: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: false
    },
    maxHeight: {
      type: Number
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
    targetOrigin: {
      type: Object,
      default () {
        return {
          vertical: 'top',
          horizontal: 'left'
        }
      }
    },
    scroller: {},
    itemClickClose: {
      type: Boolean,
      default: true
    },
    tooltip: {
      type: String
    },
    tooltipPosition: {
      type: String,
      default: 'bottom-center'
    }
  },
  data () {
    return {
      openMenu: this.open,
      trigger: null
    }
  },
  methods: {
    handleOpen () {
      this.openMenu = true
      this.$emit('open')
    },
    handleClose () {
      this.openMenu = false
      this.$emit('close')
    },
    change (value) {
      this.$emit('change', value)
    },
    itemClick (item) {
      if (this.itemClickClose) {
        this.handleClose()
      }
      this.$emit('itemClick', item)
      this.$emit('item-click', item)
    }
  },
  mounted () {
    this.trigger = this.$el
  },
  watch: {
    open (val, oldVal) {
      if (val === oldVal) return
      this.openMenu = val
    }
  },
  components: {
    'icon-button': iconButton,
    popover,
    'mu-menu': menu
  }
}
</script>

<style lang="css">
.mu-icon-menu{
  display: inline-block;
  position: relative;
}
</style>
