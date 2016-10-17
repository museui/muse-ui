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
      <icon :value="uncheckIcon" class="mu-radio-icon-uncheck"></icon>
      <icon :value="checkedIcon" class="mu-radio-icon-checked"></icon>
    </div>
    <div class="mu-radio-label"  v-if="label && !labelLeft">{{label}}</div>
  </div>
</label>
</template>

<script>
import icon from '../icon'
import touchRipple from '../internal/touchRipple'
export default {
  name: 'mu-radio',
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
    },
    uncheckIcon: {
      type: String,
      default: 'radio_button_unchecked'
    },
    checkedIcon: {
      type: String,
      default: 'radio_button_checked'
    }
  },
  data () {
    return {
      inputValue: this.value
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
    icon,
    'touch-ripple': touchRipple
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-radio {
  position: relative;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  margin-right: 32px;
  cursor: pointer;
  input[type="radio"] {
    display: none;
    &:checked {
      + .mu-radio-wrapper {
        .mu-radio-icon-uncheck{
          opacity: 0;
          transition: opacity 650ms @easeOutFunction 150ms;
          color: @primary1Color;
        }
        .mu-radio-icon-checked{
          opacity: 1;
          transform: scale(1);
          transition: opacity 0ms @easeOutFunction, transform 800ms @easeOutFunction;
        }
        .mu-radio-ripple-wrapper{
          color: @primary1Color;
        }
      }

    }
  }

  * {
    pointer-events: none;
  }

  &.disabled  {
    cursor: not-allowed;
  }
}

.mu-radio-wrapper{
  display: flex;
  width: 100%;
  height: 24px;
  align-items: center;
  justify-content: space-between;
}
.mu-radio-icon{
  width: 24px;
  height: 24px;
  vertical-align: middle;
  position: relative;
  margin-right: 16px;
  .mu-radio.label-left &{
    margin-right: 0;
    margin-left: 16px;
  }
}

.mu-radio-label {
  color: @textColor;
  .mu-radio.disabled & {
    color: @disabledColor;
  }
}

.mu-radio-icon-uncheck {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 1;
  transition: opacity 1s @easeOutFunction .2s;
  color: @textColor;
  .mu-radio.disabled & {
    color: @disabledColor;
  }
}

.mu-radio-icon-checked {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  color: @primary1Color;
  transform: scale(0);
  transition: opacity 450ms @easeOutFunction, transform 0ms @easeOutFunction 450ms;
  .mu-radio.disabled & {
     color: @disabledColor;
   }
}

.mu-radio-ripple-wrapper {
  width: 48px;
  height: 48px;
  top: -12px;
  left: -12px;
  .mu-radio.label-left & {
    right: -12px;
    left: auto;
  }
}
</style>
