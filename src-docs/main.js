import Vue from 'vue'
import MuseUI from 'muse-ui'
import './assets/font-icons/style.css'
import App from './App.vue'
import markdownElement from './components/markdownElement'
import codeExample from './components/codeExample'
import router from './router'
import FastClick from 'fastclick'
Vue.use(MuseUI)
Vue.component('markdown-element', markdownElement)
Vue.component('code-example', codeExample)
FastClick.attach(document.body)
/*eslint-disable*/
new Vue({
  router,
  ...App
}).$mount('#app')
