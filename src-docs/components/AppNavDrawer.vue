<template>
<mu-drawer @hide="handleHide" @close="handleClose" :open="open" :docked="docked" :overlay="docked" class="app-drawer" :zDepth="1">
  <mu-appbar :zDepth="0" class="exmaples-nav-appbar">
    <a @click="handleMenuChange('#/index')" href="#/index" class="exmaples-appbar-title">Muse-UI</a>
    <!-- <mu-badge content="rc" class="exmaples-version" secondary/> -->
  </mu-appbar>
  <mu-divider/>
  <div class="exmaple-drawer-content">
    <div class="mu-version-box">
      <span class="mu-version-text">Version: </span>
      <mu-dropDown-menu :value="version" @change="handleVersionChange" v-if="versions.length > 0">
        <mu-menu-item v-for="vtext in versions" :key="'version-' + vtext" :value="vtext" :title="vtext"/>
      </mu-dropDown-menu>
    </div>
    <div class="mu-lang-box">
      <span class="mu-lang-title">Lang: </span>
      <span class="mu-lang-select">
        <a href="javascript:;" class="mu-lang" :class="{'active': lang === 'zh'}" @click="changeLang('zh')">中文</a>
        <span>/</span>
        <a href="javascript:;" class="mu-lang" :class="{'active': lang === 'en'}" @click="changeLang('en')">En</a>
      </span>
    </div>
    <mu-list @change="handleMenuChange" :value="menuVal">
      <mu-list-item :title="$t('getStarted')" toggleNested>
        <mu-list-item value="#/install" slot="nested" :title="$t('installation')"/>
        <mu-list-item value="#/usage" slot="nested" :title="$t('usage')"/>
        <mu-list-item value="#/faq" slot="nested" :title="$t('faq')"/>
      </mu-list-item>
      <mu-list-item :title="$t('customization')" toggleNested>
        <mu-list-item slot="nested" value="#/theme" :title="$t('theme')"/>
        <mu-list-item slot="nested" value="#/colors" :title="$t('color')"/>
      </mu-list-item>

      <mu-list-item :title="$t('component')" toggleNested>
        <mu-list-item slot="nested" value="#/layout" title="Layout"/>
        <mu-sub-header slot="nested" class="exmaples-nav-sub-header">Material Design</mu-sub-header>
        <mu-list-item slot="nested" value="#/appbar" title="App Bar"/>
        <mu-list-item slot="nested" value="#/autoComplete" title="Auto Complete"/>
        <mu-list-item slot="nested" value="#/avatar" title="Avatar"/>
        <mu-list-item slot="nested" value="#/badge" title="Badge"/>
        <mu-list-item slot="nested" value="#/bottomNav" title="Bottom Navigation"/>
        <mu-list-item slot="nested" value="#/bottomSheet" title="Bottom Sheet"/>
        <mu-list-item slot="nested" title="Buttons" toggleNested>
          <mu-list-item slot="nested" value="#/flatButton" title="Flat Button"></mu-list-item>
          <mu-list-item slot="nested" value="#/raisedButton" title="Raised Button"></mu-list-item>
          <mu-list-item slot="nested" value="#/iconButton" title="Icon Button"></mu-list-item>
          <mu-list-item slot="nested" value="#/floatButton" title="Floating Action Button"></mu-list-item>
        </mu-list-item>
        <mu-list-item slot="nested" value="#/card" title="Card"/>
        <mu-list-item slot="nested" value="#/chip" title="Chip"/>
        <mu-list-item slot="nested" value="#/datePicker" title="Date Picker"/>
        <mu-list-item slot="nested" value="#/dialog" title="Dialog"/>
        <mu-list-item slot="nested" value="#/divider" title="Divider"/>
        <mu-list-item slot="nested" value="#/drawer" title="Drawer"/>
        <mu-list-item slot="nested" value="#/gridList" title="Grid List"/>
        <mu-list-item slot="nested" value="#/icon" title="Icon"/>
        <mu-list-item slot="nested" value="#/list" title="List"/>
        <mu-list-item slot="nested" title="Menus" toggleNested>
          <mu-list-item slot="nested" value="#/menu" title="Menu"/>
          <mu-list-item slot="nested" value="#/iconMenu" title="Icon Menu"/>
          <mu-list-item slot="nested" value="#/dropDownMenu" title="DropDown Menu"/>
        </mu-list-item>
        <mu-list-item slot="nested" value="#/paper" title="Paper"/>
        <mu-list-item slot="nested" value="#/popover" title="Popover"/>
        <mu-list-item slot="nested" title="Progress" toggleNested>
          <mu-list-item slot="nested" value="#/linearProgress" title="Linear Progress"/>
          <mu-list-item slot="nested" value="#/circularProgress" title="Circular Progress"/>
        </mu-list-item>
        <mu-list-item slot="nested" value="#/selectField" title="Select Field"/>
        <mu-list-item slot="nested" title="Selection Controls" toggleNested>
          <mu-list-item slot="nested" value="#/checkbox" title="Checkbox"/>
          <mu-list-item slot="nested" value="#/radio" title="Radio"/>
          <mu-list-item slot="nested" value="#/switch" title="Switch"/>
        </mu-list-item>
        <mu-list-item slot="nested" value="#/slider" title="Slider"/>
        <mu-list-item slot="nested" value="#/snackbarToast" title="SnackBar & Toast"/>
        <mu-list-item slot="nested" value="#/stepper" title="Stepper"/>
        <mu-list-item slot="nested" value="#/subHeader" title="Sub Header"/>
        <mu-list-item slot="nested" value="#/table" title="Table"/>
        <mu-list-item slot="nested" value="#/tabs" title="Tabs"/>
        <mu-list-item slot="nested" value="#/textField" title="Text Field"/>
        <mu-list-item slot="nested" value="#/timePicker" title="Time Picker"/>
        <mu-list-item slot="nested" value="#/tooltip" title="Tooltip"/>
        <mu-sub-header slot="nested" class="exmaples-nav-sub-header">Others</mu-sub-header>
        <mu-list-item slot="nested" value="#/alert" title="Alert"/>
        <mu-list-item slot="nested" value="#/backTop" title="BackTop"/>
        <mu-list-item slot="nested" value="#/breadcrumb" title="Breadcrumb"/>
        <mu-list-item slot="nested" value="#/contentBlock" title="Content Block"/>
        <mu-list-item slot="nested" value="#/flexbox" title="Flex Box"/>
        <mu-list-item slot="nested" value="#/grid" title="Grid"/>
        <mu-list-item slot="nested" value="#/infiniteScroll" title="Infinite Scroll"/>
        <mu-list-item slot="nested" value="#/pagination" title="Pagination"/>
        <mu-list-item slot="nested" value="#/picker" title="Picker"/>
        <mu-list-item slot="nested" value="#/popup" title="Popup"/>
        <mu-list-item slot="nested" value="#/refreshControl" title="Refresh Control"/>
        <mu-list-item slot="nested" value="#/timeline" title="Timeline"/>
      </mu-list-item>
      <mu-list-item :title="$t('more')" toggleNested>
        <mu-list-item slot="nested" :title="$t('changeLog')" value="#/changeLog"/>
        <mu-list-item slot="nested" :title="$t('contributing')" value="#/contributing"/>
      </mu-list-item>
    </mu-list>
    <mu-divider/>
    <mu-sub-header>{{$t('resource')}}</mu-sub-header>
    <mu-list>
      <mu-list-item href="https://github.com/museui/muse-ui" target="_blank" title="GitHub"/>
      <mu-list-item href="http://vuejs.org/" target="_blank" title="Vue"/>
      <mu-list-item href="https://material.google.com/" target="_blank" title="Material Design"/>
      <mu-list-item href="http://www.material-ui.com/" target="_blank" title="Material-UI"/>
    </mu-list>
  </div>
