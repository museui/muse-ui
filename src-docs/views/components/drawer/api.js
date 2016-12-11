export default {
  props: [{
    name: 'width',
    type: 'Number, String',
    default: '',
    desc: 'props.width'
  }, {
    name: 'zDepth',
    type: 'Number',
    default: '2',
    desc: 'props.zDepth'
  }, {
    name: 'open',
    type: 'Boolean',
    default: 'false',
    desc: 'props.open'
  }, {
    name: 'docked',
    type: 'Boolean',
    default: 'true',
    desc: 'props.docked'
  }, {
    name: 'right',
    type: 'Boolean',
    default: 'false',
    desc: 'props.right'
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
  }],
  slots: [{
    name: 'default',
    desc: 'slots.default'
  }]
}
