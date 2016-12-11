import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: '这里的 `value` 和 `change` 事件都是必须的',
  props: {
    autoWidth: '是否自动计算菜单宽度',
    maxHeight: '菜单最大高度',
    multiple: '是否可以多选',
    disabled: '设置为 `true`， 将不可使用',
    openImmediately: '是否在初始化的时候打开菜单',
    anchorOrigin: '锚点的位置',
    scroller: '滚动的元素，会监听它的 `scroll` 事件, 在滚动时会不断更新弹出框的位置',
    labelClass: '文字样式，同 `class` 绑定方式一致',
    iconClass: '图标样式，同 `class` 绑定方式一致',
    menuClass: '菜单样式，同 `class` 绑定方式一致',
    menuListClass: '菜单列表部分样式，同 `class` 绑定方式一致',
    underlineClass: '底部横线样式，同 `class` 绑定方式一致'
  },
  slots: {
    default: '用来放置`menuItem` 、 `subHeader` 、 `divider` 等组件'
  },
  events: {
    change: '当value改变时触发事件，会传入新的 `value`',
    open: '菜单打开时事件',
    close: '菜单关闭时事件'
  }
}
