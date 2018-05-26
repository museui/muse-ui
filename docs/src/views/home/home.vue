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
      <mu-button raised :to="`/${locale}/installation`" class="mu-banner-button">快速上手</mu-button>
    </div>
  </div>
  <mu-row>
    <mu-col lg="4" span="12" class="mu-feature-item">
      <img src="../../assets/images/img1.png" alt="">
      <h3 class="mu-feature-item-title">组件丰富</h3>
      <div class="mu-feature-item-desc">
        Muse UI 拥有40多个UI 组件，用于适应不同业务环境。
      </div>
    </mu-col>
    <mu-col lg="4" span="12" class="mu-feature-item">
      <img src="../../assets/images/img2.png" alt="">
      <h3 class="mu-feature-item-title">可定制</h3>
      <div class="mu-feature-item-desc">
        Muse UI 自定义主题方式及为优雅，仅需少量代码即可完成主题样式替换。
      </div>
    </mu-col>
    <mu-col lg="4" span="12" class="mu-feature-item">
      <img src="../../assets/images/img3.png" alt="">
      <h3 class="mu-feature-item-title">基于 Vue 2.0</h3>
      <div class="mu-feature-item-desc">
        Muse UI 基于 Vue2.0 开发，Vue2.0是当下最快的前端框架之一，小巧，api友好，可用于开发的复杂单页应用
      </div>
    </mu-col>
  </mu-row>
  <mu-row>
    <mu-col lg="4" span="12" class="mu-desc-item">
      <div class="mu-desc-item-header">
        <mu-icon value="file_download"/>
        <h2 class="mu-desc-item-title">安装</h2>
      </div>
      <div class="mu-desc-item-content">
        <mu-install />
      </div>
      <mu-divider />
      <mu-button flat :to="`/${locale}/installation`">查看安装文档</mu-button>
    </mu-col>
    <mu-col lg="4" span="12" class="mu-desc-item">
      <div class="mu-desc-item-header">
        <mu-icon value="build"/>
        <h2 class="mu-desc-item-title">使用</h2>
      </div>
      <div class="mu-desc-item-content">
        <mu-usage />
      </div>
      <mu-divider />
      <mu-button flat :to="`/${locale}/usage`">查看使用文档</mu-button>
    </mu-col>
    <mu-col lg="4" span="12" class="mu-desc-item">
      <div class="mu-desc-item-header">
        <mu-icon value="whatshot"/>
        <h2 class="mu-desc-item-title">定制化样式</h2>
      </div>
      <div class="mu-desc-item-content">
        <mu-theme />
      </div>
      <mu-divider />
      <mu-button flat :to="`/${locale}/theme`">自定义主题</mu-button>
    </mu-col>
  </mu-row>
  <div class="mu-footer">
      Muse-UI is open source and released under the MIT Licence.<br/>
      Copyright (c) 2016 myron
  </div>
</div>
</template>
<script>
import locale from '../../locale';
import install from './install.md';
import usage from './usage.md';
import theme from './theme.md';

export default {
  name: 'home',
  data () {
    return {
      locale
    };
  },
  components: {
    'mu-install': install,
    'mu-usage': usage,
    'mu-theme': theme
  }
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
  background-color: @dialogBackgroundColor;
  // border-bottom: 1px solid @borderColor;
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

.mu-desc-item {
  padding: 40px 32px !important;
  border: 1px solid @alternateTextColor;
  .mu-icon {
    font-size: 30px;
    color: @primaryColor;
    margin-right: 16px;
  }
  .mu-divider {
    margin-top: 32px;
    margin-bottom: 16px;
  }
}
.mu-desc-item-header {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}
.mu-desc-item-title {
  color: @textColor;
  margin: 0;
  font-size: 21px;
  line-height: 24px;
  font-weight: 500;
}
.mu-desc-item-content {
  min-height: 270px;
}
.mu-footer{
  background-color: #1b1b1b;
  text-align: center;
  color: #777777;
  padding: 50px 40px;
}

.mu-desc-item-content {
  .markdown-body {
    padding: 0;
    margin: 0;
    p {
      margin: 0;
    }
    pre {
      background-color: transparent;
      margin: 0;
    }
  }
}
</style>
