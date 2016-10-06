<template>
<div class="mu-appbar">
  <div class="left">
    <slot name="left"></slot>
  </div>
  <div class="center">
    <slot>
      <h1 class="mu-appbar-title">{{title}}</h1>
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
  background-color: @primary1Color;
  font-size: 24px;
  height: @desktopToolbarHeight;
  width: 100%;
  padding: 0 8px;
  .flex-shrink(0);
  z-index: 100;
  > .left,
  > .right{
    .flex-shrink(0);
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  > .center{
    flex: 1;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
  }
}

.mu-appbar-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  font-size: 20px;
  font-weight: 400;
}

@media (min-width: 480px) {
  .mu-appbar {
    height: @desktopKeylineIncrement;
    font-size: 24px;
  }
  .mu-appbar-title {
    font-size: 24px;
  }
}
</style>
