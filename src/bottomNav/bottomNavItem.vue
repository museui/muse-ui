<template>
  <abstract-button :disableTouchRipple="shift" class="mu-buttom-item" :class="{'mu-bottom-item-active': active}" :center-ripple="false" wrapperClass="mu-buttom-item-wrapper" @click.native="handlerClick">
    <icon :value="icon" class="mu-bottom-item-icon"></icon>
    <span class="mu-bottom-item-text">{{title}}</span>
  </abstract-button>
</template>

<script>
import abstractButton from '../internal/abstractButton'
import icon from '../icon'
export default {
  name: 'mu-bottom-nav-item',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
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
      return this.bottomNav && this.value && this.bottomNav.value === this.value
    },
    shift () {
      return this.bottomNav && this.bottomNav.shift
    }
  },
  methods: {
    handlerClick () {
      if (this.bottomNav && this.bottomNav.handlerChange) this.bottomNav.handlerChange(this.value)
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
  color: fade(@textColor, 54%);
  padding: 0;
  background: none;
  appearance: none;
  border: none;
  outline: none;
  transition: all .4s @easeInOutFunction;
  .mu-bottom-nav-shift & {
    color: fade(@alternateTextColor, 70%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px 12px 10px;
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
  color: @primary1Color;
  .mu-bottom-item-text{
    font-size: 14px;
  }
  .mu-bottom-nav-shift & {
    color: @alternateTextColor;
    flex: 1 1 72px;
  }
}

.mu-bottom-item-text{
  font-size: 12px;
  transition: all .4s @easeOutFunction, color 0.3s, font-size 0.3s;
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
  transition: all 450ms @easeOutFunction 0ms;
  .mu-bottom-nav-shift & {
    margin: auto;
    transform: translate3d(0, 8px, 0);
  }
  .mu-bottom-nav-shift .mu-bottom-item-active & {
    transform: scale(1) translateZ(0);
  }
}
</style>
