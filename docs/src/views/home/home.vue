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
      {{i18n.subtitle}}
    </h2>
    <div class="mu-banner-actions">
      <mu-button :to="`/${locale}/installation`" class="mu-banner-button">{{i18n.getStart}}</mu-button>
      <mu-button href="https://github.com/museui/muse-ui"  class="mu-banner-button">
        <mu-icon  size="24" value=":mudocs-icon-custom-github" left />
        github
      </mu-button>
    </div>
  </div>
  <mu-row>
    <mu-col lg="4" span="12" class="mu-feature-item">
      <img src="../../assets/images/img1.png" alt="">
      <h3 class="mu-feature-item-title">{{i18n.featureTitle1}}</h3>
      <div class="mu-feature-item-desc">
        {{i18n.featureContent1}}
      </div>
    </mu-col>
    <mu-col lg="4" span="12" class="mu-feature-item">
      <img src="../../assets/images/img2.png" alt="">
      <h3 class="mu-feature-item-title">{{i18n.featureTitle2}}</h3>
      <div class="mu-feature-item-desc">
        {{i18n.featureContent2}}
      </div>
    </mu-col>
    <mu-col lg="4" span="12" class="mu-feature-item">
      <img src="../../assets/images/img3.png" alt="">
      <h3 class="mu-feature-item-title">{{i18n.featureTitle3}}</h3>
      <div class="mu-feature-item-desc">
        {{i18n.featureContent3}}
      </div>
    </mu-col>
  </mu-row>
  <mu-row>
    <mu-col lg="4" span="12" class="mu-desc-item">
      <div class="mu-desc-item-header">
        <mu-icon value="file_download"/>
        <h2 class="mu-desc-item-title">{{i18n.install}}</h2>
      </div>
      <div class="mu-desc-item-content">
        <mu-install />
      </div>
      <mu-divider />
      <mu-button flat :to="`/${locale}/installation`">{{i18n.readInstallDoc}}</mu-button>
    </mu-col>
    <mu-col lg="4" span="12" class="mu-desc-item">
      <div class="mu-desc-item-header">
        <mu-icon value="build"/>
        <h2 class="mu-desc-item-title">{{i18n.usage}}</h2>
      </div>
      <div class="mu-desc-item-content">
        <mu-usage />
      </div>
      <mu-divider />
      <mu-button flat :to="`/${locale}/usage`">{{i18n.readUsage}}</mu-button>
    </mu-col>
    <mu-col lg="4" span="12" class="mu-desc-item">
      <div class="mu-desc-item-header">
        <mu-icon value="whatshot"/>
        <h2 class="mu-desc-item-title">{{i18n.custom}}</h2>
      </div>
      <div class="mu-desc-item-content">
        <mu-theme />
      </div>
      <mu-divider />
      <mu-button flat :to="`/${locale}/theme`">{{i18n.customTheme}}</mu-button>
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
import i18n from '../../configs/i18n';

export default {
  name: 'home',
  data () {
    return {
      locale,
      i18n
    };
  },
  components: {
    ...i18n.components
  }
};
</script>
<style lang="less">
@import "../../../../ui/styles/vars.less";
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
