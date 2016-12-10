export default {
  props: [{
    name: 'backgroundColor',
    type: 'String',
    default: '',
    desc: 'props.backgroundColor'
  }, {
    name: 'color',
    type: 'String',
    default: '',
    desc: 'props.color'
  }, {
    name: 'src',
    type: 'String',
    default: '',
    desc: 'props.src'
  }, {
    name: 'imgClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.imgClass'
  }, {
    name: 'icon',
    type: 'String',
    default: '',
    desc: 'props.icon'
  }, {
    name: 'iconClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.iconClass'
  }, {
    name: 'iconSize',
    type: 'Number',
    default: '',
    desc: 'props.iconSize'
  }, {
    name: 'size',
    type: 'Number',
    default: '',
    desc: 'props.size'
  }],
  slots: [{
    name: 'default',
    desc: 'slots.default'
  }]
}
