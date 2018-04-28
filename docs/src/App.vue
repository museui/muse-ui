<template>
  <div id="app">
    <app-nav-drawer :open.sync="open"/>
    <mu-appbar :color="home ? 'transparent' : 'primary'" class="mu-appbar-header" style="z-index: 101;" :class="{'is-open': (!home && open)}" :zDepth="home ? 0 : 1">
      <mu-button v-if="home || !open" icon slot="left" @click="toggleMenu">
        <mu-icon size="24" value="menu"/>
      </mu-button>
      <img src="./assets/images/bg.png" v-if="home" width="100%" height="500" class="mu-banner-image">
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
    <div class="app-content" :class="{'is-open': (!home && open)}">
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppNavDrawer from './components/nav';
export default {
  name: 'App',
  data () {
    return {
      open: false
    }
  },
  computed: {
    home () {
      return this.$route && this.$route.name === 'home';
    }
  },
  methods: {
    toggleMenu () {
      this.open = !this.open;
    }
  },
  components: {
    'app-nav-drawer': AppNavDrawer
  }
}
</script>
<style lang="less">
@import '../../lib/styles/vars.less';
.mu-app-drawer {
  border-right: 1px solid @borderColor;
}
.mu-app-drawer-header {
  .mu-appbar-title {
    line-height: 24px;
    display: flex;
    align-items: flex-start;
    font-size: 24px;
    flex-direction: column;
    color: @secondaryTextColor;
    font-weight: 500;
  }
  .mu-appbar-title-text {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: @primaryColor;
    }
  }
  .mu-app-version {
    line-height: 1;
    font-size: 12px;
    margin-top: 4px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: @primaryColor;
    }
  }
}
.mu-appbar-header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 101;
  overflow: hidden;
  &.is-open {
    left: 256px;
  }
}
.app-content {
  transition: all .45s cubic-bezier(.23,1,.32,1);
}
.app-content.is-open {
  padding-left: 256px;
  padding-top: 56px;
}
.toggle-icon {
  color: @secondaryTextColor;
  transition: transform .3s cubic-bezier(.23,1,.32,1);
  .mu-item.is-open & {
    transform: rotate(180deg);
  }
}

@media (min-width: 480px) {
  .app-content.is-open {
    padding-top: 64px;
  }
}

</style>
