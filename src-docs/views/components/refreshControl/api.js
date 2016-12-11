export default {
  props: [{
    name: 'trigger',
    type: 'Element',
    default: '',
    desc: 'props.trigger'
  }, {
    name: 'refreshing',
    type: 'Boolean',
    default: 'false',
    desc: 'props.refreshing'
  }],
  events: [{
    name: 'refresh',
    desc: 'events.refresh'
  }]
}
