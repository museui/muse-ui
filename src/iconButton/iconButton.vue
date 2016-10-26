<template>
<abstract-button @mousedown.native="handleMouseDown" @click.native="handleClick" @mouseenter.native="show()" @mouseleave.native="hide()"  :href="href" :disabled="disabled" class="mu-icon-button">
  <slot>
    <icon :value="icon" :class="[iconClass]"></icon>
  </slot>
  <tooltip v-if="tooltip" :verticalPosition="verticalPosition" :horizontalPosition="horizontalPosition" :show="tooltipShown" :label="tooltip" :touch="touch"></tooltip>
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
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    disabled: {
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
      tooltipShown: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    },
    show (touchFlag) {
      this.tooltipShown = true
    },
    hide () {
      this.tooltipShown = false
    },
    handleMouseDown (event) {
      event.stopPropagation() // 防止list中使用导致波纹点击重复
    }
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
