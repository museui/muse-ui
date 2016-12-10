export default {
  props: [{
    name: 'content',
    type: 'String',
    default: '',
    desc: 'props.content'
  }, {
    name: 'color',
    type: 'String',
    default: '',
    desc: 'props.color'
  }, {
    name: 'primary',
    type: 'Boolean',
    default: 'false',
    desc: 'props.primary'
  }, {
    name: 'secondary',
    type: 'Boolean',
    default: 'false',
    desc: 'props.secondary'
  }, {
    name: 'circle',
    type: 'Boolean',
    default: 'false',
    desc: 'props.circle'
  }, {
    name: 'badgeClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.badgeClass'
  }],
  slots: [{
    name: 'content',
    desc: 'slots.content'
  }, {
    name: 'default',
    desc: 'slots.default'
  }]
}
