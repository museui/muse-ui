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

const AutoComplete = resolve => {
  require.ensure(['./views/components/autoComplete/index.vue'], () => {
    resolve(require('./views/components/autoComplete/index.vue'))
  })
}

const Avatar = resolve => {
  require.ensure(['./views/components/avatar/index.vue'], () => {
    resolve(require('./views/components/avatar/index.vue'))
  })
}

const Badge = resolve => {
  require.ensure(['./views/components/badge/index.vue'], () => {
    resolve(require('./views/components/badge/index.vue'))
  })
}

const BottomNav = resolve => {
  require.ensure(['./views/components/bottomNav/index.vue'], () => {
    resolve(require('./views/components/bottomNav/index.vue'))
  })
}

const BottomSheet = resolve => {
  require.ensure(['./views/components/bottomSheet/index.vue'], () => {
    resolve(require('./views/components/bottomSheet/index.vue'))
  })
}

const FlatButton = resolve => {
  require.ensure(['./views/components/flatButton/index.vue'], () => {
    resolve(require('./views/components/flatButton/index.vue'))
  })
}

const RaisedButton = resolve => {
  require.ensure(['./views/components/raisedButton/index.vue'], () => {
    resolve(require('./views/components/raisedButton/index.vue'))
  })
}

const IconButton = resolve => {
  require.ensure(['./views/components/iconButton/index.vue'], () => {
    resolve(require('./views/components/iconButton/index.vue'))
  })
}

const FloatButton = resolve => {
  require.ensure(['./views/components/floatButton/index.vue'], () => {
    resolve(require('./views/components/floatButton/index.vue'))
  })
}

const Card = resolve => {
  require.ensure(['./views/components/card/index.vue'], () => {
    resolve(require('./views/components/card/index.vue'))
  })
}

const Chip = resolve => {
  require.ensure(['./views/components/chip/index.vue'], () => {
    resolve(require('./views/components/chip/index.vue'))
  })
}

const DatePicker = resolve => {
  require.ensure(['./views/components/datePicker/index.vue'], () => {
    resolve(require('./views/components/datePicker/index.vue'))
  })
}

const router = new Router({
  mode: 'hash',
  routes: [
    { path: '/index', component: Index },
    { path: '/install', title: '快速开始-安装', component: Install },
    { path: '/usage', title: '快速开始-使用', component: Usage },
    { path: '/appbar', title: '组件-AppBar', component: AppBar },
    { path: '/autoComplete', title: '组件-AutoComplete', component: AutoComplete },
    { path: '/avatar', title: '组件-Avatar', component: Avatar },
    { path: '/badge', title: '组件-Badge', component: Badge },
    { path: '/bottomNav', title: '组件-BottomNavigation', component: BottomNav },
    { path: '/bottomSheet', title: '组件-BottomSheet', component: BottomSheet },
    { path: '/flatButton', title: '组件-FlatButton', component: FlatButton },
    { path: '/raisedButton', title: '组件-RaisedButton', component: RaisedButton },
    { path: '/iconButton', title: '组件-IconButton', component: IconButton },
    { path: '/floatButton', title: '组件-FloatActionButton', component: FloatButton },
    { path: '/card', title: '组件-Card', component: Card },
    { path: '/chip', title: '组件-Chip', component: Chip },
    { path: '/datePicker', title: '组件-DatePicker', component: DatePicker },
    { path: '*', redirect: '/index' }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0) // scroll to top
  next()
})
export default router
