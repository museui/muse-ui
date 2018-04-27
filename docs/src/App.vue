<template>
  <div id="app">
    <mu-appbar color="transparent" style="position: fixed; left: 0; right: 0;top: 0; z-index: 101; overflow: hidden;" :zDepth="0">
      <mu-button icon slot="left">
        <mu-icon size="24" value="menu"/>
      </mu-button>
      <img src="./assets/images/bg.png" width="100%" height="500" class="mu-banner-image">
      <mu-menu slot="right" :targetOrigin="{
          vertical: 'bottom',
          horizontal: 'right'
        }" :anchorOrigin="{
          vertical: 'top',
          horizontal: 'right'
        }">
        <mu-button flat>
          <img src="https://countryflags.io/cn/flat/32.png" alt="">
        </mu-button>
        <mu-list slot="content">
          <mu-list-item button>
            <mu-list-item-action>
              <img src="https://countryflags.io/cn/flat/24.png" alt="">
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>简体中文</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-menu>
      <mu-button icon href="https://github.com/museui/muse-ui" slot="right">
        <mu-icon size="24" value=":mudocs-icon-custom-github"/>
      </mu-button>
    </mu-appbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

