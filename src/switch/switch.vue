<template>
<label @mousedown="handleMouseDown" @mouseup="handleMouseUp" @touchstart="handleTouchStart" @touchend="handleTouchEnd" class="mu-radio" :class="{'label-left': labelLeft, 'disabled': disabled}">
  <input type="radio" :disabled="disabled" :name="name" :value="nativeValue" v-model="inputValue">
  <touch-ripple v-if="!disabled" rippleWrapperClass="mu-radio-ripple-wrapper" class="mu-radio-wrapper">
    <div class="mu-radio-label"  v-if="label && labelLeft">{{label}}</div>
    <div class="mu-radio-icon">
      <icon :value="uncheckIcon" class="mu-radio-icon-uncheck"></icon>
      <icon :value="checkedIcon" class="mu-radio-icon-checked"></icon>
    </div>
    <div class="mu-radio-label"  v-if="label && !labelLeft">{{label}}</div>
  </touch-ripple>
  <div class="mu-radio-wrapper" v-if="disabled">
    <div class="mu-radio-label"  v-if="label && labelLeft">{{label}}</div>
    <div class="mu-radio-icon">

    </div>
    <div class="mu-radio-label"  v-if="label && !labelLeft">{{label}}</div>
  </div>
</label>
</template>

<script>
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
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
</style>
