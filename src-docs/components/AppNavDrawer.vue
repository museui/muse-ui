<template>
<mu-drawer @hide="handleHide" @close="handleClose" :open="open" :docked="docked" class="app-drawer" :zDepth="1">
  <mu-appbar class="exmaples-nav-appbar" :zDepth="0">
    <a class="exmaples-appbar-title" @click="handleMenuChange('#/index')" href="#/index" style="display:inline-block;">Muse-UI</a>
    <mu-badge content="alpha" class="exmaples-version" secondary/>
  </mu-appbar>
  <mu-divider/>
  <mu-flexbox class="mu-version-box" align="center">
    <span class="mu-version-text">Version: </span>
    <mu-dropDown-menu :value="version" @change="handleVersionChange" v-if="versions.length > 0">
      <mu-menu-item v-for="vtext in versions" :value="vtext" :title="vtext"/>
    </mu-dropDown-menu>
  </mu-flexbox>
  <mu-list @change="handleMenuChange" :value="menuVal">
    <mu-list-item title="快速开始" toggleNested>
      <mu-list-item value="#/install" slot="nested" title="安装"/>
      <mu-list-item value="#/usage" slot="nested" title="使用"/>
    </mu-list-item>
    <mu-list-item title="个性定制" toggleNested>
      <mu-list-item slot="nested" value="#/theme" title="主题"/>
      <mu-list-item slot="nested" value="#/colors" title="颜色"/>
    </mu-list-item>

    <mu-list-item title="基础组件" toggleNested>
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
      <mu-list-item slot="nested" value="#/contentBlock" title="Content Block"/>
      <mu-list-item slot="nested" value="#/flexbox" title="Flex Box"/>
      <mu-list-item slot="nested" value="#/grid" title="Grid"/>
      <mu-list-item slot="nested" value="#/infiniteScroll" title="Infinite Scroll"/>
      <mu-list-item slot="nested" value="#/pagination" title="Pagination"/>
      <mu-list-item slot="nested" value="#/picker" title="Picker"/>
      <mu-list-item slot="nested" value="#/popup" title="Popup"/>
      <mu-list-item slot="nested" value="#/refreshControl" title="Refresh Control"/>
    </mu-list-item>
    <mu-list-item title="更多信息" toggleNested>
      <mu-list-item slot="nested" title="更新日志" value="#/changeLog"/>
      <mu-list-item slot="nested" title="贡献指南" value="#/contributing"/>
    </mu-list-item>
  </mu-list>
  <mu-divider/>
  <mu-sub-header>资源</mu-sub-header>
  <mu-list>
    <mu-list-item href="https://github.com/museui/muse-ui" target="_blank" title="GitHub"/>
    <mu-list-item href="http://vuejs.org/" target="_blank" title="Vue"/>
    <mu-list-item href="https://material.google.com/" target="_blank" title="Material Design"/>
    <mu-list-item href="http://www.material-ui.com/" target="_blank" title="Material-UI"/>
  </mu-list>
</mu-drawer>
</template>

<script>
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
        } else {
          console.error(xhr.statusText)
        }
      }
    }
    xhr.send()
  }
}
</script>

<style lang="less">
@import "../../src/styles/vars.less";
.exmaples-drawer{
  box-shadow: none;
  border-right: 1px solid @borderColor;
}

.exmaples-nav-appbar.mu-appbar{
  background-color: @dialogBackgroundColor;
  color: @secondaryTextColor;
}
.exmaples-appbar-title{
  color: @secondaryTextColor;
}

.exmaples-version {
  margin-left: 10px;
  vertical-align: text-top;
}

.exmaples-nav-sub-header {
  padding-left: 34px;
}

.mu-version-box{
  height: 48px;
  margin-top: 8px;
  padding-left: 16px;
  padding-right: 16px;
}
.mu-version-text {
  font-size: 16px;
  margin-top: 8px;
}
</style>
