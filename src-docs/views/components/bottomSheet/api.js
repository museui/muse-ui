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
    desc: 'slots.default'
  }],
  events: [{
    name: 'close',
    desc: 'events.close'
  }, {
    name: 'show',
    desc: 'events.show'
  }, {
    name: 'hide',
    desc: 'events.hide'
  }]
}
