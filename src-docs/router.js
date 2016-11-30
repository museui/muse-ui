import Vue from 'vue'
import Router from 'vue-router'
import Index from './views'
import Install from './views/get-stared/install'
import Usage from './views/get-stared/usage'
import ChangeLog from './views/more/changeLog'
import Contributing from './views/more/contributing'
import Colors from './views/customization/colors'
import Theme from './views/customization/theme'
import AppBar from './views/components/appbar'
import AutoComplete from './views/components/autoComplete'
import Avatar from './views/components/avatar'
import Badge from './views/components/badge'
import BottomNav from './views/components/bottomNav'
import BottomSheet from './views/components/bottomSheet'
import FlatButton from './views/components/flatButton'
import RaisedButton from './views/components/raisedButton'
import IconButton from './views/components/iconButton'
import FloatButton from './views/components/floatButton'
import Card from './views/components/card'
import Chip from './views/components/chip'
import DatePicker from './views/components/datePicker'
import Dialog from './views/components/dialog'
import Divider from './views/components/divider'
import Drawer from './views/components/drawer'
import GridList from './views/components/gridList'
import Icon from './views/components/icon'
import LinearProgress from './views/components/linearProgress'
import CircularProgress from './views/components/circularProgress'
import List from './views/components/list'
import Menu from './views/components/menu'
import IconMenu from './views/components/iconMenu'
import DropDownMenu from './views/components/dropDownMenu'
import Paper from './views/components/paper'
import Popover from './views/components/popover'
import SelectField from './views/components/selectField'
import Checkbox from './views/components/checkbox'
import Radio from './views/components/radio'
import Switch from './views/components/switch'
import Slider from './views/components/slider'
import SnackbarToast from './views/components/snackbarToast'
import Stepper from './views/components/stepper'
import SubHeader from './views/components/subHeader'
import Table from './views/components/table'
import Tabs from './views/components/tabs'
import TextField from './views/components/textField'
import TimePicker from './views/components/timePicker'
import Tooltip from './views/components/tooltip'
import ContentBlock from './views/components/contentBlock'
import Flexbox from './views/components/flexbox'
import Grid from './views/components/grid'
import InfiniteScroll from './views/components/infiniteScroll'
import Picker from './views/components/picker'
import Popup from './views/components/popup'
import RefreshControl from './views/components/refreshControl'
import Pagination from './views/components/pagination'
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    { path: '/index', component: Index },
    { path: '/install', title: '快速开始-安装', component: Install },
    { path: '/usage', title: '快速开始-使用', component: Usage },
    { path: '/changeLog', title: '更新日志', component: ChangeLog },
    { path: '/contributing', title: '贡献指南', component: Contributing },
    { path: '/colors', title: '颜色', component: Colors },
    { path: '/theme', title: '主题', component: Theme },
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
    { path: '/circularProgress', title: '组件-CircularProgress', component: CircularProgress },
    { path: '/list', title: '组件-List', component: List },
    { path: '/menu', title: '组件-Menu', component: Menu },
    { path: '/iconMenu', title: '组件-IconMenu', component: IconMenu },
    { path: '/dropDownMenu', title: '组件-DropDownMenu', component: DropDownMenu },
    { path: '/paper', title: '组件-Paper', component: Paper },
    { path: '/popover', title: '组件-Popover', component: Popover },
    { path: '/selectField', title: '组件-SelectField', component: SelectField },
    { path: '/checkbox', title: '组件-Checkbox', component: Checkbox },
    { path: '/radio', title: '组件-Radio', component: Radio },
    { path: '/switch', title: '组件-Switch', component: Switch },
    { path: '/slider', title: '组件-Slider', component: Slider },
    { path: '/snackbarToast', title: '组件-SnackbarToast', component: SnackbarToast },
    { path: '/stepper', title: '组件-Stepper', component: Stepper },
    { path: '/subHeader', title: '组件-SubHeader', component: SubHeader },
    { path: '/table', title: '组件-Table', component: Table },
    { path: '/tabs', title: '组件-Tabs', component: Tabs },
    { path: '/textField', title: '组件-TextField', component: TextField },
    { path: '/timePicker', title: '组件-TimePicker', component: TimePicker },
    { path: '/tooltip', title: '组件-Tooltip', component: Tooltip },
    { path: '/contentBlock', title: '组件-ContentBlock', component: ContentBlock },
    { path: '/flexbox', title: '组件-FlexBox', component: Flexbox },
    { path: '/grid', title: '组件-Grid', component: Grid },
    { path: '/infiniteScroll', title: '组件-InfiniteScroll', component: InfiniteScroll },
    { path: '/pagination', title: '组件-Pagination', component: Pagination },
    { path: '/picker', title: '组件-Picker', component: Picker },
    { path: '/popup', title: '组件-Popup', component: Popup },
    { path: '/refreshControl', title: '组件-RefreshControl', component: RefreshControl },
    { path: '*', redirect: '/index' }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0) // scroll to top
  next()
})
export default router
