<template>
  <div>
    <abstract-button @click="handleClick"  containerElement="div"
      :href="href" :disabled="disabled" :disableFocusRipple="disableRipple"  :disableTouchRipple="disableRipple" :target="target"
      :to="to" :tag="tag" :activeClass="activeClass" :event="event" :exact="exact" :append="append" :replace="replace"
      @keyboardFocus="handleKeyboardFocus" @hover="handleHover" @hoverExit="handleHoverExit"
      class="mu-item-wrapper" :wrapperStyle="itemStyle" :style="disabled ? itemStyle : {}" :centerRipple="false">
      <div :class="itemClass">
        <div class="mu-item-left" v-if="showLeft">
          <slot name="left"></slot>
          <slot name="leftAvatar"></slot>
        </div>
        <div class="mu-item-content">
          <div class="mu-item-title-row" v-if="showTitleRow">
            <div class="mu-item-title" :class="titleClass">
               <slot name="title">
                 {{title}}
               </slot>
            </div>
            <div class="mu-item-after" :class="afterTextClass">
                <slot name="after">
                  {{afterText}}
                </slot>
            </div>
          </div>
          <div class="mu-item-text" :style="textStyle" :class="describeTextClass" v-if="showDescribe">
            <slot name="describe">
              {{describeText}}
            </slot>
          </div>
          <slot></slot>
        </div>
        <div class="mu-item-right" v-if="showRight">
          <icon-button @click.stop="handleToggleNested" @mousedown.native="stop" @touchstart.native="stop"  v-if="toggleNested">
            <svg v-if="nestedOpen" class="mu-item-svg-icon" :class="toggleIconClass" viewBox="0 0 24 24">
              <path d="M6 15L12 9L18 15"/>
            </svg>
            <svg v-if="!nestedOpen" class="mu-item-svg-icon" :class="toggleIconClass" viewBox="0 0 24 24">
              <path d="M6 9L12 15L18 9"/>
            </svg>
          </icon-button>
          <slot name="right"></slot>
          <slot name="rightAvatar"></slot>
        </div>
      </div>
    </abstract-button>
    <expand-transition>
      <mu-list v-if="showNested" :class="nestedListClass" :nestedLevel="nestedLevel" @change="handleNestedChange" :value="nestedSelectValue">
        <slot name="nested"></slot>
      </mu-list>
    </expand-transition>
  </div>
</template>

