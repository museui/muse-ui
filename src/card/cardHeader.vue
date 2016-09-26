<template>
<div class="mu-card-header">
  <slot name="avatar"></slot>
  <div class="mu-card-header-title" v-if="title || subTitle">
    <div class="mu-card-title">
      {{title}}
    </div>
    <div class="mu-card-sub-title">
      {{subTitle}}
    </div>
  </div>
  <slot><slot>
</div>
</template>

<script>
export default {
  name: 'mu-card-header',
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
