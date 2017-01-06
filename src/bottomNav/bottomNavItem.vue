<template>
  <abstract-button :href="href" :disableTouchRipple="shift" class="mu-buttom-item" :class="{'mu-bottom-item-active': active}" :center-ripple="false" wrapperClass="mu-buttom-item-wrapper" @click.native="handleClick">
    <icon v-if="icon" class="mu-bottom-item-icon" :class="iconClass" :value="icon"></icon>
    <slot></slot>
    <span v-if="title" class="mu-bottom-item-text" :class="titleClass">{{title}}</span>
  </abstract-button>
</template>

<script>
import abstractButton from '../internal/abstractButton'
import icon from '../icon'
import {isNotNull} from '../utils'
export default {
  name: 'mu-bottom-nav-item',
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconClass: {
      type: [String, Object, Array]
    },
    title: {
      type: String,
      default: ''
    },
    titleClass: {
      type: [String, Object, Array]
    },
    href: {
      type: String
    },
    value: {}
  },
  data () {
    return {
      bottomNav: null
    }
  },
  created () {
    this.isBottomNavItem = true
  },
  computed: {
    active () {
      return this.bottomNav && isNotNull(this.value) && this.bottomNav.value === this.value
    },
    shift () {
      return this.bottomNav && this.bottomNav.shift
    }
  },
  methods: {
    handleClick () {
      if (this.bottomNav && this.bottomNav.handleItemClick) this.bottomNav.handleItemClick(this.value)
    }
  },
  mounted () {
    let children = this.$parent.$children
    for (let i = 0; i < children.length; i++) {
      if (children[i].$el === this.$el) {
        this.index = i
        break
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
.mu-buttom-item {
  flex: 1;
  min-width: 80px;
  max-width: 168px;
  position: relative;
  height: 100%;
  color: @secondaryTextColor;
  padding: 0;
  background: none;
  appearance: none;
  text-decoration: none;
  border: none;
  outline: none;
  transition: all .4s @easeInOutFunction;
  user-select: none;
  .mu-bottom-nav-shift & {
    color: fade(@alternateTextColor, 70%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px 12px 10px;
    min-width: 56px;
    max-width: 168px;
  }
}
.mu-buttom-item-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.mu-bottom-item-active {
  .mu-bottom-item-text{
    font-size: 14px;
  }
  .mu-bottom-nav-shift & {
    flex: 1.7;
    min-width: 96px;
    max-width: 168px;
  }
}

.mu-bottom-item-text{
  font-size: 12px;
  transition: all .4s @easeOutFunction, color 0.3s, font-size 0.3s;
  backface-visibility: hidden;
  .mu-bottom-item-active &{
    color: @primaryColor;
  }
  .mu-bottom-nav-shift .mu-bottom-item-active &{
    color: @alternateTextColor;
  }
  .mu-bottom-nav-shift & {
    opacity: 0;
    transform: scale(1) translate3d(0, 6px, 0);
  }
  .mu-bottom-nav-shift .mu-bottom-item-active & {
    transform: scale(1) translate3d(0, 2px, 0);
    opacity: 1;
  }
}
.mu-bottom-item-icon {
  transition: all .45s @easeOutFunction;
  backface-visibility: hidden;
  width: 24px;
  .mu-bottom-item-active &{
    color: @primaryColor;
  }
  .mu-bottom-nav-shift .mu-bottom-item-active & {
    color: @alternateTextColor;
  }
  .mu-bottom-nav-shift & {
    margin: auto;
    transform: translate3d(0, 8px, 0);
  }
  .mu-bottom-nav-shift .mu-bottom-item-active & {
    transform: scale(1) translateZ(0);
  }
}
</style>
