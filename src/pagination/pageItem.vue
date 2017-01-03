<template>
<abstract-button  class="mu-pagination-item" wrapperClass="mu-pagination-item-wrapper" :class="{'circle': isCircle, 'active': isActive}":centerRipple="false" :disabled="disabled"
  @click="handleClick"  @hover="handleHover" @hoverExit="handleHoverExit" containerElement="div">
  <span v-if="index">{{index}}</span>
  <slot></slot>
</abstract-button>
</template>

<script>
import abstractButton from '../internal/abstractButton'
export default{
  props: {
    icon: {
      type: String
    },
    index: {
      type: Number
    },
    isCircle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    },
    identifier: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleHover (event) {
      this.$emit('hover', event)
    },
    handleHoverExit (event) {
      this.$emit('hoverExit', event)
      this.$emit('hover-exit', event)
    },
    handleClick () {
      if (this.index) {
        this.$emit('click', this.index)
      } else {
        this.$emit('click', this.identifier)
      }
    }
  },
  components: {
    'abstract-button': abstractButton
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-pagination-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  height: 32px;
  min-width: 32px;
  padding-left: 8px;
  padding-right: 8px;
  line-height: 32px;
  margin: 0 8px;
  transition: all .45s @easeOutFunction;
  color: @textColor;
  position: relative;
  cursor: pointer;
  border-radius: 2px;
  &.hover {
    background-color: rgba(0, 0, 0, .1);
  }
  &.active {
    color: @white;
    background-color: @primaryColor;
  }
  &.disabled {
    color: @disabledColor;
    cursor: not-allowed;
  }
  &.circle{
    border-radius: 50%;
    .mu-ripple-wrapper {
      border-radius: 50%;
    }
  }
}

.mu-pagination-item-wrapper {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: center;
}
</style>
