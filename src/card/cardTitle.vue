<template>
<div class="mu-card-title-container">
  <div class="mu-card-title">
    {{title}}
  </div>
  <div class="mu-card-sub-title">
    {{subTitle}}
  </div>
</div>
</template>

<script>
export default {
  name: 'mu-card-title',
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-card-title-container{
  padding: 16px;
  position: relative;
  .mu-card-title{
    font-size: 24px;
    color: @textColor;
    line-height: 36px;
  }
  .mu-card-sub-title{
    font-size: 14px;
    color: @lightBlack;
    display: block;
  }
}
</style>