</mu-drawer>
</template>

<script>
import Vue from 'vue'
import zh from './zh'
import en from './en'
import packageJson from '../../package.json'
export default {
  props: {
    open: {
      type: Boolean,
      default: true
    },
    docked: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      menuVal: '#/',
      version: packageJson.version,
      versions: []
    }
  },
  computed: {
    lang () {
      return Vue.config.lang
    }
  },
  methods: {
    handleVersionChange (val) {
      if (val !== this.version) {
        var url = this.versions.indexOf(val) === 0 ? '/' : '/' + val
        window.open(url)
      }
    },
    handleClose () {
      this.$emit('close')
    },
    handleMenuChange (val) {
      this.menuVal = val
      if (this.docked) {
        window.location.hash = this.menuVal
      } else {
        this.changeHref = true
      }
      this.$emit('change', val)
    },
    handleHide () {
      if (!this.changeHref) return
      window.location.hash = this.menuVal
      this.changeHref = false
    },
    changeLang (lang) {
      Vue.config.lang = lang
      window.localStorage.setItem('lang', lang)
    }
  },
  mounted () {
    this.menuVal = window.location.hash
    window.addEventListener('hashchange', () => {
      this.menuVal = window.location.hash
    })
    var xhr = new window.XMLHttpRequest()
    xhr.open('GET', '/version.json', true)
    xhr.onload = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          this.versions = JSON.parse(xhr.responseText)
          console.log(this.versions, this.version)
        } else {
          console.error(xhr.statusText)
        }
      }
    }
    xhr.send()
  },
  locales: {
    zh,
    en
  }
}
</script>

<style lang="less">
@import "../../src/styles/import.less";
.app-drawer{
  display: flex;
  flex-direction: column;
}

.exmaples-nav-appbar.mu-appbar{
  flex-shrink: 0;
}
.exmaple-drawer-content{
  flex: 1;
  .scrollable();
  .no-scrollbar();
}
.exmaples-appbar-title{
  color: inherit;
  display: inline-block;
}

.exmaples-version {
  margin-left: 10px;
  vertical-align: text-top;
}

.exmaples-nav-sub-header {
  padding-left: 34px;
}

.mu-version-box{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  margin-top: 8px;
  padding-left: 16px;
  padding-right: 16px;
}
.mu-version-text {
  font-size: 16px;
  margin-top: 8px;
  width: 60px;
}

.mu-lang-box{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  margin-top: 8px;
  padding-left: 16px;
  padding-right: 40px;
  font-size: 16px;
}

.mu-lang {
  color: inherit;
  margin-left: 2px;
  margin-right: 2px;
  &:last-child {
    margin-right: 0;
  }
  &:hover,
  &.active {
    color: @accentColor;
  }
}
</style>
