<template>
<div class="mu-page">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'mu-page'
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-page{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: @canvasColor;
  justify-content: center;
  align-items: flex-start;
  > .mu-paper {
    width: 100%;
  }
}
</style>
