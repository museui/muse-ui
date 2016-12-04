<template>
  <div class="mu-badge-container">
    <slot></slot>
    <em class="mu-badge" :style="badgeStyle" :class="badgeInternalClass">
      <slot name="content">
        {{content}}
      </slot>
    </em>
  </div>
</template>

<script>
import {getColor, convertClass} from '../utils'
export default {
  name: 'mu-badge',
  props: {
    content: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    primary: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    badgeClass: {
      type: [String, Object, Array]
    }
  },
  computed: {
    badgeStyle () {
      return {
        'background-color': getColor(this.color)
      }
    },
    badgeInternalClass () {
      const {circle, primary, secondary, badgeClass} = this
      const isFloat = this.$slots && this.$slots.default && this.$slots.default.length > 0
      const classNames = []
      if (circle) classNames.push('mu-badge-circle')
      if (primary) classNames.push('mu-badge-primary')
      if (secondary) classNames.push('mu-badge-secondary')
      if (isFloat) classNames.push('mu-badge-float')
      return classNames.concat(convertClass(badgeClass))
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-badge-container{
  display: inline-block;
  position: relative;
}
.mu-badge{
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 6px;
  line-height: 1.5;
  font-size: 12px;
  font-style: normal;
  background-color: @lighterPrimaryColor;
  color: @alternateTextColor;
  border-radius: 3px;
  overflow: hidden;
}

.mu-badge-float {
  position: absolute;
  top: -12px;
  right: -12px;
}
.mu-badge-circle {
  border-radius: 50%;
  padding: 0;
  width: 24px;
  height: 24px;
  overflow: hidden;
}
.mu-badge-primary {
  background-color: @primaryColor;
}

.mu-badge-secondary {
  background-color: @accentColor;
}

</style>
