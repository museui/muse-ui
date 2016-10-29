import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = resolve => {
  require.ensure(['./views/index.vue'], () => {
    resolve(require('./views/index.vue'))
  })
}

const Install = resolve => {
  require.ensure(['./views/get-stared/install.vue'], () => {
    resolve(require('./views/get-stared/install.vue'))
  })
}

const Usage = resolve => {
  require.ensure(['./views/get-stared/usage.vue'], () => {
    resolve(require('./views/get-stared/usage.vue'))
  })
}

const AppBar = resolve => {
  require.ensure(['./views/components/appbar/index.vue'], () => {
    resolve(require('./views/components/appbar/index.vue'))
  })
}

const router = new Router({
  mode: 'hash',
  routes: [
    { path: '/index', component: Index },
    { path: '/install', title: '快速开始-安装', component: Install },
    { path: '/usage', title: '快速开始-使用', component: Usage },
    { path: '/appbar', title: '组件-AppBar', component: AppBar },
    { path: '*', redirect: '/index' }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0) // scroll to top
  next()
})
export default router
