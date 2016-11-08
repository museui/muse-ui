<template>
  <div class="mu-content-block">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'mu-content-block'
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-content-block{
  padding: 8px 16px;
  width: 100%;
  p{
    margin-top: 1em;
    margin-bottom: 1em;
    &:first-child{
      margin-top: 0;
    }
    &:last-child{
      margin-bottom: 0;
    }
  }
}
</style>
