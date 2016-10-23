import Vue from 'vue'
import MuseUI from '../src'
import '../src/styles/themes/dark.less'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'
Vue.use(MuseUI)
FastClick.attach(document.body)
/*eslint-disable*/
new Vue({
  router,
  ...App
}).$mount('#app')
