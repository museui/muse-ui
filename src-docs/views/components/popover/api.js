export default {
  props: [{
    name: 'trigger',
    type: 'Element',
    default: '',
    desc: '触发popover 的元素，需要根据此元素的位置计算弹出的位置'
  }, {
    name: 'scroller',
    type: 'HTMLDocument, Element, Window',
    default: 'window',
    desc: '滚动的元素，会监听它的 `scroll` 事件, 在滚动时会不断更新弹出框的位置'
  }, {
    name: 'autoPosition',
    type: 'Boolean',
    default: 'true',
    desc: '是否自动计算位置'
  }, {
    name: 'anchorOrigin',
    type: 'Object',
    default: '{vertical: \'bottom\',horizontal: \'left\'}',
    desc: '锚点的位置，会根据此点的位置计算弹出的位置'
  }, {
    name: 'targetOrigin',
    type: 'Object',
    default: '{vertical: \'top\',horizontal: \'left\'}',
    desc: '锚点相对于弹出内容的位置，根据位置计算弹出的位置'
  }, {
    name: 'overlay',
    type: 'Boolean',
    default: 'false',
    desc: '是否显示遮盖层'
  }, {
    name: 'overlayOpacity',
    type: 'Number',
    default: '0.01',
    desc: '遮盖层透明度'
  }, {
    name: 'overlayColor',
    type: 'String',
    default: '#000',
    desc: '遮盖层的位置'
  }],
  slots: [{
    name: 'default',
    desc: '内容部分'
  }],
  events: [{
    name: 'close',
    desc: '当需要关闭时触发此事件，会传入一个 `reason` （关闭的原因） 作为参数， \n * overlay: 点击了遮盖层; \n * overflow: 滚动出窗口范围; \n * clickOutSide: 点击了其它地方; \n * esc: 按下 `ESC` 键.'
  }]
}
