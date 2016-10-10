<template>
  <div class="">
    <mu-paper>
      <mu-appbar title="Muse UI">
        <mu-icon-menu :value="1" slot="left" icon="menu">
          <mu-sub-header>Sub Header</mu-sub-header>
          <mu-menu-item disabled title="menu1"/>
          <mu-menu-item :value="1" title="menu2">
            <mu-badge slot="after" secondary content="12"></mu-badge>
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
    <mu-dropDown-menu :value="dropDownMenu" @change="change" openImmediately>
      <mu-menu-item  title="Item 1" :value="1"/>
      <mu-menu-item  title="Item 2" :value="2"/>
      <mu-menu-item  title="Item 3" :value="3"/>
      <mu-menu-item  title="Item 4" :value="4"/>
      <mu-menu-item  title="Item 5" :value="5"/>
    </mu-dropDown-menu>
    <!-- <mu-paper>
      <mu-bottom-nav :active="tabActive">
        <mu-bottom-nav-item icon="restore" @click="tabClick" title="Recents"></mu-bottom-nav-item>
        <mu-bottom-nav-item icon="favorite" @click="tabClick" title="Favorite"></mu-bottom-nav-item>
        <mu-bottom-nav-item icon="info" @click="tabClick" title="Info"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-paper> -->
    <!-- <mu-dialog title="test"  @overlayClick="open = false" v-if="open" message="this is test msg">
      <mu-flat-button label="cancel" slot="actions" primary/>
    </mu-dialog> -->
    <!-- <mu-toast  v-if="snackbar" @close="close()" message="啦啦啦"/> -->
    <!-- <mu-snackbar message="啦啦啦" action="啦啦啦啦"/> -->
    <!-- <mu-actionsheet v-if="open" @overlayClick="open = false" >
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
          <mu-badge secondary slot="after" content="12"></mu-badge>
        </mu-menu-item>
        <mu-menu-item title="menu3"/>
        <mu-divider/>
        <mu-menu-item title="menu4"/>
      </mu-menu>
    </mu-popover> -->
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
      trigger: null,
      dropDownMenu: 1
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
    },
    change (value) {
      this.dropDownMenu = value
    }
  }
}
</script>

<style lang="css">
.demo-paper{
display: inline-block;
}
</style>
