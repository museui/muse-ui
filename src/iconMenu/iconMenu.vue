<template>
  <div class="mu-icon-menu">
    <icon-button :icon="icon" @click="open"></icon-button>
    <popover v-if="openMenu" :overlay="overlay" :trigger="trigger" :anchorOrigin="anchorOrigin"
      :targetOrigin="targetOrigin" @close="close">
      <mu-menu @change="change" :value="value" @itemClick="itemClick" :multiple="multiple" :desktop="desktop" :maxHeight="maxHeight">
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
    value: {},
    multiple: {
      type: Boolean,
      default: false
    },
    desktop: {
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
    overlay: {
      type: Boolean,
      default: false
    },
    itemClickClose: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      openMenu: false,
      trigger: null
    }
  },
  methods: {
    open () {
      this.openMenu = true
      this.$emit('open')
    },
    close () {
      this.openMenu = false
      this.$emit('close')
    },
    change (value) {
      this.$emit('change', value)
    },
    itemClick () {
      if (this.itemClickClose) {
        this.close()
      }
    }
  },
  mounted () {
    this.trigger = this.$el
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
