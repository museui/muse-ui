<template>
<button class="mu-year-button" @click.stop="handleClick" @mouseenter="handleHover" @mouseleave="handleHoverExit" :class="{'selected': selected, 'hover': hover}">
  <span class="mu-year-button-text">{{year}}</span>
</button>
</template>

<script>
import {isPc} from '../utils'
export default {
  props: {
    year: {
      type: [String, Number]
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      hover: false
    }
  },
  mounted () {
    if (this.selected) {
      this.$parent.scrollToSelectedYear(this.$el)
    }
  },
  methods: {
    handleHover () {
      if (isPc()) this.hover = true
    },
    handleHoverExit () {
      this.hover = false
    },
    handleClick (event) {
      this.$emit('click', event)
    }
  },
  watch: {
    selected (val) {
      if (val) this.$parent.scrollToSelectedYear(this.$el)
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-year-button{
  position: relative;
  display: block;
  background: none;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  margin: 0px auto;
  padding: 0px;
  border: 10px;
  font-size: 14px;
  font-weight: inherit;
  text-align: center;
  line-height: inherit;
}

.mu-year-button-text {
  align-self: center;
  color: @textColor;
  font-size: 17px;
  font-weight: 400;
  position: relative;
  top: -1px;
  .mu-year-button.selected &{
    color: @primaryColor;
    font-size: 26px;
    font-weight: 500;
  }
  .mu-year-button.hover &{
    color: @primaryColor;
  }
}
</style>
