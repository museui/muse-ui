<template>
  <div @mouseenter="onMouseenter" @mouseup="onMouseup" @mousedown="onMousedown"
      @mouseleave="onMouseleave" @touchstart="onTouchstart" @click= "handlerClick"
      @touchend="onTouchend" @touchcancel="onTouchend" :class="classNames" class="mu-chip">
    <slot></slot>
    <mu-icon value="cancel" v-if="showDelete && !disabled" @click.stop="handlerDelete" class="mu-chip-delete-icon" />
  </div>
</template>

<script>
import icon from '../icon'
export default {
  name: 'mu-chip',
  props: {
    showDelete: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      focus: false,
      hover: false
    }
  },
  computed: {
    classNames () {
      if (this.disabled) return null
      return this.focus ? ['hover', 'active'] : this.hover ? ['hover'] : null
    }
  },
  methods: {
    onMouseenter () {
      this.hover = true
    },
    onMouseleave () {
      this.hover = false
    },
    onMousedown () {
      this.focus = true
    },
    onMouseup () {
      this.focus = false
    },
    onTouchstart () {
      this.focus = true
    },
    onTouchend () {
      this.focus = false
    },
    handlerDelete () {
      this.$emit('delete')
    },
    handlerClick () {
      if (!this.disabled) this.$emit('click')
    }
  },
  components: {
    icon
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-chip {
  border-radius: 16px;
  line-height: 32px;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  background-color: darken(@canvasColor, 12%);
  color: fade(@textColor, 87%);
  padding: 0 12px;
  cursor: default;
  .mu-avatar:first-child{
    margin-left: -12px;
    margin-right: 4px;
  }
  &.active {
    box-shadow: 0 1px 6px fade(@fullBlack, 12%), 0 1px 4px fade(@fullBlack, 12%);
  }
  &.hover{
    .mu-chip-delete-icon{
      color: fade(fade(@textColor, 26%), 40%);
    }
    background-color: rgb(206, 206, 206);
    cursor: pointer;
  }
}
.mu-chip-delete-icon{
  margin-right: -8px;
  margin-left: 4px;
  color: fade(@textColor, 26%);
}
</style>
