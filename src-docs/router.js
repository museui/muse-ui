import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from './views'
export default new Router({
  mode: 'hash',
  routes: [
    { path: '/index', component: index },
    { path: '*', redirect: '/index' }
  ]
})
