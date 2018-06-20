<template>
  <div id="app">
    <app-nav-drawer v-if="locale" :open.sync="open" :docked="docked" :home="home"/>
    <mu-appbar v-if="locale" :color="home ? 'transparent' : 'primary'" class="mu-appbar-header" style="z-index: 101;" :class="{'is-open': (!home && open && docked), 'is-only-title': !(home || !docked)}" :z-depth="home ? 0 : 4">
      <mu-button v-if="home || !docked" icon slot="left" @click="toggleMenu">
        <mu-icon size="24" value="menu"/>
      </mu-button>
      {{pageName || ''}}
      <mu-fade-transition>
        <img src="./assets/images/bg.png" v-if="home" width="100%" height="500" class="mu-banner-image">
      </mu-fade-transition>
      <mu-search slot="right" />
      <mu-menu slot="right" :open.sync="activeMenu" placement="bottom-end">
        <mu-button flat>
          <img v-if="lang && lang.img" :src="lang.img(32)" alt="">
        </mu-button>
        <mu-list slot="content">
          <mu-list-item button v-for="item in langs" :key="item.lang" @click="changeLang(item.lang)">
            <mu-list-item-action>
              <img v-if="item.img" :src="item.img(24)" alt="">
            </mu-list-item-action>
            <mu-list-item-title>{{item.desc}}</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-menu>
      <mu-menu slot="right" :open.sync="openTheme">
        <mu-button flat>
          <mu-icon value="color_lens"></mu-icon>
        </mu-button>
        <mu-list slot="content" :value="theme" @change="changeTheme">
          <mu-list-item button v-for="item in themes" :value="item.value" :key="item.value">
            <mu-list-item-action>
              <mu-icon :color="item.color" value="brightness_1"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>{{item.label}}</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-menu>
      <mu-menu slot="right" placement="bottom-end" v-if="!isMobile">
        <mu-button flat>
          <mu-icon value="public" />
        </mu-button>
        <mu-list slot="content">
          <mu-sub-header>{{i18n.community}}</mu-sub-header>
          <mu-list-item button href="https://gitter.im/muse-ui/muse-ui?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge" target="_blank">
            <mu-list-item-content>
              <mu-list-item-title>{{i18n.chat}}</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button href="https://github.com/museui/muse-ui/issues" target="_blank">
            <mu-list-item-content>
              <mu-list-item-title>{{i18n.issue}}</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button to="`/${locale}/contributing`">
            <mu-list-item-content>
              <mu-list-item-title>{{i18n.contributing}}</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-menu>
      <mu-button icon href="https://github.com/museui/muse-ui" v-if="!isMobile" slot="right">
        <mu-icon size="24" value=":mudocs-icon-custom-github"/>
      </mu-button>
    </mu-appbar>
    <div class="app-content" :class="{'is-open': (!home && open && docked)}">
      <router-view />
      <mu-backtop />
    </div>
  </div>
</template>

<script>
import AppNavDrawer from './components/nav';
import BackTop from './components/back-top';
import langs from './configs/lang';
import locale from './locale';
import MuseUI from 'muse-ui';
import i18n from './configs/i18n';
import { changeLocale } from './locale';
import { FadeTransition } from '../../ui/internal/transitions';
import Search from './components/search';

export default {
  name: 'App',
  data () {
    return {
      docked: isDesktop(),
      isMobile: isMobile(),
      activeMenu: false,
      themes: [{
        label: 'Light',
        value: 'light',
        color: 'blue'
      }, {
        label: 'Dark',
        value: 'dark',
        color: 'blue700'
      }, {
        label: 'Carbon',
        value: 'carbon',
        color: '#474a4f'
      }],
      theme: 'light',
      openTheme: false,
      langs,
      open: false
    }
  },
  computed: {
    locale () {
      return this.$route.meta && this.$route.meta.lang;
    },
    i18n () {
      return i18n[this.locale];
    },
    lang () {
      return this.langs.filter((item) => item.lang === this.locale)[0];
    },
    home () {
      return (this.$route && this.$route.meta && this.$route.meta.name === 'home');
    },
    pageName () {
      return this.$route && this.$route.meta && this.$route.meta.name !== 'home' && this.$route.meta.name;
    }
  },
  mounted () {
    this.changeNav();
    this.handleResize = () => {
      this.changeNav();
      this.isMobile = isMobile();
    };
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    changeLang (lang) {
      changeLocale(lang);
      this.activeMenu = false;
      this.$router.replace(`/${lang}${this.$route.meta.path}`);
    },
    changeTheme (theme) {
      this.theme = theme;
      this.openTheme = false;
      MuseUI.theme.use(theme);
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
    'mu-backtop': BackTop,
    'app-nav-drawer': AppNavDrawer,
    'mu-fade-transition': FadeTransition,
    'mu-search': Search
  }
}

function isDesktop () {
  return window.innerWidth > 993;
}

function isMobile () {
  return window.innerWidth < 660;
}
</script>
<style lang="less">
@import '../../ui/styles/vars.less';
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

.mu-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.mu-docs-search {
  width: 200px;
  transition: width .3s @easeOutFunction;
  margin-right: 16px;
  &.mu-input__focus {
    width: 250px;
  }
  .mu-input-content {
    color: #fff;
    background: rgba(255, 255, 255, 0.15);
  }
  .mu-text-field-input {
    color: #fff;
    font-weight: 300;
  }
  .mu-search-icon {
    width: 56px;
    text-align: center;
  }
}
.algolia-search-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 36px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 8px;
}

.algolia-search-link {
  height: 20px;
  > img {
    height: 100%;
  }
}

.mu-search-popover {
  max-width: 500px;
  padding-bottom: 36px;
  em {
    font-weight: normal;
    font-style: normal;
    color: @secondaryColor;
  }
  .search-component {
    text-transform: capitalize;
  }
  .search-separator {
    margin: 0 8px;
  }
}
@media (min-width: 600px) {
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
