<template>
<abstract-button @touchstart.native="handleStop" @mousedown.native="handleStop" @click="handleClick"
  @hover="handleHover" @hoverExit="handleHoverExit" @keyboardFocus="handleKeyboardFocus"
  :type="type" :href="href" :target="target" :disabled="disabled" :keyboardFocused="keyboardFocused" class="mu-icon-button">
  <slot>
    <icon :value="icon" :class="iconClass"></icon>
  </slot>
  <tooltip v-if="tooltip" :trigger="tooltipTrigger" :verticalPosition="verticalPosition" :horizontalPosition="horizontalPosition" :show="tooltipShown" :label="tooltip" :touch="touch"></tooltip>
</abstract-button>
</template>

<script>
import abstractButton from '../internal/abstractButton'
import icon from '../icon'
import tooltip from '../tooltip'
export default {
  name: 'mu-icon-button',
  props: {
    icon: {
      type: String
    },
    iconClass: {
      type: [String, Array, Object],
      default: ''
    },
    type: {
      type: String
    },
    href: {
      type: String,
      default: ''
    },
    target: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    keyboardFocused: {
      type: Boolean,
      default: false
    },
    tooltip: {
      type: String
    },
    tooltipPosition: {
      type: String,
      default: 'bottom-center'
    },
    touch: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    verticalPosition () {
      const tooltipPosition = this.tooltipPosition.split('-')
      return tooltipPosition[0]
    },
    horizontalPosition () {
      const tooltipPosition = this.tooltipPosition.split('-')
      return tooltipPosition[1]
    }
  },
  data () {
    return {
      tooltipShown: false,
      tooltipTrigger: null
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    },
    handleHover (event) {
      this.tooltipShown = true
      this.$emit('hover', event)
    },
    handleHoverExit (event) {
      this.tooltipShown = false
      this.$emit('hoverExit', event)
      this.$emit('hover-exit', event)
    },
    handleKeyboardFocus (isFocus) {
      this.$emit('keyboardFocus', isFocus)
      this.$emit('keyboard-focus', isFocus)
    },
    handleStop (event) {
      event.stopPropagation() // 防止list中使用导致波纹点击重复
    }
  },
  mounted () {
    this.tooltipTrigger = this.$el
  },
  components: {
    'abstract-button': abstractButton,
    icon,
    tooltip
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-icon-button {
  position: relative;
  display: inline-block;
  overflow: visible;
  line-height: 1;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 24px;
  padding: 12px;
  border: none;
  appearance: none;
  background: none;
  color: inherit;
  text-decoration: none;
  transition-duration: 300ms;
  transition-timing-function: @easeOutFunction;
  transform: translate3d(0, 0, 0);
  .flex-shrink(0);
  margin: 0;
  outline: 0;
  cursor: pointer;
  .mu-circle-ripple{
    color: @textColor;
  }
  &.disabled{
    color: @disabledColor;
    cursor: not-allowed;
  }
}
</style>
