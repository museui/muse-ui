export default {
  props: [{
    name: 'open',
    type: 'Boolean',
    default: 'false',
    desc: '是否打开'
  }, {
    name: 'dialogClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'dialog 样式, 同 `class` 绑定方式一致'
  }, {
    name: 'title',
    type: 'String',
    default: '',
    desc: '对话框的标题'
  }, {
    name: 'titleClass',
    type: 'String,Object,Array',
    default: '',
    desc: '标题栏样式, 同 `class` 绑定方式一致'
  }, {
    name: 'bodyClass',
    type: 'String,Object,Array',
    default: '',
    desc: '内容区样式, 同 `class` 绑定方式一致'
  }, {
    name: 'actionsContainerClass',
    type: 'String,Object,Array',
    default: '',
    desc: '操作按钮容器样式, 同 `class` 绑定方式一致'
  }, {
    name: 'scrollable',
    type: 'Boolean',
    default: 'false',
    desc: '内容是否可以滚动'
  }],
  events: [{
    name: 'close',
    desc: '当点击遮盖层或者按下`esc`键时触发该事件，会传入一个 `reason` 作为参数，```javascript\n (reason) => console.log(reason)  \n```'
  }, {
    name: 'show',
    desc: '当 dialog 显示时(动画完成后)触发事件'
  }, {
    name: 'hide',
    desc: '当 dialog 隐藏时(动画完成后)触发事件'
  }],
  slots: [{
    name: 'title',
    desc: '用于自定义标题栏'
  }, {
    name: 'actions',
    desc: '用于放置底部操作按钮'
  }, {
    name: 'default',
    desc: '对话框的内容部分'
  }]
}
