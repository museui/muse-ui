export default {
  props: [{
    name: 'circle',
    type: 'Boolean',
    default: 'false',
    desc: 'props.circle'
  }, {
    name: 'rounded',
    type: 'Boolean',
    default: 'true',
    desc: 'props.rounded'
  }, {
    name: 'zDepth',
    type: 'Number',
    default: '1',
    desc: 'props.zDepth'
  }],
  slots: [{
    name: 'default',
    desc: 'slots.default'
  }]
}
