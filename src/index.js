import './styles/base.less'
import Vue from 'vue'
import {retina} from './utils'
import icon from './icon'
import badge from './badge'
import appBar from './appBar'
import iconButton from './iconButton'
import flatButton from './flatButton'
import raisedButton from './raisedButton'
import floatButton from './floatButton'
import contentBlock from './contentBlock'
import * as list from './list'
import subHeader from './subHeader'
import divider from './divider'
import refreshControl from './refreshControl'
import infiniteScroll from './infiniteScroll'
import avatar from './avatar'
import * as tabs from './tabs'
import paper from './paper'
import * as bottomNav from './bottomNav'
import * as card from './card'
import chip from './chip'
import overlay from './internal/popup/overlay'
import dialog from './dialog'
import toast from './toast'
import snackbar from './snackbar'
import popup from './popup'
import * as menu from './menu'
import bottomSheet from './bottomSheet'
import popover from './popover'
import iconMenu from './iconMenu'
import dropDownMenu from './dropDownMenu'
import drawer from './drawer'
import picker from './picker'
import tooltip from './tooltip'

import textField from './textField'
import selectField from './selectField'
import checkbox from './checkbox'
import radio from './radio'
import _switch from './switch'
import slider from './slider'
import linearProgress from './linearProgress'
import circularProgress from './circularProgress'
import * as gridList from './gridList'
import * as table from './table'
import datePicker from './datePicker'
import timePicker from './timePicker'
import * as stepper from './stepper'
import autoComplete from './autoComplete'
import pagination from './pagination'

import * as grid from './grid'

import * as flexbox from './flexbox'
import tabContainer from './tab-container'
import tabContainerItem from './tab-container-item'
import config from './config'
const components = {
  icon,
  badge,
  appBar,
  iconButton,
  flatButton,
  raisedButton,
  floatButton,
  contentBlock,
  ...list,
  subHeader,
  divider,
  refreshControl,
  infiniteScroll,
  avatar,
  ...tabs,
  paper,
  ...bottomNav,
  ...card,
  chip,
  overlay,
  dialog,
  toast,
  snackbar,
  popup,
  ...menu,
  bottomSheet,
  popover,
  iconMenu,
  dropDownMenu,
  drawer,
  picker,
  tooltip,
  textField,
  selectField,
  checkbox,
  radio,
  _switch,
  slider,
  linearProgress,
  circularProgress,
  ...gridList,
  ...table,
  datePicker,
  timePicker,
  ...stepper,
  autoComplete,
  ...grid,
  ...flexbox,
  pagination,
  tabContainer,
  tabContainerItem
}

const install = function () {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
  retina()
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)
export default {
  config,
  install
}
export {
  config,
  install
}
