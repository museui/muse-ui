<template>
<touch-ripple class="mu-tab-link" :center-ripple="false" :class="{'mu-tab-active': active}" @click.native="tabClick">
  <slot>
    <icon :value="icon"/>
    <div class="mu-tab-text" :class="{'has-icon': icon}" v-if="title">{{title}}</div>
  </slot>
</touch-ripple>
</template>

<script>
import touchRipple from '../internal/touchRipple'
import icon from '../icon'
export default {
  name: 'mu-tab',
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
  computed: {
    active () {
      return this.value && this.$parent.value === this.value
    }
  },
  methods: {
    tabClick (e) {
      if (this.$parent.handleTabClick) this.$parent.handleTabClick(this.value, this)
      this.$emit('click', e)
    }
  },
  watch: {
    active (val, oldVal) {
      if (val === oldVal) return
      if (val) this.$emit('active')
    }
  },
  components: {
    'touch-ripple': touchRipple,
    icon
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-tab-link{
  min-height: 48px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 14px;
  flex: 1;
  color: inherit;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: normal;
  align-items: center;
  color: fade(@alternateTextColor, 70%);
  transition: all .45s @easeInOutFunction;
  cursor: pointer;
}
.mu-tab-active{
  color: @alternateTextColor;
}
.mu-tab-text{
  &.has-icon {
    margin-top: 8px;
  }
}
</style>
