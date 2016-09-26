<template>
<div class="mu-card-media">
  <slot></slot>
  <div v-if="title || subTitle" class="mu-card-media-title">
    <div class="mu-card-title" v-if="title">
      {{title}}
    </div>
    <div class="mu-card-sub-title"  v-if="subTitle">
      {{subTitle}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'mu-card-media',
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
.mu-card-media {
  position: relative;
  > img {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    display: block;
    vertical-align: top;
  }
}

.mu-card-media-title {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 16px;
  background-color: @lightBlack;
  .mu-card-title {
    font-size: 24px;
    color: @darkWhite;
    line-height: 36px;
  }
  .mu-card-sub-title {
    color: @lightWhite;
    font-size: 14px;
  }
}
</style>
