<template>
  <div class="">
    <mu-paper>
      <mu-appbar title="Muse UI">
        <mu-icon-menu :maxHeight="250" :value="1" slot="left" icon="menu">
          <mu-sub-header>Sub Header</mu-sub-header>
          <mu-menu-item title="menu1"/>
          <mu-menu-item title="menu2">
            <mu-badge slot="after" secondary content="12"></mu-badge>
          </mu-menu-item>
          <mu-menu-item title="menu3"/>
          <mu-divider/>
          <mu-menu-item title="menu4"/>
          <mu-menu-item title="menu5"/>
          <mu-menu-item title="menu6"/>
          <mu-menu-item title="menu7"/>
          <mu-menu-item title="menu8"/>
          <mu-menu-item title="menu9"/>
          <mu-menu-item title="menu10"/>
        </mu-icon-menu>
        <mu-icon-button  slot="right" icon="refresh"></mu-icon-button>
      </mu-appbar>
    </mu-paper>
    <mu-content-block>
      <mu-linear-progress mode="determinate" :value="progress"/>
      <!-- <mu-raised-button label="show Snackbar" @click="show" fullWidth/>
      <mu-raised-button style="margin-top: 16px;" label="show toast" @click="toggle" fullWidth/> -->
    </mu-content-block>
    <!-- <mu-snackbar v-if="showTip" @close="close" message="This is test message" action="close" @actionClick="close"></mu-snackbar>
    <mu-toast v-if="toast" @close="toggle" message="This is test toast message"></mu-toast> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      showTip: false,
      toast: false,
      progress: 0
    }
  },
  mounted () {
    setInterval(() => this.autoProgress(), 1000)
  },
  methods: {
    autoProgress () {
      if (this.progress >= 100) {
        this.progress = 0
        return
      }
      this.progress += 10
    },
    show () {
      this.showTip = true
    },
    close () {
      this.showTip = false
    },
    toggle () {
      this.toast = !this.toast
    }
  }
}
</script>

<style lang="css">
.demo-paper{
display: inline-block;
}
</style>
