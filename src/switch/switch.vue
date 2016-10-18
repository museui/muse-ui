<template>
<label @mousedown="handleMouseDown" @mouseup="handleMouseUp" @touchstart="handleTouchStart" @touchend="handleTouchEnd" class="mu-switch" :class="{'label-left': labelLeft, 'disabled': disabled}">
  <input type="checkbox" :disabled="disabled" :value="nativeValue" v-model="inputValue">
  <touch-ripple v-if="!disabled" rippleWrapperClass="mu-switch-ripple-wrapper" class="mu-switch-wrapper">
    <div class="mu-switch-label"  v-if="label && labelLeft">{{label}}</div>
    <div class="mu-switch-icon">
    </div>
    <div class="mu-switch-label"  v-if="label && !labelLeft">{{label}}</div>
  </touch-ripple>
  <div class="mu-switch-wrapper" v-if="disabled">
    <div class="mu-switch-label"  v-if="label && labelLeft">{{label}}</div>
    <div class="mu-switch-icon">

    </div>
    <div class="mu-switch-label"  v-if="label && !labelLeft">{{label}}</div>
  </div>
</label>
</template>

<script>
import touchRipple from '../internal/touchRipple'
export default {
  name: 'mu-switch',
  props: {
    name: {
      type: String
    },
    value: {
      type: String
    },
    nativeValue: {
      type: String
    },
    label: {
      type: String,
      default: ''
    },
    labelLeft: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleMouseDown (event) {
      if (this.disabled) return
      if (event.button === 0) {
        this.$children[0].start(event)
      }
    },
    handleMouseUp () {
      if (this.disabled) return
      this.$children[0].end()
    },
    handleMouseLeave () {
      if (this.disabled) return
      this.$children[0].end()
    },
    handleTouchStart (event) {
      if (this.disabled) return
      this.$children[0].start(event)
    },
    handleTouchEnd () {
      if (this.disabled) return
      this.$children[0].end()
    }
  },
  components: {
    'touch-ripple': touchRipple
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
</style>
