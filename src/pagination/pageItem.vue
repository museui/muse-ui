<template>
    <abstract-button  class="mu-pagination-wrapper" :class="{'circle': isCircle, 'active': isActive}":centerRipple="false" :disabled="disabled"
   @click="handleClick"  @hover="handleHover" @hoverExit="handleHoverExit" containerElement="div">
      <span v-if="icon">{{icon}}</span>
      <span v-if="index">{{index}}</span>
    </abstract-button>
</template>

<script>
import abstractButton from '../internal/abstractButton'
import icon from '../icon'

export default{
  name: 'mu-pageItem',
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
    'abstract-button': abstractButton,
    icon
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-pagination-wrapper {
  font-size: 18px;
  height: 30px;
  width: 30px;
  line-height: 30px;
  transition: all .45s @easeOutFunction;
  color: @textColor;
  position: relative;
  cursor: pointer;
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
    border-radius: 30px;
  }
}
</style>
