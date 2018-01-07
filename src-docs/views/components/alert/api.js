export default {
  props: [{
    name: 'type',
    type: 'String',
    default: 'info',
    desc: 'props.type'
  }, {
    name: 'closeable',
    type: 'Boolean',
    default: 'false',
    desc: 'props.closeable'
  }, {
    name: 'showIcon',
    type: 'Boolean',
    default: 'false',
    desc: 'props.showIcon'
  }],
  events: [{
    name: 'close',
    desc: 'events.close'
  }],
  slots: [{
    name: 'default',
    desc: 'slots.default'
  }, {
    name: 'description',
    desc: 'slots.description'
  }, {
    name: 'close',
    desc: 'slots.close'
  }, {
    name: 'icon',
    desc: 'slots.icon'
  }]
}
