export default {
  props: [{
    name: 'mode',
    type: 'String',
    default: 'indeterminate',
    desc: 'props.mode'
  }, {
    name: 'value',
    type: 'Number',
    default: '',
    desc: 'props.value'
  }, {
    name: 'max',
    type: 'Number',
    default: '100',
    desc: 'props.max'
  }, {
    name: 'min',
    type: 'Number',
    default: '0',
    desc: 'props.min'
  }, {
    name: 'size',
    type: 'Number',
    default: '',
    desc: 'props.size'
  }, {
    name: 'strokeWidth',
    type: 'Number',
    default: '3',
    desc: 'props.strokeWidth'
  }, {
    name: 'color',
    type: 'String',
    default: '',
    desc: 'props.color'
  }]
}
