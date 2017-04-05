<template>
<div class="content-wrapper">
  <markdown-element :text="$t('title')"/>
  <mu-paper :class="['theme-' + theme, 'demo-theme-paper']">
    <mu-tabs :value="theme" @change="changeTheme">
      <mu-tab title="DEFAULT" value="default"/>
      <mu-tab title="LIGHT" value="light"/>
      <mu-tab title="DARK" value="dark"/>
      <mu-tab title="CARBON" value="carbon"/>
      <mu-tab title="TEAL" value="teal"/>
    </mu-tabs>
    <mu-row>
      <mu-col class="demo-theme-group" width="100" desktop="33" tablet="33">
        <div class="demo-theme-item center">
          <mu-avatar icon="star" :size="56"/>
        </div>
        <div class="demo-theme-item center">
          <mu-raised-button label="secondary" secondary/>
        </div>
        <div class="demo-theme-item center">
          <mu-raised-button label="primary" primary/>
        </div>
        <div class="demo-theme-item center">
          <mu-raised-button label="default"/>
        </div>
      </mu-col>
      <mu-col class="demo-theme-group" width="100" desktop="33" tablet="33">
        <div class="demo-theme-item">
          <mu-checkbox label="checkbox"/><br/>
          <mu-checkbox label="disabled checkbox" disabled/>
        </div>
        <div class="demo-theme-item">
          <mu-radio name="radio_group" nativeValue="1" label="radio1"/><br/>
          <mu-radio name="radio_group" nativeValue="2" label="radio2"/><br/>
          <mu-radio label="disabled radio" nativeValue="3"  disabled/>
        </div>
        <div class="demo-theme-item">
          <mu-switch label="switch"/><br/>
          <mu-switch label="disabled switch"  disabled/>
        </div>
      </mu-col>
      <mu-col class="demo-theme-group" width="100" desktop="33" tablet="33">
        <div class="demo-theme-item">
          <mu-text-field hintText="Text Field" style="width: 100%"/>
        </div>
        <div class="demo-theme-item">
          <mu-date-picker hintText="Landspace Dialog" style="width: 100%; overflow:hidden;"/>
        </div>
        <div class="demo-theme-item">
          <mu-dropDown-menu :value="dropDown" @change="changeDropDown" style="width: 100%;">
            <mu-menu-item :value="1" title="Never" />
            <mu-menu-item :value="2" title="Every Night" />
            <mu-menu-item :value="3" title="Weeknights" />
            <mu-menu-item :value="4" title="Weekends" />
            <mu-menu-item :value="5" title="Weekly" />
          </mu-dropDown-menu>
        </div>
      </mu-col>
    </mu-row>
    <div class="demo-theme-group-slider">
      <mu-slider :value="30"/>
    </div>
    <mu-row>
      <mu-col class="demo-theme-group" width="100" desktop="33" tablet="33">
        <div class="demo-theme-item">
          <mu-flat-button label="VIEW DIALOG" @click="openDialog"/>
        </div>
      </mu-col>
      <mu-col class="demo-theme-group" width="100" desktop="33" tablet="33">
        <div class="demo-theme-item">
          <mu-flat-button label="VIEW DRAWER" @click="toggleDrawer"/>
        </div>
      </mu-col>
      <mu-col class="demo-theme-group" width="100" desktop="33" tablet="33">
        <div class="demo-theme-item">
          <mu-flat-button label="VIEW SNACKBAR" @click="showSnackbar"/>
        </div>
      </mu-col>
    </mu-row>
    <mu-dialog :open="dialog" title="Dialog" @close="closeDialog">
      {{$t('dialogDesc')}}
      <mu-flat-button slot="actions" @click="closeDialog" primary :label="$t('cancel')"/>
      <mu-flat-button slot="actions" primary @click="closeDialog" :label="$t('ok')"/>
    </mu-dialog>
    <mu-drawer :open="drawer" :docked="false" @close="toggleDrawer()">
      <mu-menu @itemClick="toggleDrawer()">
        <mu-menu-item title="Menu Item 1"/>
        <mu-menu-item title="Menu Item 2"/>
        <mu-menu-item title="Menu Item 3"/>
      </mu-menu>
    </mu-drawer>
    <mu-snackbar v-if="snackbar" :message="$t('snackbarDesc')" :action="$t('close')" @actionClick="hideSnackbar" @close="hideSnackbar"/>
  </mu-paper>
  <markdown-element :text="$t('themeDoc')"/>
</div>
</template>

<script>
import _default from 'raw!less!../../assets/themes/theme-default.less'
import light from 'raw!less!../../assets/themes/theme-light.less'
import dark from 'raw!less!../../assets/themes/theme-dark.less'
import carbon from 'raw!less!../../assets/themes/theme-carbon.less'
import teal from 'raw!less!../../assets/themes/theme-teal.less'
import zh from './zh'
import en from './en'

const themes = {
  light,
  dark,
  carbon,
  teal,
  default: _default
}
let theme = 'default'
export default {
  data () {
    return {
      dialog: false,
      drawer: false,
      snackbar: false,
      dropDown: 3,
      theme: theme
    }
  },
  methods: {
    changeDropDown (val) {
      this.dropDown = val
    },
    showSnackbar () {
      this.snackbar = true
      if (this.snackTimer) clearTimeout(this.snackTimer)
      this.snackTimer = setTimeout(() => { this.snackbar = false }, 2000)
    },
    hideSnackbar () {
      this.snackbar = false
      if (this.snackTimer) clearTimeout(this.snackTimer)
    },
    toggleDrawer () {
      this.drawer = !this.drawer
    },
    openDialog () {
      this.dialog = true
    },
    closeDialog () {
      this.dialog = false
    },
    changeTheme (val) {
      this.theme = theme = val
      const styleEl = this.getThemeStyle()
      styleEl.innerHTML = themes[theme] || ''
    },
    getThemeStyle () {
      const themeId = 'muse-theme'
      let styleEl = document.getElementById(themeId)
      if (styleEl) return styleEl
      styleEl = document.createElement('style')
      styleEl.id = themeId
      document.body.appendChild(styleEl)
      return styleEl
    }
  },
  locales: {
    zh,
    en
  }
}
</script>

<style lang="less">
.demo-theme-paper {
  margin-top: 16px;
  margin-bottom: 16px;
}
.demo-theme-group{
  margin-top: 16px;
  padding: 0 50px;
}

.demo-theme-item {
  margin-bottom: 16px;
  min-height: 24px;
  text-align: left;
  &.center {
    text-align: center;
  }
}

.demo-theme-group-slider {
  padding: 24px 50px 48px;
}

</style>
