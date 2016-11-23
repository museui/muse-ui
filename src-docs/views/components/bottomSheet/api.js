export default {
  props: [{
    name: 'open',
    type: 'Boolean',
    default: 'false',
    desc: '是否打开'
  }, {
    name: 'sheetClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'bottomSheet 样式, 同 `class` 绑定方式一致'
  }, {
    name: 'overlay',
    type: 'Boolean',
    default: 'true',
    desc: '是否显示遮盖层'
  }, {
    name: 'overlayColor',
    type: 'String',
    default: '#000',
    desc: '遮盖层的颜色'
  }, {
    name: 'overlayOpacity',
    type: 'Number',
    default: '0.4',
    desc: '遮盖层的透明度'
  }],
  slots: [{
    name: 'default',
    desc: '用于放置弹出内容'
  }],
  events: [{
    name: 'close',
    desc: '当点击遮盖层或者按 esc建触发，会触发close的动作作为参数传入，(reason) => {if(reason == \'overlay\') {// 执行关闭动作}} '
  }, {
    name: 'show',
    desc: '当 bottomSheet 弹出时(动画完成后)触发事件'
  }, {
    name: 'hide',
    desc: '当 bottomSheet 隐藏时(动画完成后)触发事件'
  }]
}
