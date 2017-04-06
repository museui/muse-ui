<template>
<label @mousedown="handleMouseDown" @mouseleave="handleMouseLeave" @mouseup="handleMouseUp"
  @touchstart="handleTouchStart" @touchend="handleTouchEnd" @touchcancel="handleTouchEnd" @click.stop="handleClick"
  class="mu-switch" :class="{'label-left': labelLeft, 'disabled': disabled, 'no-label': !label}">
  <input type="checkbox" :disabled="disabled" :name="name" @change="handleChange"  v-model="inputValue">
  <div class="mu-switch-wrapper">
    <div class="mu-switch-label" :class="labelClass" v-if="label && labelLeft">{{label}}</div>
    <div class="mu-switch-container">
      <div class="mu-switch-track" :class="trackClass"></div>
      <div class="mu-switch-thumb" :class="thumbClass" v-if="disabled"></div>
      <touch-ripple v-if="!disabled"  rippleWrapperClass="mu-switch-ripple-wrapper" class="mu-switch-thumb"/>
    </div>
    <div class="mu-switch-label" :class="labelClass" v-if="label && !labelLeft">{{label}}</div>
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
      type: Boolean
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
    trackClass: {
      type: [String, Object, Array]
    },
    thumbClass: {
      type: [String, Object, Array]
    },
    disabled: {
      type: Boolean,
      default: false
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
    handleMouseDown (event) {
      if (this.disabled) return
      if (event.button === 0) {
        this.$children[0].start(event)
      }
    },
    handleClick () {
      // 阻止事件冒泡，放置外部控制的时候触发两次 click
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
    'touch-ripple': touchRipple
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-switch {
  position: relative;
  display: inline-block;
  height: 24px;
  line-height: 24px;
  cursor: pointer;
  user-select: none;
  input[type="checkbox"] {
    display: none;
    &:checked {
      + .mu-switch-wrapper {
        .mu-switch-track{
          background-color: fade(@primaryColor, 50%);
        }
        .mu-switch-thumb{
          background-color: @primaryColor;
          color: @primaryColor;
          transform: translate3d(18px, 0, 0);
        }
      }

    }
  }
  &.disabled {
    input[type="checkbox"]:checked{
      + .mu-switch-wrapper {
        .mu-switch-track{
          background-color: @lighterPrimaryColor;
        }
        .mu-switch-thumb{
          background-color: @grey300;
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

.mu-switch-wrapper{
  display: flex;
  width: 100%;
  height: 24px;
  align-items: center;
  justify-content: space-between;
}

.mu-switch-container{
  width: 38px;
  padding: 4px 0px 4px 2px;
  position: relative;
  margin-right: 8px;
  transition: all 450ms @easeOutFunction;
  .mu-switch.label-left &{
    margin-right: 0;
    margin-left: 8px;
  }
  .mu-switch.no-label &{
    margin-left: 0;
    margin-right: 0;
  }
}

.mu-switch-label {
  color: @textColor;
  .mu-switch.disabled & {
    color: @disabledColor;
  }
}

.mu-switch-track {
  width: 100%;
  height: 14px;
  border-radius: 30px;
  background-color: @lighterPrimaryColor;
  transition: all 450ms @easeOutFunction;
  .mu-switch.disabled & {
    background-color: @lighterPrimaryColor;
  }
}

.mu-switch-thumb {
  position: absolute;
  top: 1px;
  left: 0px;
  width: 20px;
  height: 20px;
  line-height: 24px;
  color: @textColor;
  background-color: @darkerAccentColor;
  border-radius: 50%;
  .depth(1);
  transition: all 450ms @easeOutFunction;
  backface-visibility: hidden;
  .mu-switch.disabled & {
    background-color: @grey300;
  }
}

.mu-switch-ripple-wrapper {
  height: 200%;
  width: 200%;
  top: -10px;
  left: -10px;
}
</style>
