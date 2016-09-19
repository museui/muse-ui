import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'
import MuseUI from '../src'
Vue.use(MuseUI)
FastClick.attach(document.body)
/*eslint-disable*/
new Vue({
  router,
  ...App
}).$mount('#app')
