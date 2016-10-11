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
    <mu-content-block>
      <mu-raised-button label="toggle drawer" @click="toggle"></mu-raised-button>
    </mu-content-block>
    <!-- <mu-dropDown-menu :value="dropDownMenu" @change="change" openImmediately>
      <mu-menu-item  title="Item 1" :value="1"/>
      <mu-menu-item  title="Item 2" :value="2"/>
      <mu-menu-item  title="Item 3" :value="3"/>
      <mu-menu-item  title="Item 4" :value="4"/>
      <mu-menu-item  title="Item 5" :value="5"/>
    </mu-dropDown-menu> -->
    <mu-drawer :open="open" :docked="false" @close="close">

    </mu-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: false
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    },
    close () {
      this.open = false
    }
  }
}
</script>

<style lang="css">
.demo-paper{
display: inline-block;
}
</style>
