<template>
<mu-drawer @close="handleClose" :open="open" :docked="docked" class="app-drawer" :zDepth="1">
  <mu-appbar class="exmaples-nav-appbar" :zDepth="0">
    <a class="mu-appbar-title" @click="handleMenuChange('#/index')" href="#/index" style="display:inline-block;">Muse-UI</a>
    <mu-badge content="alpha" class="exmaples-version" secondary/>
  </mu-appbar>
  <mu-divider/>
  <mu-flexbox class="mu-version-box" align="center">
    <span class="mu-version-text">Version:</span>
    <mu-dropDown-menu value="2.0.0.alpha">
      <mu-menu-item value="2.0.0.alpha" title="2.0.0.alpha"/>
    </mu-dropDown-menu>
  </mu-flexbox>
  <mu-list @change="handleMenuChange" :value="menuVal">
    <mu-list-item title="快速开始" toggleNested>
      <mu-list-item href="#/install" value="#/install" slot="nested" title="安装"/>
      <mu-list-item href="#/usage" value="#/usage" slot="nested" title="使用"/>
    </mu-list-item>
    <!-- <mu-list-item title="私人定制" toggleNested>
      <mu-list-item slot="nested" title="主题"/>
      <mu-list-item slot="nested" title="颜色"/>
    </mu-list-item> -->
    <mu-list-item title="更新日志"/>
    <mu-list-item title="基础组件" toggleNested>
      <mu-sub-header slot="nested" class="exmaples-nav-sub-header">Material Design</mu-sub-header>
      <mu-list-item slot="nested" href="#/appbar" value="#/appbar" title="App Bar"/>
      <mu-list-item slot="nested" href="#/autoComplete" value="#/autoComplete" title="Auto Complete"/>
      <mu-list-item slot="nested" href="#/avatar" value="#/avatar" title="Avatar"/>
      <mu-list-item slot="nested" href="#/badge" value="#/badge" title="Badge"/>
      <mu-list-item slot="nested" href="#/bottomNav" value="#/bottomNav" title="Bottom Navigation"/>
      <mu-list-item slot="nested" href="#/bottomSheet" value="#/bottomSheet" title="Bottom Sheet"/>
      <mu-list-item slot="nested" title="Buttons" toggleNested>
        <mu-list-item slot="nested" href="#/flatButton" value="#/flatButton" title="Flat Button"></mu-list-item>
        <mu-list-item slot="nested" href="#/raisedButton" value="#/raisedButton" title="Raised Button"></mu-list-item>
        <mu-list-item slot="nested" href="#/iconButton" value="#/iconButton" title="Icon Button"></mu-list-item>
        <mu-list-item slot="nested" href="#/floatButton" value="/floatButton" title="Floating Action Button"></mu-list-item>
      </mu-list-item>
      <mu-list-item slot="nested" title="Card"/>
      <mu-list-item slot="nested" title="Checkbox"/>
      <mu-list-item slot="nested" title="Chip"/>
      <mu-list-item slot="nested" title="Date Picker"/>
      <mu-list-item slot="nested" title="Dialog"/>
      <mu-list-item slot="nested" title="Divider"/>
      <mu-list-item slot="nested" title="Drawer"/>
      <mu-list-item slot="nested" title="Grid List"/>
      <mu-list-item slot="nested" title="Icon"/>
      <mu-list-item slot="nested" title="Linear Progress"/>
      <mu-list-item slot="nested" title="List"/>
      <mu-list-item slot="nested" title="Menus" toggleNested>
        <mu-list-item slot="nested" title="Menu"/>
        <mu-list-item slot="nested" title="Icon Menu"/>
        <mu-list-item slot="nested" title="DropDown Menu"/>
      </mu-list-item>
      <mu-list-item slot="nested" title="Paper"/>
      <mu-list-item slot="nested" title="Popover"/>
      <mu-list-item slot="nested" title="Radio"/>
      <mu-list-item slot="nested" title="Select Field"/>
      <mu-list-item slot="nested" title="Slider"/>
      <mu-list-item slot="nested" title="SnackBar & Toast"/>
      <mu-list-item slot="nested" title="Stepper"/>
      <mu-list-item slot="nested" title="Sub Header"/>
      <mu-list-item slot="nested" title="Switch"/>
      <mu-list-item slot="nested" title="Table"/>
      <mu-list-item slot="nested" title="Tabs"/>
      <mu-list-item slot="nested" title="Text Field"/>
      <mu-list-item slot="nested" title="Time Picker"/>
      <mu-list-item slot="nested" title="Tooltip"/>
      <mu-sub-header slot="nested" class="exmaples-nav-sub-header">Others</mu-sub-header>
      <mu-list-item slot="nested" title="Content Block"/>
      <mu-list-item slot="nested" title="Flex Box"/>
      <mu-list-item slot="nested" title="Grid"/>
      <mu-list-item slot="nested" title="Infinite Scroll"/>
      <mu-list-item slot="nested" title="Picker"/>
      <mu-list-item slot="nested" title="Popup"/>
      <mu-list-item slot="nested" title="Refresh Control"/>
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
      menuVal: '#/'
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    handleMenuChange (val) {
      this.menuVal = val
      this.$emit('change', val)
    }
  },
  mounted () {
    this.menuVal = window.location.hash
  },
  components: {
  }
}
</script>

<style lang="less">
@import "../../src/styles/vars.less";
.exmaples-drawer{
  box-shadow: none;
  border-right: 1px solid @borderColor;
}

.exmaples-nav-appbar{
  background-color: #FFF;
  color: @secondaryTextColor;
  .mu-appbar-title{
    color: @secondaryTextColor;
  }
}

.exmaples-version {
  margin-left: 10px;
  align-self: flex-start;
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
