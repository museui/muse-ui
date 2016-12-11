export default {
  props: [{
    name: 'visibleItemCount',
    type: 'Number',
    default: '5',
    desc: 'props.visibleItemCount'
  }, {
    name: 'values',
    type: 'Array',
    default: '[]',
    desc: 'props.values'
  }, {
    name: 'slots',
    type: 'Array',
    default: '[]',
    desc: 'props.slots'
  }],
  events: [{
    name: 'change',
    desc: 'events.change'
  }]
}
