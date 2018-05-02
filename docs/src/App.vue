<template>
  <div id="app">
    <app-nav-drawer :open.sync="open" :docked="docked" :home="home"/>
    <mu-appbar :color="home ? 'transparent' : 'primary'" class="mu-appbar-header" style="z-index: 101;" :class="{'is-open': (!home && open && docked), 'is-only-title': !(home || !docked)}" :zDepth="home ? 0 : 1">
      <mu-button v-if="home || !docked" icon slot="left" @click="toggleMenu">
        <mu-icon size="24" value="menu"/>
      </mu-button>
      {{pageName}}
      <mu-fade-transition>
        <img src="./assets/images/bg.png" v-if="home" width="100%" height="500" class="mu-banner-image">
      </mu-fade-transition>
      <mu-menu slot="right" :open.sync="activeMenu" :targetOrigin="{
          vertical: 'bottom',
          horizontal: 'right'
        }" :anchorOrigin="{
          vertical: 'top',
          horizontal: 'right'
        }">
        <mu-button flat>
          <img :src="lang.img(32)" alt="">
        </mu-button>
        <mu-list slot="content">
          <mu-list-item button v-for="item in langs" :key="item.lang" @click="changeLang(item.lang)">
            <mu-list-item-action>
              <img :src="item.img(24)" alt="">
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>{{item.desc}}</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-menu>
      <mu-menu slot="right" :targetOrigin="{
          vertical: 'bottom',
          horizontal: 'right'
        }" :anchorOrigin="{
          vertical: 'top',
          horizontal: 'right'
        }">
        <mu-button flat>
          <mu-icon value="public" />
        </mu-button>
        <mu-list slot="content">
          <mu-sub-header>链接</mu-sub-header>
          <mu-list-item button>
            <mu-list-item-content>
              <mu-list-item-title>代码仓库</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-content>
              <mu-list-item-title>更新日志</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-content>
              <mu-list-item-title>最后发布版本</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-content>
              <mu-list-item-title>Material Design</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-divider />
          <mu-sub-header>社区</mu-sub-header>
          <mu-list-item button>
            <mu-list-item-content>
              <mu-list-item-title>在线讨论</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-content>
              <mu-list-item-title>反馈建议</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-content>
              <mu-list-item-title>如何贡献</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-menu>
      <mu-button icon href="https://github.com/museui/muse-ui" slot="right">
        <mu-icon size="24" value=":mudocs-icon-custom-github"/>
      </mu-button>
    </mu-appbar>
    <div class="app-content" :class="{'is-open': (!home && open && docked)}">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppNavDrawer from './components/nav';
import langs from './configs/lang';
import locale from './locale';
import { changeLocale } from './locale';
import { FadeTransition } from '../../ui/internal/transitions';

export default {
  name: 'App',
  data () {
    return {
      docked: isDesktop(),
      activeMenu: false,
      locale,
      langs,
      open: false
    }
  },
  computed: {
    lang () {
      return this.langs.filter((item) => item.lang === this.locale)[0];
    },
    home () {
      return (this.$route && this.$route.name === 'home');
    },
    pageName () {
      return this.$route && this.$route.meta && this.$route.meta.name;
    }
  },
  mounted () {
    this.changeNav();
    this.handleResize = () => {
      this.changeNav();
    };
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    changeLang (lang) {
      changeLocale(lang);
      this.activeMenu = false;
      if (this.$route.meta && this.$route.meta.path) {
        this.$router.replace(`/${lang}${this.$route.meta.path}`);
      } else {
        location.reload();
      }
    },
    changeNav () {
      const desktop = isDesktop();
      this.docked = this.home ? false : desktop;
      if (desktop === this.desktop) return;
      if (!desktop && this.desktop && this.open) {
        this.open = false;
      }
      if (desktop && !this.desktop && !this.open && !this.home) {
        this.open = true;
      }
      this.desktop = desktop;
    },
    toggleMenu () {
      this.open = !this.open;
    }
  },
  watch: {
    home (val) {
      this.open = !val;
      this.changeNav();
    },
    pageName () {
      this.activeMenu = false
    }
  },
  components: {
    'app-nav-drawer': AppNavDrawer,
    'mu-fade-transition': FadeTransition
  }
}

function isDesktop () {
  return window.innerWidth > 993;
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
  &.is-only-title {
    .mu-appbar-title {
      margin-left: 16px;
    }
  }
}
.app-content {
  transition: all .45s cubic-bezier(.23,1,.32,1);
  padding-top: 56px;
}
.app-content.is-open {
  padding-left: 256px;
}
.toggle-icon {
  color: @secondaryTextColor;
  transition: transform .3s cubic-bezier(.23,1,.32,1);
  .mu-item.is-open & {
    transform: rotate(180deg);
  }
}
.markdown-body {
  padding-top: 16px;
  margin: 0 auto;
  max-width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 100px;
}

@media (min-width: 480px) {
  .app-content {
    padding-top: 64px;
  }
}

@media (min-width: 600px) {
  .markdown-body {
    padding-left: 24px;
    padding-right: 24px;
  }
}
@media (min-width: 960px) {
  .markdown-body {
    max-width: 960px;
  }
}



</style>
