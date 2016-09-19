<template>
  <em class="mu-badge" :style="style" :class="{'mu-badge-circle': circle, 'mu-badge-primary': primary, 'mu-badge-secondary': secondary}">
    <slot>
      {{content}}
    </slot>
  </em>
</template>

<script>
import {getColor} from '../utils'
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
    }
  },
  computed: {
    style () {
      return {
        'backgroud-color': getColor(this.color)
      }
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-badge{
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 6px;
  line-height: 1.5;
  font-size: 12px;
  font-style: normal;
  background-color: @primary3Color;
  color: @alternateTextColor;
  border-radius: 3px;
  overflow: hidden;
}

.mu-badge-circle {
  border-radius: 50%;
  padding: 0;
  width: 24px;
  height: 24px;
  overflow: hidden;
}
.mu-badge-primary {
  background-color: @primary1Color;
}

.mu-badge-secondary {
  background-color: @accent1Color;
}

</style>
