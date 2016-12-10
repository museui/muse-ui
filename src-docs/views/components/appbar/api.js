export default {
  props: [{
    name: 'title',
    type: 'String',
    desc: 'props.title'
  }, {
    name: 'titleClass',
    type: 'String,Object,Array',
    desc: 'props.titleClass'
  }, {
    name: 'zDepth',
    type: 'Number',
    default: '1',
    desc: 'props.zDepth'
  }],
  slots: [{
    name: 'left',
    desc: 'slots.left'
  }, {
    name: 'right',
    desc: 'slots.right'
  }, {
    name: 'default',
    desc: 'slots.default'
  }]
}
