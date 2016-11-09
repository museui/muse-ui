export default {
  props: [{
    name: 'popupTransition',
    type: 'String',
    default: '',
    desc: '弹出层的过度动画效果, 默认使用内置的 popup-slide'
  }, {
    name: 'position',
    type: 'String',
    default: '',
    desc: '弹出位置 left, right, top, bottom'
  }, {
    name: 'overlay',
    type: 'Boolean',
    default: 'true',
    desc: '是否有遮盖层'
  }, {
    name: 'overlayColor',
    type: 'String',
    default: '#000',
    desc: '遮盖层颜色'
  }, {
    name: 'overlayOpacity',
    type: 'Number',
    default: '0.4',
    desc: '遮盖层透明度'
  }],
  slots: [{
    name: 'default',
    desc: '弹出层内容'
  }],
  events: [{
    name: 'close',
    desc: '当点击遮盖层或者按下`esc`键时触发该事件，会传入一个 `reason` 作为参数，```javascript\n (reason) => console.log(reason)  \n```'
  }]
}
