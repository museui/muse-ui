export default {
  props: [{
    name: 'open',
    type: 'Boolean',
    default: 'false',
    desc: 'props.open'
  }, {
    name: 'dialogClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.dialogClass'
  }, {
    name: 'title',
    type: 'String',
    default: '',
    desc: 'props.title'
  }, {
    name: 'titleClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.titleClass'
  }, {
    name: 'bodyClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.bodyClass'
  }, {
    name: 'actionsContainerClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.actionsContainerClass'
  }, {
    name: 'scrollable',
    type: 'Boolean',
    default: 'false',
    desc: 'props.scrollable'
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
    name: 'title',
    desc: 'slots.title'
  }, {
    name: 'actions',
    desc: 'slots.actions'
  }, {
    name: 'default',
    desc: 'slots.default'
  }]
}
