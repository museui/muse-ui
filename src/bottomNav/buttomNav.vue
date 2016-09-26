<template>
  <div class="mu-bottom-nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'mu-bottom-nav',
  props: {
    active: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      renderData: []
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-bottom-nav{
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: @canvasColor;
  text-align: center;
  font-size: 18px;
  position: relative;
  width: 100%;
  z-index: 100;
  .depth(1);
}
</style>
