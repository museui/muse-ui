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
    active: {
      type: Number,
      default: 0
    },
    value: {}
  },
  data () {
    return {
      renderData: []
    }
  },
  computed: {
    tabLightStyle () {
      let x = this.active * 100
      let len = this.renderData.length
      return {
        width: len > 0 ? (100 / len).toFixed(4) + '%' : '100%',
        transform: 'translate3d(' + x + '%, 0, 0)'
      }
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
