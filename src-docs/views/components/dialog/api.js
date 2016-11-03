export default {
  props: [{
    name: 'title',
    type: 'String',
    default: '',
    desc: '对话框的标题'
  }, {
    name: 'scrollable',
    type: 'Boolean',
    default: 'false',
    desc: '内容是否可以滚动'
  }],
  events: [{
    name: 'close',
    desc: '当点击遮盖层或者按下`esc`键时触发该事件，会传入一个 `reason` 作为参数，```javascript\n (reason) => console.log(reason)  \n```'
  }],
  slots: [{
    name: 'actions',
    desc: '用于放置底部操作按钮'
  }, {
    name: 'default',
    desc: '对话框的内容部分'
  }]
}
