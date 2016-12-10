export default {
  props: [{
    name: 'showDelete',
    type: 'Boolean',
    default: 'false',
    desc: 'props.showDelete'
  }, {
    name: 'deleteIconClass',
    type: 'String',
    default: '',
    desc: 'props.deleteIconClass'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: 'props.disabled'
  }, {
    name: 'backgroundColor',
    type: 'String',
    default: '',
    desc: 'props.backgroundColor'
  }, {
    name: 'color',
    type: 'String',
    default: '',
    desc: 'props.color'
  }],
  slots: [{
    name: 'default',
    desc: 'slots.default'
  }],
  events: [{
    name: 'delete',
    desc: 'events.delete'
  }, {
    name: 'click',
    desc: 'events.click'
  }]
}
