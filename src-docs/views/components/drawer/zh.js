import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: '使用 `open` 参数控制显示, `docked` 默认为 true,这个时候不会显示遮盖层，点击菜单也不会关闭',
  rightExample: '打开右边的 Drawer',
  props: {
    width: 'drawer 的宽度',
    zDepth: '阴影的深度',
    open: '是否打开',
    docked: '是否固定 drawer， 设为 `true`， 将不会显示遮盖层，也不会触发 `close` 事件',
    right: '是否从右边弹出'
  },
  events: {
    close: '当点击遮盖层或者按下`esc`键时触发该事件，会传入一个 `reason` 作为参数，```javascript\n (reason) => console.log(reason)  \n```',
    show: '当 drawer 弹出时(动画完成后)触发事件',
    hide: '当 drawer 隐藏时(动画完成后)触发事件'
  },
  slots: {
    default: 'drawer 的内容放置'
  }
}
