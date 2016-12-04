<template>
<label @mousedown="handleMouseDown" @mouseleave="handleMouseLeave" @mouseup="handleMouseUp"
  @touchstart="handleTouchStart" @touchend="handleTouchEnd"  @touchcancel="handleTouchEnd" @click.stop="handleClick"
  class="mu-radio" :class="{'label-left': labelLeft, 'disabled': disabled, 'no-label': !label}">
  <input type="radio" :disabled="disabled" :name="name" :value="nativeValue" @change="handleChange" v-model="inputValue">
  <touch-ripple v-if="!disabled" rippleWrapperClass="mu-radio-ripple-wrapper" class="mu-radio-wrapper">
    <div class="mu-radio-label" :class="labelClass" v-if="label && labelLeft">{{label}}</div>
    <div class="mu-radio-icon">
      <svg class="mu-radio-icon-uncheck mu-radio-svg-icon" :class="iconClass" v-if="!checkedIcon" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
      </svg>
      <svg class="mu-radio-icon-checked mu-radio-svg-icon" :class="iconClass" v-if="!uncheckIcon" viewBox="0 0 24 24">
        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
      </svg>
      <icon :value="uncheckIcon" v-if="uncheckIcon" :class="iconClass" class="mu-radio-icon-uncheck"></icon>
      <icon :value="checkedIcon" v-if="checkedIcon" :class="iconClass" class="mu-radio-icon-checked"></icon>
    </div>
    <div class="mu-radio-label" :class="labelClass" v-if="label && !labelLeft">{{label}}</div>
  </touch-ripple>
  <div class="mu-radio-wrapper" v-if="disabled">
    <div class="mu-radio-label" :class="labelClass" v-if="label && labelLeft">{{label}}</div>
    <div class="mu-radio-icon">
      <svg class="mu-radio-icon-uncheck mu-radio-svg-icon" :class="iconClass" v-if="!checkedIcon" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
      </svg>
      <svg class="mu-radio-icon-checked mu-radio-svg-icon" :class="iconClass" v-if="!uncheckIcon" viewBox="0 0 24 24">
        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
      </svg>
      <icon :value="uncheckIcon" v-if="uncheckIcon" :class="iconClass" class="mu-radio-icon-uncheck"></icon>
      <icon :value="checkedIcon" v-if="checkedIcon" :class="iconClass" class="mu-radio-icon-checked"></icon>
    </div>
    <div class="mu-radio-label" :class="labelClass"  v-if="label && !labelLeft">{{label}}</div>
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
    labelClass: {
      type: [String, Object, Array]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    uncheckIcon: {
      type: String,
      default: ''
    },
    checkedIcon: {
      type: String,
      default: ''
    },
    iconClass: {
      type: [String, Object, Array]
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
    }
  },
  methods: {
    handleClick () {
      // 阻止事件冒泡，放置外部控制的时候触发两次 click
    },
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
    },
    handleChange () {
      this.$emit('change', this.inputValue)
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
  height: 24px;
  line-height: 24px;
  cursor: pointer;
  user-select: none;
  input[type="radio"] {
    display: none;
    &:checked {
      + .mu-radio-wrapper {
        .mu-radio-icon-uncheck{
          opacity: 0;
          transform: scale(0);
          color: @primaryColor;
        }
        .mu-radio-icon-checked{
          opacity: 1;
          transform: scale(1);
        }
        .mu-radio-ripple-wrapper{
          color: @primaryColor;
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
  .mu-radio.no-label &{
    margin-left: 0;
    margin-right: 0;
  }
}

.mu-radio-label {
  color: @textColor;
  flex: 1;
  font-size: 16px;
  .mu-radio.disabled & {
    color: @disabledColor;
  }
}

.mu-radio-svg-icon{
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  user-select: none;
}

.mu-radio-icon-uncheck {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 1;
  transition: all 450ms @easeOutFunction;
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
  color: @primaryColor;
  transform: scale(0);
  transition: all 450ms @easeOutFunction;
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
