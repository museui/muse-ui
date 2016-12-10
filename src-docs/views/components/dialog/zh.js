import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: '每个 `dialog` 的显示和关闭都在外部使用 `v-if` 控制，当点击遮盖层或者敲下 `esc` 键，都会触发 `close` 事件',
  alertExample: 'Alert',
  alertExampleDesc: '可以不监听 `close` 事件，使其只能通过点击确定按钮关闭',
  scrollExample: '可滚动的对话框',
  props: {
    open: '是否打开',
    dialogClass: 'dialog 样式, 同 `class` 绑定方式一致',
    title: '对话框的标题',
    titleClass: '标题栏样式, 同 `class` 绑定方式一致',
    bodyClass: '内容区样式, 同 `class` 绑定方式一致',
    actionsContainerClass: '操作按钮容器样式, 同 `class` 绑定方式一致',
    scrollable: '内容是否可以滚动'
  },
  slots: {
    title: '用于自定义标题栏',
    actions: '用于放置底部操作按钮',
    default: '对话框的内容部分'
  },
  events: {
    close: '当点击遮盖层或者按下`esc`键时触发该事件，会传入一个 `reason` 作为参数，```javascript\n (reason) => console.log(reason)  \n```',
    show: '当 dialog 显示时(动画完成后)触发事件',
    hide: '当 dialog 隐藏时(动画完成后)触发事件'
  }
}