<script>
import abstractButton from '../internal/abstractButton'
import routerMixin from '../internal/routerMixin'
import iconButton from '../iconButton'
import list from './list'
import expandTransition from '../internal/expandTransition'
import {isNotNull} from '../utils'
export default {
  name: 'mu-list-item',
  mixins: [routerMixin],
  props: {
    href: {
      type: String
    },
    target: {
      type: String
    },
    title: {
      type: String,
      default: ''
    },
    titleClass: {
      type: [String, Object, Array]
    },
    afterText: {
      type: String,
      default: ''
    },
    afterTextClass: {
      type: [String, Object, Array]
    },
    describeText: {
      type: String,
      default: ''
    },
    describeTextClass: {
      type: [String, Object, Array]
    },
    describeLine: {
      type: Number,
      default: 2
    },
    inset: {
      type: Boolean,
      default: false
    },
    nestedListClass: {
      type: [String, Object, Array]
    },
    open: {
      type: Boolean,
      default: true
    },
    toggleNested: {
      type: Boolean,
      default: false
    },
    toggleIconClass: {
      type: [String, Object, Array]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disableRipple: {
      type: Boolean,
      default: false
    },
    value: {}
  },
  data () {
    return {
      nestedOpen: this.open
    }
  },
  computed: {
    hasAvatar () {
      return this.$slots && ((this.$slots.leftAvatar && this.$slots.leftAvatar.length > 0) || (this.$slots.rightAvatar && this.$slots.rightAvatar.length > 0))
    },
    nestedLevel () {
      return this.$parent.nestedLevel + 1
    },
    showLeft () {
      return this.$slots && ((this.$slots.left && this.$slots.left.length > 0) || (this.$slots.leftAvatar && this.$slots.leftAvatar.length > 0))
    },
    showRight () {
      return this.toggleNested || (this.$slots && ((this.$slots.right && this.$slots.right.length > 0) || (this.$slots.rightAvatar && this.$slots.rightAvatar.length > 0)))
    },
    showTitleRow () {
      return this.title || (this.$slots && this.$slots.title && this.$slots.title.length > 0) ||
              this.afterText || (this.$slots && this.$slots.after && this.$slots.after.length > 0)
    },
    showDescribe () {
      return this.describeText || (this.$slots && this.$slots.describe && this.$slots.describe.length > 0)
    },
    itemClass () {
      var arr = ['mu-item']
      if (this.showLeft || this.inset) arr.push('show-left')
      if (this.showRight) arr.push('show-right')
      if (this.hasAvatar) arr.push('has-avatar')
      if (this.selected) arr.push('selected')
      return arr.join(' ')
    },
    itemStyle () {
      return {
        'margin-left': (18 * (this.nestedLevel - 1)) + 'px'
      }
    },
    textStyle () {
      return {
        'max-height': (18 * this.describeLine) + 'px',
        '-webkit-line-clamp': this.describeLine
      }
    },
    showNested () {
      return this.nestedOpen && this.$slots && this.$slots.nested && this.$slots.nested.length > 0
    },
    selected () {
      return isNotNull(this.$parent.value) && isNotNull(this.value) && this.$parent.value === this.value
    },
    nestedSelectValue () {
      return this.$parent.value
    }
  },
  methods: {
    handleToggleNested () {
      this.nestedOpen = !this.nestedOpen
      this.$emit('toggleNested', this.nestedOpen)
      this.$emit('toggle-nested', this.nestedOpen) // 兼容 html 里的用法
    },
    handleClick (e) {
      this.$emit('click', e)
      if (this.$parent.handleItemClick) this.$parent.handleItemClick(this)
      if (isNotNull(this.value)) this.$parent.handleChange(this.value)
      if (this.toggleNested) this.handleToggleNested()
    },
    handleKeyboardFocus (isFocus) {
      this.$emit('keyboardFocus', isFocus)
      this.$emit('keyboard-focus', isFocus)
    },
    handleHover (event) {
      this.$emit('hover', event)
    },
    handleHoverExit (event) {
      this.$emit('hoverExit', event)
      this.$emit('hover-exit', event)  // 兼容 html 里的用法
    },
    handleNestedChange (value) {
      this.$parent.handleChange(value)
    },
    stop (e) {
      e.stopPropagation()
    }
  },
  watch: {
    open (val, oldVal) {
      if (val === oldVal) return
      this.nestedOpen = val
    }
  },
  components: {
    'abstract-button': abstractButton,
    'mu-list': list,
    'icon-button': iconButton,
    'expand-transition': expandTransition
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-item-wrapper {
  display: block;
  color: inherit;
  position: relative;
  outline: none;
  cursor: pointer;
  &.hover {
    background-color: fade(@textColor, 10%);
  }
  &.disabled{
    cursor: default;
  }
}

.mu-item {
  min-height: 48px;
  display: flex;
  padding: 16px 16px;
  color: @textColor;
  position: relative;
  &.show-left{
    padding-left: 72px;
  }
  &.show-right{
    padding-right: 56px;
  }
  &.has-avatar {
    min-height: 56px;
  }
  &.selected {
    color: @primaryColor;
  }
}

.mu-item-toggle-button {
  position: absolute;
  color: @textColor;
  position: absolute;
  right: 4px;
  top: 0;
}

.mu-item-right,
.mu-item-left{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 40px;
  height: 100%;
  position: absolute;
  color: @grey600;
  top: 0;
  max-height: 72px;
}

.mu-item-left{
  left: 16px;
  .mu-item.selected &{
    color: @primaryColor;
  }
}

.mu-item-right{
  right: 12px;
  justify-content: center;
  > .mu-icon-button {
    align-self: flex-start;
  }
  > .mu-icon-menu {
    align-self: flex-start;
  }
}

.mu-item-content{
  width: 100%;
  align-self: center;
}

.mu-item-title-row{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  line-height: 1;
}

.mu-item-title{
  flex: 1;
  display: block;
  font-size: 16px;
  max-width: 100%;
}

.mu-item-sub-title {
  line-height: 1;
  margin-top: 4px;
}
.mu-item-after{
  margin-left: auto;
  color: @secondaryTextColor;
  display: flex;
  align-items: center;
}

.mu-item-text{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  position: relative;
  overflow: hidden;
  font-size: 14px;
  line-height: 18px;
  margin-top: 4px;
  max-height: 40px;
  max-width: 100%;
  text-overflow: ellipsis;
  word-break: break-all;
  color: @secondaryTextColor;
}

.mu-item-svg-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  stroke-width: 2;
  fill: none;
  stroke: currentColor;
  user-select: none;
}

</style>
