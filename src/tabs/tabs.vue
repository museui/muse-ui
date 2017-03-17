<template>
  <div class="mu-tabs">
    <slot></slot>
    <span class="mu-tab-link-highlight" ref="highlight" :class="lineClass"></span>
  </div>
</template>

<script>
export default {
  name: 'mu-tabs',
  props: {
    lineClass: {
      type: [String, Object, Array]
    },
    value: {}
  },
  data () {
    return {
      tabLightStyle: {
        width: '100%',
        transform: 'translate3d(0, 0, 0)'
      }
    }
  },
  updated () {
    this.setTabLightStyle()
  },
  methods: {
    handleTabClick (value, tab) {
      if (this.value !== value) {
        this.$emit('change', value)
      }
    },
    getActiveIndex () {
      if (!this.$children || this.$children.length === 0) return -1
      let activeIndex = -1
      this.$children.forEach((tab, i) => {
        if (tab.value === this.value) {
          activeIndex = i
          return false
        }
      })
      return activeIndex
    },
    setTabLightStyle () {
      const x = this.getActiveIndex() * 100
      const len = this.$children.length
      const el = this.$refs.highlight
      el.style.width = len > 0 ? (100 / len).toFixed(4) + '%' : '100%'
      el.style.transform = 'translate3d(' + x + '%, 0, 0)'
    }
  },
  mounted () {
    this.setTabLightStyle()
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-tabs{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: @primaryColor;
  color: #FFF;
  text-align: center;
  position: relative;
  z-index: 100;
  width: 100%;
}

.mu-tab-link-highlight{
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  background-color: @accentColor;
  transition: transform .3s;
  backface-visibility: hidden;
}

</style>
