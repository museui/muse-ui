<template>
<div class="mu-appbar" :class="['mu-paper-' + zDepth ]">
  <div class="left">
    <slot name="left"></slot>
  </div>
  <div class="mu-appbar-title" :class="titleClass">
    <slot>
      <span>{{title}}</span>
    </slot>
  </div>
  <div class="right">
    <slot name="right"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'mu-appbar',
  props: {
    title: {
      type: String,
      default: ''
    },
    titleClass: {
      type: [String, Array, Object]
    },
    zDepth: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-appbar {
  display: flex;
  align-self: flex-start;
  justify-content: flex-start;
  align-items: center;
  color: @alternateTextColor;
  background-color: @primaryColor;
  height: 56px;
  padding: 0 8px;
  width: 100%;
  .flex-shrink(0);
  z-index: 100;
  > .left,
  > .right{
    .flex-shrink(0);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
  }
  .mu-icon-button {
    color: inherit;
  }
  .mu-flat-button {
    color: inherit;
    height: 100%;
    line-height: 100%;
    min-width: auto;
  }
}

.mu-appbar-title {
  flex: 1;
  padding-left: 8px;
  padding-right: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 20px;
  font-weight: 400;
  line-height: 56px;
}

@media (min-width: 480px) {
  .mu-appbar-title {
    line-height: 64px;
  }
  .mu-appbar {
    height: 64px;
  }
  .mu-appbar-title {
    font-size: 24px;
  }
}
</style>
