<template>
  <div class="">
    <mu-paper>
      <mu-appbar title="Muse UI">
        <mu-icon-menu :value="1" slot="left" icon="menu">
          <mu-sub-header>Sub Header</mu-sub-header>
          <mu-menu-item disabled title="menu1"/>
          <mu-menu-item :value="1" title="menu2">
            <mu-badge secondary content="12"></mu-badge>
          </mu-menu-item>
          <mu-menu-item title="menu3"/>
          <mu-divider/>
          <mu-menu-item title="menu4"/>
        </mu-icon-menu>
        <mu-icon-button slot="right" icon="refresh" @click.native="refresh"></mu-icon-button>
      </mu-appbar>
    </mu-paper>
    <!-- <mu-tab-bar :active="tabActive">
      <mu-tab-item @tab-click="tabClick" icon="info" title="tab1"></mu-tab-item>
      <mu-tab-item @tab-click="tabClick"  icon="home" title="tab2"></mu-tab-item>
      <mu-tab-item @tab-click="tabClick" icon="refresh" title="tab3"></mu-tab-item>
    </mu-tab-bar> -->
    <!-- <mu-search-bar></mu-search-bar> -->
    <div ref="scroll">
      <!-- <mu-refresh-control  @refresh="refresh" :refreshing="refreshing"></mu-refresh-control> -->

      <div style="padding: 8px">
        <mu-card>
              <mu-card-header title="标题" subTitle="子标题">
                <mu-avatar slot="avatar" src="http://www.myronliu.com/img/uicon.jpg"></mu-avatar>
              </mu-card-header>
              <mu-card-media>
                <img src="http://vuejs.org/images/logo.png"/>
              </mu-card-media>
              <mu-card-text>
                Vue.js 是用于构建交互式的 Web  界面的库。它提供了 MVVM 数据绑定和一个可组合的组件系统，具有简单、灵活的 API。
              </mu-card-text>
              <mu-card-actions>
                <mu-flat-button labelPosition="before" label="button1" icon="info"></mu-flat-button>
                <mu-flat-button label="button2" secondary></mu-flat-button>
              </mu-card-actions>
          </mu-card>
      </div>
      <mu-content-block>
        <mu-flat-button labelPosition="before" label="测试按钮" icon="info"></mu-flat-button>
        <mu-float-button icon="add" secondary></mu-float-button>
        <mu-raised-button labelPosition="before" label="测试按钮" icon="info"></mu-raised-button>
        <mu-raised-button @click="openDialog" primary label="测试按钮" icon="info"></mu-raised-button>
        <mu-raised-button @click="showPopover" full-width secondary style="margin-top: 12px;" labelPosition="before" label="测试按钮" icon="info"></mu-raised-button>
        <!-- Muse UI 是基于 vue2 开发的material design ui 库 -->
        <div style="margin-top:10px;">
          <mu-avatar>A</mu-avatar>
          <mu-avatar icon="info"></mu-avatar>
          <mu-avatar src="http://www.myronliu.com/img/uicon.jpg"></mu-avatar>
          <mu-chip>
            <mu-avatar :size="32">A</mu-avatar>
            测试啦
          </mu-chip>
        </div>
      </mu-content-block>
      <mu-list @change="handlerChange" :value="active">
        <mu-sub-header>
            test sub header
        </mu-sub-header>
        <mu-divider></mu-divider>
        <mu-list-item title="测试标题" link toggleNested>
          <mu-avatar slot="left" src="http://www.myronliu.com/img/uicon.jpg"></mu-avatar>
          <mu-badge slot="after" secondary >11</mu-badge>
          <mu-list-item slot="nested" :value="1" title="测试标题" link>
            <mu-badge slot="after" secondary circle>11</mu-badge>
          </mu-list-item>
          <mu-list-item slot="nested" :value="2" title="测试标题" link>
            <mu-badge slot="after" secondary circle>11</mu-badge>
          </mu-list-item>
          <mu-list-item slot="nested" :value="3" title="测试标题" link>
            <mu-badge slot="after" secondary circle>11</mu-badge>
          </mu-list-item>
        </mu-list-item>
        <!-- <mu-divider inset></mu-divider> -->
        <!-- <mu-divider inset></mu-divider> -->

      </mu-list>
      <mu-content-block>
        <mu-paper class="demo-paper">
          <mu-menu :value="1">
            <mu-sub-header>Sub Header</mu-sub-header>
            <mu-menu-item disabled title="menu1"/>
            <mu-menu-item :value="1" title="menu2">
              <mu-badge secondary content="12"></mu-badge>
            </mu-menu-item>
            <mu-menu-item title="menu3"/>
            <mu-divider/>
            <mu-menu-item title="menu4"/>
          </mu-menu>
        </mu-paper>
      </mu-content-block>
      <!-- <mu-infinite-scroll :loading="loading" @load="load"></mu-infinite-scroll> -->
    </div>
    <mu-paper>
      <mu-bottom-nav :active="tabActive">
        <mu-bottom-nav-item icon="restore" @click="tabClick" title="Recents"></mu-bottom-nav-item>
        <mu-bottom-nav-item icon="favorite" @click="tabClick" title="Favorite"></mu-bottom-nav-item>
        <mu-bottom-nav-item icon="info" @click="tabClick" title="Info"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-paper>
    <!-- <mu-dialog title="test"  @overlayClick="open = false" v-if="open" message="this is test msg">
      <mu-flat-button label="cancel" slot="actions" primary/>
    </mu-dialog> -->
    <!-- <mu-toast  v-if="snackbar" @close="close()" message="啦啦啦"/> -->
    <!-- <mu-snackbar message="啦啦啦" action="啦啦啦啦"/> -->
    <mu-actionsheet v-if="open" @overlayClick="open = false" >
      <mu-sub-header>Sub Header</mu-sub-header>
      <mu-menu-item disabled title="menu1"/>
      <mu-menu-item title="menu2">
        <mu-badge secondary content="12"></mu-badge>
      </mu-menu-item>
      <mu-menu-item title="menu3"/>
      <mu-divider/>
      <mu-menu-item title="menu4"/>
    </mu-actionsheet>
    <mu-popover v-if="popover" :trigger="trigger" @close="closePopover">
      <mu-menu :value="1">
        <mu-sub-header>Sub Header</mu-sub-header>
        <mu-menu-item disabled title="menu1"/>
        <mu-menu-item :value="1" title="menu2">
          <mu-badge secondary content="12"></mu-badge>
        </mu-menu-item>
        <mu-menu-item title="menu3"/>
        <mu-divider/>
        <mu-menu-item title="menu4"/>
      </mu-menu>
    </mu-popover>
  </div>
</template>

<script>
export default {
  data () {
    return {
      refreshing: false,
      loading: false,
      tabActive: 1,
      active: 0,
      open: false,
      snackbar: true,
      popover: false,
      trigger: null
    }
  },
  methods: {
    refresh () {
      this.refreshing = true
      setTimeout(() => {
        this.refreshing = false
      }, 2000)
    },
    load () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    tabClick (value) {
      this.tabActive = value
    },
    handlerChange (value) {
      this.active = value
    },
    openDialog () {
      this.open = true
    },
    close () {
      this.snackbar = false
      setTimeout(() => {
        this.snackbar = true
      }, 2000)
    },
    showPopover (e) {
      this.popover = true
      this.trigger = e.target
    },
    closePopover () {
      this.popover = false
    }
  }
}
</script>

<style lang="css">
.demo-paper{
display: inline-block;
}
</style>
