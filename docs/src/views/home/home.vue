<template>
<div>
  <div class="mu-banner">
    <img src="../../assets/images/bg.png" width="100%" height="100%" class="mu-banner-image">
    <div class="mu-logo">
      <img src="../../assets/images/icon_logo.png" alt="">
    </div>
    <h1 class="mu-banner-title">
      Muse-UI
    </h1>
    <h2 class="mu-banner-sub-title">
      基于 Vue 2.0 优雅的 Material Design UI 组件库
    </h2>
    <div class="mu-banner-actions">
      <mu-button raised to="/install" text-color="primary" class="mu-banner-button">GET STARTED</mu-button>
    </div>
  </div>
  <mu-row>
    <mu-col lg="4" span="12" class="mu-feature-item">
      <img src="../../assets/images/img1.png" alt="">
      <h3 class="mu-feature-item-title">组件丰富</h3>
      <div class="mu-feature-item-desc">
        Muse UI 基本实现了 Material Design 设计规范类的所有组件，另外还开发许多的功能性的组件
      </div>
    </mu-col>
    <mu-col lg="4" span="12" class="mu-feature-item">
      <img src="../../assets/images/img2.png" alt="">
      <h3 class="mu-feature-item-title">可定制</h3>
      <div class="mu-feature-item-desc">
        Muse UI 使用less文件，所有的颜色都有一个变量维护，通过编写 less 文件完成自定义主题，另外组件内部也提供一些修改效果的参数
      </div>
    </mu-col>
    <mu-col lg="4" span="12" class="mu-feature-item">
      <img src="../../assets/images/img1.png" alt="">
      <h3 class="mu-feature-item-title">基于 Vue 2.0</h3>
      <div class="mu-feature-item-desc">
        Muse UI 基于 Vue2.0 开发，Vue2.0是当下最快的前端框架之一，小巧，api友好，可用于开发的复杂单页应用
      </div>
    </mu-col>
  </mu-row>
</div>
</template>
<script>
export default {
  name: 'home'
};
</script>
<style lang="less">
@import "../../../../lib/styles/vars.less";
.mu-banner{
  z-index: 100;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: @alternateTextColor;
  background-color: @primaryColor;
}
.mu-banner-image {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}
.mu-logo {
  width: 120px;
  height: 120px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 80px;
    height: 80px;
  }
}
.mu-banner-title {
  margin-top: 32px;
  margin-bottom: 12px;
  font-weight: 300;
  font-size: 48px;
  line-height: 1;
  text-align: center;
}

.mu-banner-sub-title {
  margin: 0;
  margin-bottom: 16px;
  padding-left: 32px;
  padding-right: 32px;
  font-weight: 300;
  text-align: center;
}

.mu-banner-actions{
  text-align: center;
  font-size: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .mu-raised-button {
    font-size: 15px;
    margin-left: 12px;
  }
}
.mu-feature-item {
  height: 400px;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid @borderColor;
  > img {
    width: 300px;
  }
}
.mu-feature-item-title {
  font-size: 21px;
  line-height: 24px;
  font-weight: 500;
  margin-top: 12px;
  margin-bottom: 12px;
}
.mu-feature-item-desc {
  min-width: 375px;
  max-width: 500px;
  font-size: 16px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
}
</style>
