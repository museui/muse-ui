import Vue from 'vue'
import MuseUI from 'muse-ui'
import './assets/font-icons/style.css'
import App from './App.vue'
import markdownElement from './components/markdownElement'
import codeExample from './components/codeExample'
import apiView from './components/apiView'
import router from './router'
import FastClick from 'fastclick'
import './i18n'

Vue.use(MuseUI)
Vue.component('markdown-element', markdownElement)
Vue.component('code-example', codeExample)
Vue.component('api-view', apiView)
FastClick.attach(document.body)

/*eslint-disable*/
new Vue({
  router,
  ...App
}).$mount('#app')
