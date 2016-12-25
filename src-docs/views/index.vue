<template>
  <div>
    <div class="mu-banner">
      <div class="mu-banner-container">
        <div class="mu-logo">
          M
        </div>
        <h1 class="mu-banner-title">
          Muse-UI
        </h1>
        <h2 class="mu-banner-sub-title">
          {{$t('subTitle')}}
        </h2>
        <div class="mu-banner-actions">
          <mu-raised-button label="Get Started" href="#/install" class="mu-banner-button"/>
        </div>
      </div>
      <div class="mu-banner-appbar-height"></div>
    </div>
    <div class="mu-desc-wrapper">
      <div class="mu-desc">
        <h2 class="mu-desc-title">{{$t('features')}}</h2>
        <mu-row gutter>
          <mu-col tablet="33" desktop="33" class="mu-desc-item">
            <h3 class="mu-desc-sub-title">{{$t('component')}}</h3>
            <div class="mu-desc-text">
              {{$t('componentDesc')}}
            </div>
          </mu-col>
          <mu-col tablet="33" desktop="33" class="mu-desc-item">
            <h3 class="mu-desc-sub-title">{{$t('custom')}}</h3>
            <div class="mu-desc-text">
              {{$t('customDesc')}}
            </div>
          </mu-col>
          <mu-col tablet="33" desktop="33" class="mu-desc-item">
            <h3 class="mu-desc-sub-title">{{$t('base')}}</h3>
            <div class="mu-desc-text">
              {{$t('baseDesc')}}
            </div>
          </mu-col>
        </mu-row>
      </div>
    </div>
    <mu-divider/>
    <div  class="mu-desc-wrapper">
      <div class="mu-desc">
        <h2 class="mu-desc-title">{{$t('thanks')}}</h2>
        <div class="mu-desc-item">
          <div class="mu-desc-text" v-html="$t('thanksDesc')">
          </div>
        </div>
      </div>
    </div>
    <div class="mu-footer">
      Muse-UI is open source and released under the MIT Licence.<br/>
      Copyright (c) 2016 myron
    </div>
  </div>
</template>

<script>
import zh from './zh'
import en from './en'
export default {
  locales: {
    zh,
    en
  }
}
</script>

<style lang="less">
@import "../../src/styles/vars.less";
.mu-banner{
  background-color: @primaryColor;
  z-index: 100;
}

.mu-banner-appbar-height{
  height: 56px;
}

.mu-banner-container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 24px;
  padding-right: 24px;
}

.mu-logo{
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: @alternateTextColor;
  margin:  0 auto;
  color: @primaryColor;
  font-size: 50px;
  border-radius: 50%;
  margin-bottom: 16px;
}

.mu-banner-title{
  font-weight: 300;
  color: fade(@alternateTextColor, 87%);
  margin-top: 0;
  margin-bottom: 16px;
  text-align: center;
}

.mu-banner-sub-title{
  color: fade(@alternateTextColor, 87%);
  text-align: center;
  font-weight: 300;
  margin-bottom: 16px;
}

.mu-banner-button{
  color: @primaryColor;
}

.mu-banner-actions{
  text-align: center;
}
.mu-desc-wrapper{
  background-color: fade(@alternateTextColor, 30%);
}
.mu-desc{
  padding: 24px 24px 48px 24px;
  max-width: 800px;
  margin: auto;
}

.mu-desc-title{
  font-weight: 400;
  padding-left: 16px;
  padding-right: 16px;
}

.mu-desc-sub-title{
  font-weight: 400;
  font-size: 18px;
}

.mu-desc-item {
  padding-left: 16px;
  padding-right: 16px;
}

.mu-desc-text {
  font-size: 16px;
}

@media (min-width: 480px) {
  .mu-banner-appbar-height{
    height: 64px;
  }
}

.mu-footer{
  background-color: @grey900;
  text-align: center;
  color: @white;
  padding: 50px 40px;
}
</style>
