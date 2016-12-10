import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  props: {
    open: '是否打开',
    sheetClass: 'bottomSheet 样式, 同 `class` 绑定方式一致',
    overlay: '是否显示遮盖层',
    overlayColor: '遮盖层的颜色',
    overlayOpacity: '遮盖层的透明度'
  },
  slots: {
    default: '用于放置弹出内容'
  },
  events: {
    close: '当点击遮盖层或者按 esc建触发，会触发close的动作作为参数传入，(reason) => {if(reason == \'overlay\') {// 执行关闭动作}} ',
    show: '当 bottomSheet 弹出时(动画完成后)触发事件',
    hide: '当 bottomSheet 隐藏时(动画完成后)触发事件'
  }
}
