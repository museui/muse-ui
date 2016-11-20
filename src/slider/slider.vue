<template>
<div class="mu-slider" :class="sliderClass" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
  <input type="range"  @mousedown="handleMouseDown" @mouseup="handleMouseUp" @touchstart="handleTouchStart" @touchend="handleTouchEnd" @focus="handleFocus" @blur="handleBlur" :disabled="disabled" :name="name" :step="step" :min="min" :max="max" v-model="inputValue">
  <div class="mu-slider-track"></div>
  <div class="mu-slider-fill" :style="fillStyle"></div>
  <div class="mu-slider-thumb" :style="thumbStyle">
    <focus-ripple v-if="(focus || hover) && !active"></focus-ripple>
  </div>
</div>
</template>

<script>
import focusRipple from '../internal/focusRipple'
export default {
  name: 'mu-slider',
  props: {
    name: {
      type: String
    },
    value: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 0.1
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      inputValue: this.value,
      active: false,
      hover: false,
      focus: false
    }
  },
  computed: {
    percent () {
      let percentNum = (this.inputValue - this.min) / (this.max - this.min) * 100
      return percentNum > 100 ? 100 : percentNum < 0 ? 0 : percentNum
    },
    fillStyle () {
      return {
        width: this.percent + '%'
      }
    },
    thumbStyle () {
      return {
        left: this.percent + '%'
      }
    },
    sliderClass () {
      return {
        zero: this.inputValue <= this.min,
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  methods: {
    handleMouseDown () {
      this.active = true
    },
    handleMouseUp () {
      this.active = false
    },
    handleTouchStart () {
      this.active = !this.disabled
    },
    handleTouchEnd () {
      this.active = false
    },
    handleFocus () {
      this.focus = !this.disabled
    },
    handleBlur () {
      this.focus = false
    },
    handleMouseEnter () {
      this.hover = !this.disabled
    },
    handleMouseLeave () {
      this.hover = false
    }
  },
  watch: {
    value (val) {
      this.inputValue = val
    },
    inputValue (val) {
      this.$emit('input', val)
      this.$emit('change', val)
    }
  },
  components: {
    'focus-ripple': focusRipple
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-slider {
  width: 100%;
  position: relative;
  height: 24px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  cursor: default;
  input[type="range"] {
    position: absolute;
    display: block;
    height: 20px;
    width: 100%;
    left: 0;
    right: 0;
    top: 50%;
    margin: 0;
    margin-top: -10px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-position: center;
    background-size: 100% 2px;
    background-repeat: no-repeat;
    outline: 0;
    -ms-background-position-y: 500px;
    z-index: 2;
    opacity: 0;
    &:active,
    &:focus {
      border: 0;
      outline: 0 none;
    }
  }
  // Range thumb mixin
  .range-thumb() {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    border: none;
    outline: 0;
    height: 20px;
    width: 20px;
    position: relative;
    opacity: 0;
    border-radius: 20px;
    z-index: 2;
    cursor: pointer;
  }
  // ======= Webkit ========
  input[type="range"]::-webkit-range-thumb {
    .range-thumb();
  }

  // ======= FireFox ========
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 2px;
    border: none;
    outline: 0;
  }
  input[type="range"]::-moz-range-thumb {
    .range-thumb();
  }

  // ======= IE ========
  input[type="range"]::-ms-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  input[type="range"]::-ms-thumb {
    .range-thumb();
  }
}

.mu-slider-track{
  position: absolute;
  height: 2px;
  left: 0;
  right: 0;
  top: 50%;
  margin-top: -1px;
  background-color: @lighterPrimaryColor;
}

.mu-slider-fill{
  position: absolute;
  height: 2px;
  width: 100%;
  background-color: @primaryColor;
  left: 0;
  top: 50%;
  margin-top: -1px;
  .mu-slider.disabled & {
    background-color: @lighterPrimaryColor;
  }
}

.mu-slider-thumb {
  position: absolute;
  top: 50%;
  margin-top: -6px;
  width: 12px;
  height: 12px;
  background-color: @primaryColor;
  color: @primaryColor;
  border-radius: 50%;
  transform: translate(-50%, 0);
  transition: background 450ms @easeOutFunction, border-color 450ms @easeOutFunction, width 450ms @easeOutFunction, height 450ms @easeOutFunction;
  .mu-slider.active &{
    width: 20px;
    height: 20px;
    margin-top: -10px;
  }
  .mu-slider.zero &,
  .mu-slider.disabled &{
    border: 2px solid @lighterPrimaryColor;
    color: @lighterPrimaryColor;
    background-color: @alternateTextColor;
    .mu-focus-ripple-wrapper {
      top: -14px;
      left: -14px;
    }
  }

  .mu-focus-ripple-wrapper {
    width: 36px;
    height: 36px;
    top: -12px;
    left: -12px;
  }
}
</style>
