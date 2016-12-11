<template>
<div class="mu-card-header">
  <slot name="avatar"></slot>
  <div class="mu-card-header-title" v-if="title || subTitle">
    <div class="mu-card-title" :class="titleClass">
      {{title}}
    </div>
    <div class="mu-card-sub-title" :class="subTitleClass">
      {{subTitle}}
    </div>
  </div>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'mu-card-header',
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
.mu-card-header {
  padding: 16px;
  font-weight: 500;
  position: relative;
  white-space: nowrap;
  .mu-avatar {
    margin-right: 16px;
  }
}

.mu-card-header-title{
  display: inline-block;
  vertical-align: top;
  white-space: normal;
  padding-right: 90px;
  .mu-card-title{
    font-size: 15px;
    color: fade(@textColor, 87%);
  }
  .mu-card-sub-title{
    font-size: 14px;
    color: fade(@textColor, 57%);
  }
}
</style>
