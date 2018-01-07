export default {
  props: [{
    name: 'name',
    type: 'String',
    default: '',
    desc: 'props.name'
  }, {
    name: 'max',
    type: 'Number',
    default: '100',
    desc: 'props.max'
  }, {
    name: 'min',
    type: 'Number',
    default: '100',
    desc: 'props.min'
  }, {
    name: 'step',
    type: 'Number',
    default: '0.1',
    desc: 'props.step'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: 'props.disabled'
  }, {
    name: 'value',
    type: 'Number',
    default: '0',
    desc: 'props.value'
  }, {
    name: 'display-value',
    type: 'Boolean',
    default: 'true',
    desc: 'props.displayValue'
  }],
  events: [{
    name: 'input',
    desc: 'events.input'
  }, {
    name: 'change',
    desc: 'events.change'
  }]
}
