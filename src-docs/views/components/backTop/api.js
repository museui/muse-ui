export default {
  props: [{
    name: 'height',
    type: 'Number',
    default: '200',
    desc: 'props.height'
  }, {
    name: 'bottom',
    type: 'Number',
    default: '30',
    desc: 'props.bottom'
  }, {
    name: 'right',
    type: 'Number',
    default: '30',
    desc: 'props.right'
  }, {
    name: 'duration',
    type: 'Number',
    default: '500',
    desc: 'props.duration'
  }],
  events: [{
    name: 'callBack',
    desc: 'events.callBack'
  }],
  slots: [{
    name: 'default',
    desc: 'slots.default'
  }]
}
