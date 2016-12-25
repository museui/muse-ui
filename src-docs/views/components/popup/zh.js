import description from './README.md'

export default {
  description,
  simpleExample: '使用示例',
  props: {
    open: '是否打开',
    popupClass: 'popup 样式, 同 `class` 绑定方式一致',
    popupTransition: '弹出层的过渡动画效果, 默认使用内置的 popup-slide',
    position: '弹出位置 left, right, top, bottom',
    overlay: '是否有遮盖层',
    overlayColor: '遮盖层颜色',
    overlayOpacity: '遮盖层透明度'
  },
  slots: {
    default: '弹出层内容'
  },
  events: {
    close: '当点击遮盖层或者按下`esc`键时触发该事件，会传入一个 `reason` 作为参数，```javascript\n (reason) => console.log(reason)  \n```',
    show: '当 popup 显示时(动画完成后)触发事件',
    hide: '当 popup 隐藏时(动画完成后)触发事件'
  }
}
