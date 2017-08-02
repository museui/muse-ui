import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  customExample: '自定义弹出位置',
  props: {
    trigger: '触发popover 的元素，需要根据此元素的位置计算弹出的位置',
    open: '是否打开',
    popoverClass: 'popover 样式, 同 `class` 绑定方式一致',
    scroller: '滚动的元素，会监听它的 `scroll` 事件, 在滚动时会不断更新弹出框的位置',
    autoPosition: '是否自动计算位置',
    anchorOrigin: '锚点的位置，会根据此点的位置计算弹出的位置',
    targetOrigin: '锚点相对于弹出内容的位置，根据位置计算弹出的位置',
    overlay: '是否显示遮盖层',
    overlayOpacity: '遮盖层透明度',
    overlayColor: '遮盖层的色彩'
  },
  slots: {
    default: '内容部分'
  },
  events: {
    close: '当需要关闭时触发此事件，会传入一个 `reason` （关闭的原因） 作为参数， \n * overlay: 点击了遮盖层; \n * overflow: 滚动出窗口范围; \n * clickOutSide: 点击了其它地方; \n * esc: 按下 `ESC` 键.',
    show: '当 popover 显示时(动画完成后)触发事件',
    hide: '当 popover 隐藏时(动画完成后)触发事件'
  }
}
