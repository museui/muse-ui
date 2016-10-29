<template>
  <div class="mu-tabs">
    <slot></slot>
    <span class="mu-tab-link-highlight" :style="tabLightStyle"></span>
  </div>
</template>

<script>
export default {
  name: 'mu-tabs',
  props: {
    value: {}
  },
  computed: {
    activeIndex () {
      if (!this.$children || this.$children.length === 0) return -1
      var index = -1
      this.$children.forEach((tab, i) => {
        if (tab.value === this.value) {
          index = i
          return false
        }
      })
      return index
    },
    tabLightStyle () {
      let x = this.activeIndex * 100
      let len = this.$children.length
      return {
        width: len > 0 ? (100 / len).toFixed(4) + '%' : '100%',
        transform: 'translate3d(' + x + '%, 0, 0)'
      }
    }
  },
  methods: {
    handleTabClick (value, tab) {
      if (this.value !== value) {
        this.$emit('change', value)
      }
      this.$emit('tabClick', tab)
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-tabs{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: @primary1Color;
  color: #FFF;
  text-align: center;
  position: relative;
  width: 100%;
  z-index: 100;
}

.mu-tab-link-highlight{
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  background-color: @accent1Color;
  transition: all .3s;
  backface-visibility: hidden;
}

</style>
