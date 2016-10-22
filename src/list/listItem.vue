<template>
  <div>
    <abstract-button @click.native="handlerClick"  containerElement="div"
      :href="href"
      class="mu-item-wrapper" :class="{'active': active}" :wrapperStyle="itemStyle" :centerRipple="false">
      <div style="position:relative;" :class="itemClass">
        <div class="mu-item-left" v-if="showLeft">
          <slot name="left"></slot>
        </div>
        <div class="mu-item-content">
          <div class="mu-item-title-row" v-if="title || afterText">
            <div class="mu-item-title">
               {{title}}
            </div>
            <div class="mu-item-after">
                <slot name="after">
                    {{afterText}}
                </slot>
                <icon value="navigate_next" v-if="link && !toggleNested" class="mu-item-link-icon"></icon>
            </div>
          </div>
          <div class="mu-item-sub-title" v-if="subTitle">
            {{subTitle}}
          </div>
          <div class="mu-item-text" :style="{'max-height': (20 * describeLine) + 'px', '-webkit-line-clamp': describeLine}" v-if="describeText">
            {{describeText}}
          </div>
          <slot></slot>
        </div>
        <div class="mu-item-right" v-if="showRight">
          <icon-button  v-if="toggleNested" :icon="nestedOpen ? 'expand_less' : 'expand_more'"/>
          <slot name="right"></slot>
        </div>
      </div>
    </abstract-button>
    <mu-list v-if="showNested" :nestedLevel="nestedLevel" @change="handlerNestedChange" :value="nestedSelectValue">
      <slot name="nested"></slot>
    </mu-list>
  </div>
</template>

<script>
import icon from '../icon'
import abstractButton from '../internal/abstractButton'
import iconButton from '../iconButton'
import list from './list'
export default {
  name: 'mu-list-item',
  props: {
    href: {
      type: String
    },
    link: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    afterText: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    describeText: {
      type: String,
      default: ''
    },
    describeLine: {
      type: Number,
      default: 2
    },
    initiallyOpen: {
      type: Boolean,
      default: true
    },
    toggleNested: {
      type: Boolean,
      default: false
    },
    value: {}
  },
  data () {
    return {
      nestedOpen: this.initiallyOpen
    }
  },
  computed: {
    itemClass () {
      var arr = ['mu-item']
      if (this.link && !this.toggleNested) arr.push('mu-item-link')
      if (this.showLeft) arr.push('show-left')
      if (this.showRight) arr.push('show-right')
      return arr.join(' ')
    },
    itemStyle () {
      return {
        'margin-left': (18 * (this.nestedLevel - 1)) + 'px'
      }
    },
    nestedLevel () {
      return this.$parent.nestedLevel + 1
    },
    showLeft () {
      return this.$slots && this.$slots.left && this.$slots.left.length > 0
    },
    showRight () {
      return this.toggleNested || (this.$slots && this.$slots.right && this.$slots.right.length > 0)
    },
    showNested () {
      return this.nestedOpen && this.$slots && this.$slots.nested && this.$slots.nested.length > 0
    },
    active () {
      return this.$parent.value && this.value && this.$parent.value === this.value
    },
    nestedSelectValue () {
      return this.$parent.value
    }
  },
  methods: {
    handlerToggleNested () {
      this.nestedOpen = !this.nestedOpen
      this.$emit('toggleNested', this.nestedOpen)
    },
    handlerClick (e) {
      this.$emit('click', e)
      if (this.value) this.$parent.handlerChange(this.value)
      if (this.toggleNested) this.handlerToggleNested()
    },
    handlerNestedChange (value) {
      this.$parent.handlerChange(value)
    }
  },
  components: {
    icon,
    'abstract-button': abstractButton,
    'mu-list': list,
    'icon-button': iconButton
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
  &.active {
    background-color: fade(@textColor, 20%);
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
  &.left-avatar {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

.mu-item-link {
  padding-right: 8px;
  .mu-item-title-row{
    padding-right: 24px;
  }
}

.mu-item-link-icon{
  color: @grey600;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
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
}

.mu-item-right{
  right: 12px;
  justify-content: center;
  .mu-icon-button {
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
  font-size: 14px;
  line-height: 20px;
  max-height: 40px;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  word-break: break-all;
  color: @secondaryTextColor;
}

</style>
