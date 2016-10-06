<template>
<div>
   <abstract-button @click.native="handlerClick" class="mu-menu-item-wrapper" :class="{'active': active}"
    :href="href" :centerRipple="false" :disabled="disabled" containerElement="div">
     <div class="mu-menu-item" :class="{'have-left-icon': leftIcon}">
       <icon :value="leftIcon" :style="{'color': filterColor(leftIconColor)}" class="mu-menu-item-left-icon" />
       <div>
         {{title}}
       </div>
       <div v-if="!rightIcon">
         <span v-if="showAfterText">{{afterText}}</span>
         <slot></slot>
       </div>
       <icon :value="rightIcon" :style="{'color': filterColor(rightIconColor)}" class="mu-menu-item-right-icon"/>
     </div>
   </abstract-button>
</div>
</template>

<script>
import abstractButton from '../internal/abstractButton'
import icon from '../icon'
import {getColor} from '../utils'
export default {
  name: 'mu-menu-item',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String
    },
    title: {
      type: String
    },
    afterText: {
      type: String
    },
    leftIcon: {
      type: String
    },
    leftIconColor: {
      type: String
    },
    rightIconColor: {
      type: String
    },
    rightIcon: {
      type: String
    },
    index: {}
  },
  computed: {
    showAfterText () {
      return !this.rightIcon && this.afterText && (!this.$slot || !this.$slot.default || this.$slot.default.length === 0)
    },
    active () {
      return this.$parent.selectIndex && this.index && (this.$parent.selectIndex === this.index || (this.$parent.multiple && this.$parent.selectIndex.indexOf(this.index) !== -1))
    }
  },
  methods: {
    handlerClick (e) {
      if (this.disabled) return
      this.$emit('click')
      if (this.index) this.$parent.handlerChange(this.index)
    },
    filterColor (color) {
      return getColor(color)
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
.mu-menu-item-wrapper {
  font-size: 16px;
  height: 48px;
  line-height: 48px;
  transition: all .45s @easeOutFunction;
  color: @textColor;
  position: relative;
  cursor: pointer;
  .mu-menu-destop & {
    height: 32px;
    line-height: 32px;
    font-size: 15px;
  }
  &.hover {
    background-color: rgba(0, 0, 0, .1);
  }
  &.active {
    color: @accent1Color;
  }
  &.disabled {
    color: @disabledColor;
    cursor: not-allowed;
  }
}

.mu-menu-item{
  padding: 0px 24px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.have-left-icon{
    padding-left: 72px;
  }
}

.mu-menu-item-left-icon{
  position: absolute;
  top: 0;
  left: 4px;
  margin: 12px;
  color: @grey600;
  .mu-menu-destop & {
    top: 4px;
    left: 24px;
    margin: 0;
  }
}

.mu-menu-item-right-icon{
  position: absolute;
  top: 0;
  right: 4px;
  margin: 12px;
  color: @grey600;
  .mu-menu-destop & {
    top: 4px;
    right: 24px;
    margin: 0;
  }
}
</style>
