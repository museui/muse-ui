export default {
  props: [{
    name: 'open',
    type: 'Boolean',
    default: 'false',
    desc: '是否打开'
  }, {
    name: 'popupClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'popup 样式, 同 `class` 绑定方式一致'
  }, {
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
  }, {
    name: 'show',
    desc: '当 popup 显示时(动画完成后)触发事件'
  }, {
    name: 'hide',
    desc: '当 popup 隐藏时(动画完成后)触发事件'
  }]
}
