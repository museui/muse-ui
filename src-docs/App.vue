<template>
  <div id="app">
    <mu-paper class="example-appbar">
      <mu-appbar title="">
        <mu-icon-button icon="menu" slot="left"/>
      </mu-appbar>
    </mu-paper>
    <mu-app-nav />
    <div class="example-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppNavDrawer from './components/AppNavDrawer'
export default {
  components: {
    'app-nav': AppNavDrawer
  }
}
</script>

<style lang="less">
.example-appbar{
  position: fixed;
  left: 256px;
  right: 0;
  top: 0;
}

.example-content{
  padding-top: 64px;
  padding-left: 256px;
}
</style>
