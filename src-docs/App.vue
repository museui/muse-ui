<template>
  <div id="app">
    <mu-appbar :zDepth="0" class="example-appbar" :class="{'nav-hide': !open}">
      <mu-icon-button @click="toggleNav" icon="menu" slot="left"/>
      <mu-icon-button slot="right">
        <i class="mudocs-icon-custom-github"></i>
      </mu-icon-button>
    </mu-appbar>
    <app-nav @close="toggleNav" :open="open" :docked="docked" />
    <div class="example-content" :class="{'nav-hide': !open}">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppNavDrawer from './components/AppNavDrawer'
export default {
  data () {
    const desktop = isDesktop()
    return {
      open: desktop,
      docked: desktop,
      desktop: desktop
    }
  },
  mounted () {
    this.changeNav()
    this.handleResize = () => {
      this.changeNav()
    }
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    toggleNav () {
      this.open = !this.open
    },
    changeNav () {
      const desktop = isDesktop()
      this.docked = desktop
      if (desktop === this.desktop) return
      if (!desktop && this.desktop && this.open) {
        this.open = false
      }
      if (desktop && !this.desktop && !this.open) {
        this.open = true
      }
      this.desktop = desktop
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  components: {
    'app-nav': AppNavDrawer
  }
}

function isDesktop () {
  return window.innerWidth > 993
}
</script>

<style lang="less">
@import "../src/styles/import.less";
.example-appbar{
  position: fixed;
  left: 256px;
  right: 0;
  top: 0;
  width: auto;
  transition: all .45s @easeOutFunction;
  &.nav-hide {
    left: 0;
  }
}

.example-content{
  padding-top: 56px;
  padding-left: 256px;
  transition: all .45s @easeOutFunction;
  &.nav-hide {
    padding-left: 0;
  }
}

.content-wrapper{
  margin-top: 24px;
  margin-left: 24px;
}

@media (min-width: 480px) {
  .example-content{
    padding-top: 64px;
  }
}

@media (max-width: 993px) {
  .example-appbar {
    left: 0;
  }
  .example-content{
    padding-left: 0;
  }
}
</style>
