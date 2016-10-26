<template>
<mu-drawer @close="handleClose" :open="open" :docked="docked" class="app-drawer" :zDepth="1">
  <mu-appbar class="exmaples-nav-appbar">
    <h1 class="mu-appbar-title" style="display:inline-block;">Muse-UI</h1>
    <mu-badge content="alpha" class="exmaples-version" secondary/>
  </mu-appbar>
  <mu-divider/>
  <mu-list>
    <mu-list-item title="快速开始" toggleNested>
      <mu-list-item slot="nested" title="安装指南"/>
      <mu-list-item slot="nested" title="颜色"/>
      <mu-list-item slot="nested" title="主题"/>
    </mu-list-item>
    <mu-list-item title="更新日志"/>
    <mu-list-item title="基础组件" toggleNested>
      <mu-sub-header slot="nested" class="exmaples-nav-sub-header">Material Design</mu-sub-header>
      <mu-list-item slot="nested" title="App Bar"/>
      <mu-list-item slot="nested" title="Auto Complete"/>
      <mu-list-item slot="nested" title="Avatar"/>
      <mu-list-item slot="nested" title="badge"/>
      <mu-list-item slot="nested" title="Bottom Navigation"/>
      <mu-list-item slot="nested" title="Bottom Sheet"/>
      <mu-list-item slot="nested" title="Buttons"/>
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
      <mu-list-item slot="nested" title="Menu"/>
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
    <mu-list-item title="GitHub"/>
    <mu-list-item title="Vue"/>
    <mu-list-item title="Material Design"/>
    <mu-list-item title="Material-UI"/>
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
  methods: {
    handleClose () {
      this.$emit('close')
    }
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
  background-color: #FFF !important;
  color: @secondaryTextColor !important;
}

.exmaples-version {
  margin-left: 10px;
  align-self: flex-start;
}

.exmaples-nav-sub-header {
  padding-left: 34px;
}
</style>
