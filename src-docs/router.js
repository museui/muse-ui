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

const Dialog = resolve => {
  require.ensure(['./views/components/dialog/index.vue'], () => {
    resolve(require('./views/components/dialog/index.vue'))
  })
}

const Divider = resolve => {
  require.ensure(['./views/components/divider/index.vue'], () => {
    resolve(require('./views/components/divider/index.vue'))
  })
}

const Drawer = resolve => {
  require.ensure(['./views/components/drawer/index.vue'], () => {
    resolve(require('./views/components/drawer/index.vue'))
  })
}

const GridList = resolve => {
  require.ensure(['./views/components/gridList/index.vue'], () => {
    resolve(require('./views/components/gridList/index.vue'))
  })
}

const Icon = resolve => {
  require.ensure(['./views/components/icon/index.vue'], () => {
    resolve(require('./views/components/icon/index.vue'))
  })
}

const LinearProgress = resolve => {
  require.ensure(['./views/components/linearProgress/index.vue'], () => {
    resolve(require('./views/components/linearProgress/index.vue'))
  })
}

const List = resolve => {
  require.ensure(['./views/components/list/index.vue'], () => {
    resolve(require('./views/components/list/index.vue'))
  })
}

const Menu = resolve => {
  require.ensure(['./views/components/menu/index.vue'], () => {
    resolve(require('./views/components/menu/index.vue'))
  })
}

const IconMenu = resolve => {
  require.ensure(['./views/components/iconMenu/index.vue'], () => {
    resolve(require('./views/components/iconMenu/index.vue'))
  })
}

const DropDownMenu = resolve => {
  require.ensure(['./views/components/dropDownMenu/index.vue'], () => {
    resolve(require('./views/components/dropDownMenu/index.vue'))
  })
}

const Paper = resolve => {
  require.ensure(['./views/components/paper/index.vue'], () => {
    resolve(require('./views/components/paper/index.vue'))
  })
}

const Popover = resolve => {
  require.ensure(['./views/components/popover/index.vue'], () => {
    resolve(require('./views/components/popover/index.vue'))
  })
}

const SelectField = resolve => {
  require.ensure(['./views/components/selectField/index.vue'], () => {
    resolve(require('./views/components/selectField/index.vue'))
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
    { path: '/dialog', title: '组件-Dialog', component: Dialog },
    { path: '/divider', title: '组件-Divider', component: Divider },
    { path: '/drawer', title: '组件-Drawer', component: Drawer },
    { path: '/gridList', title: '组件-GridList', component: GridList },
    { path: '/icon', title: '组件-Icon', component: Icon },
    { path: '/linearProgress', title: '组件-LinearProgress', component: LinearProgress },
    { path: '/list', title: '组件-List', component: List },
    { path: '/menu', title: '组件-Menu', component: Menu },
    { path: '/iconMenu', title: '组件-IconMenu', component: IconMenu },
    { path: '/dropDownMenu', title: '组件-DropDownMenu', component: DropDownMenu },
    { path: '/paper', title: '组件-Paper', component: Paper },
    { path: '/popover', title: '组件-Popover', component: Popover },
    { path: '/selectField', title: '组件-SelectField', component: SelectField },
    { path: '*', redirect: '/index' }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0) // scroll to top
  next()
})
export default router
