import description from './README.md'

export default {
  description,
  simpleExample: '不同的菜单位置',
  simpleExampleDesc: '通过 `anchorOrigin` 和 `targetOrigin` 定义不同的菜单弹出的位置',
  controlExample: '控制菜单的选择和显示',
  controlExampleDesc: '通过 `open` 参数控制菜单显示， `value` 控制选择',
  scrollableExample: '可滚动的菜单',
  props: {
    icon: '显示的按钮的图标',
    iconClass: '图标样式，同 `class` 绑定方式一致',
    menuClass: '菜单样式，同 `class` 绑定方式一致',
    menuListClass: '菜单列表部分样式，同 `class` 绑定方式一致',
    multiple: '是否可以多选',
    desktop: '设置为 `true`, 菜单将被调整为桌面版的样式，缩小高度和调整padding',
    maxHeight: '最大高度，超出则显示滚动条',
    open: '是否显示菜单',
    itemClickClose: '是否在点击菜单项之后关闭',
    anchorOrigin: '锚点的位置',
    targetOrigin: '目标的的位置',
    scroller: '滚动的元素，会监听它的 `scroll` 事件, 在滚动时会不断更新弹出框的位置',
    tooltip: '工具提示文本',
    tooltipPosition: '提示文字文字, [垂直位置]-[水平位置]，垂直位置: top，middle, bottom; 水平位置: left, center, right',
    value: '设置以后菜单将为可选择的菜单，当菜单项的value 和 当前 value相等，则菜单项为被选中状态'
  },
  slots: {
    icon: '用来放置图标',
    default: '用来放置`menuItem` 、 `subHeader` 、 `divider` 等组件'
  },
  events: {
    itemClick: '当菜单项点击时触发事件,会传入 `menuItem` 组件对象',
    change: '当value改变时触发事件，会传入新的 `value`',
    open: '菜单打开时事件',
    close: '菜单关闭时事件'
  }
}
