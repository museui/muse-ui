<template>
<div class="mu-card-title-container">
  <div class="mu-card-title" :class="titleClass">
    {{title}}
  </div>
  <div class="mu-card-sub-title" :class="subTitleClass">
    {{subTitle}}
  </div>
</div>
</template>

<script>
export default {
  name: 'mu-card-title',
  props: {
    title: {
      type: String
    },
    titleClass: {
      type: [String, Array, Object]
    },
    subTitle: {
      type: String
    },
    subTitleClass: {
      type: [String, Array, Object]
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
