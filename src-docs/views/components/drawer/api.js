export default {
  props: [{
    name: 'width',
    type: 'Number, String',
    default: '',
    desc: 'drawer 的宽度'
  }, {
    name: 'zDepth',
    type: 'Number',
    default: '2',
    desc: '阴影的深度'
  }, {
    name: 'open',
    type: 'Boolean',
    default: 'false',
    desc: '是否打开'
  }, {
    name: 'docked',
    type: 'Boolean',
    default: 'true',
    desc: '是否固定 drawer， 设为 `true`， 将不会显示遮盖层，也不会触发 `close` 事件'
  }, {
    name: 'right',
    type: 'Boolean',
    default: 'false',
    desc: '是否从右边弹出'
  }],
  events: [{
    name: 'close',
    desc: '当点击遮盖层或者按下`esc`键时触发该事件，会传入一个 `reason` 作为参数，```javascript\n (reason) => console.log(reason)  \n```'
  }, {
    name: 'show',
    desc: '当 drawer 弹出时(动画完成后)触发事件'
  }, {
    name: 'hide',
    desc: '当 drawer 隐藏时(动画完成后)触发事件'
  }],
  slots: [{
    name: 'default',
    desc: 'drawer 的内容放置'
  }]
}
