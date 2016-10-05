import './styles/base.less'
import Vue from 'vue'
import {page, scrollView} from './scrollView'
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
import * as tabBar from './tabBar'
import paper from './paper'
import searchBar from './searchBar'
import * as bottomNav from './bottomNav'
import * as card from './card'
import chip from './chip'
import dialog from './dialog'
const components = {
  page,
  scrollView,
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
  ...tabBar,
  paper,
  searchBar,
  ...bottomNav,
  ...card,
  chip,
  dialog
}

export default {
  install () {
    Object.keys(components).forEach((key) => {
      Vue.component(components[key].name, components[key])
    })
    // 处理retina屏幕显示效果
    var classNames = []
    let pixelRatio = window.devicePixelRatio || 1
    classNames.push('pixel-ratio-' + Math.floor(pixelRatio))
    if (pixelRatio >= 2) {
      classNames.push('retina')
    }

    let html = document.getElementsByTagName('html')[0]

    classNames.forEach((className) => html.classList.add(className))
  }
}
