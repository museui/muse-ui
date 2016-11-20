<template>
<div>
   <abstract-button  class="mu-menu-item-wrapper" :class="{'active': active}" :href="href" :target="target"
      ref="button" :centerRipple="false"
      :disableFocusRipple="disableFocusRipple" :disabled="disabled"
      @click="handleClick" @keyboardFocus="handleKeyboardFocus" @hover="handleHover" @hoverExit="handleHoverExit"
       containerElement="div">
     <div class="mu-menu-item" :class="{'have-left-icon': leftIcon || inset}">
       <icon :value="leftIcon" :style="{'color': filterColor(leftIconColor)}" class="mu-menu-item-left-icon" />
       <div>
         <slot name="title">
           {{title}}
         </slot>
       </div>
       <div v-if="!rightIcon">
         <span v-if="showAfterText">{{afterText}}</span>
         <slot name="after"></slot>
       </div>
       <icon :value="rightIcon" :style="{'color': filterColor(rightIconColor)}" class="mu-menu-item-right-icon"/>
     </div>
   </abstract-button>
   <popover v-if="openMenu" :anchorOrigin="{ vertical: 'top', horizontal: 'right'}"
   @close="close" :trigger="trigger">
     <mu-menu :desktop="$parent.desktop" popover :maxHeight="$parent.maxHeight" :value="nestedMenuValue">
       <slot></slot>
     </mu-menu>
   </popover>
</div>
</template>

<script>
import abstractButton from '../internal/abstractButton'
import icon from '../icon'
import {getColor, isNotNull} from '../utils'
import popover from '../popover'
import menu from './menu'
export default {
  name: 'mu-menu-item',
  props: {
    href: {
      type: String
    },
    target: {
      type: String
    },
    title: {
      type: String
    },
    afterText: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disableFocusRipple: {
      type: Boolean,
      default: false
    },
    inset: {
      type: Boolean,
      default: false
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
    value: {},
    nestedMenuValue: {}
  },
  computed: {
    showAfterText () {
      return !this.rightIcon && this.afterText && (!this.$slot || !this.$slot.after || this.$slot.after.length === 0)
    },
    active () {
      return isNotNull(this.$parent.value) && isNotNull(this.value) && (this.$parent.value === this.value || (this.$parent.multiple && this.$parent.value.indexOf(this.value) !== -1))
    }
  },
  data () {
    this._isMenuItem = true
    return {
      openMenu: false,
      trigger: null,
      focusState: 'none' // 'none', 'focused', 'keyboard-focused'
    }
  },
  mounted () {
    this.trigger = this.$el
    this.applyFocusState()
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
      this.$parent.handleClick(this)
      this.open()
      if (isNotNull(this.value)) this.$parent.handleChange(this.value)
    },
    filterColor (color) {
      return getColor(color)
    },
    open () {
      this.openMenu = this.$slots && this.$slots.default && this.$slots.default.length > 0
    },
    close () {
      this.openMenu = false
    },
    handleKeyboardFocus (isFocus) {
      this.$emit('keyboardFocus', isFocus)
    },
    handleHover (event) {
      this.$emit('hover', event)
    },
    handleHoverExit (event) {
      this.$emit('hoverExit', event)
    },
    applyFocusState () {
      const button = this.$refs.button
      if (button) {
        const buttonEl = button.$el

        switch (this.focusState) {
          case 'none':
            buttonEl.blur()
            break
          case 'focused':
            buttonEl.focus()
            break
          case 'keyboard-focused':
            button.setKeyboardFocus()
            buttonEl.focus()
            break
        }
      }
    }
  },
  watch: {
    focusState () {
      this.applyFocusState()
    }
  },
  components: {
    'abstract-button': abstractButton,
    icon,
    popover,
    'mu-menu': menu
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-menu-item-wrapper {
  display: block;
  font-size: 16px;
  height: 48px;
  line-height: 48px;
  transition: all .45s @easeOutFunction;
  color: @textColor;
  position: relative;
  cursor: pointer;
  user-select: none;
  .mu-menu-destop & {
    height: 32px;
    line-height: 32px;
    font-size: 15px;
  }
  &.hover {
    background-color: rgba(0, 0, 0, .1);
  }
  &.active {
    color: @accentColor;
  }
  &.disabled {
    color: @disabledColor;
    cursor: not-allowed;
  }
}

.mu-menu-item{
  padding: 0px 16px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .mu-menu-destop & {
    padding: 0 24px;
  }
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
