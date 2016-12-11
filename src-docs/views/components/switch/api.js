export default {
  props: [{
    name: 'label',
    type: 'String',
    default: '',
    desc: 'props.label'
  }, {
    name: 'labelLeft',
    type: 'Boolean',
    default: 'false',
    desc: 'props.labelLeft'
  }, {
    name: 'labelClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.labelClass'
  }, {
    name: 'trackClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.trackClass'
  }, {
    name: 'thumbClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.thumbClass'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: 'props.disabled'
  }, {
    name: 'value',
    type: 'Boolean',
    default: 'false',
    desc: 'props.value'
  }],
  events: [{
    name: 'input',
    desc: 'events.input'
  }, {
    name: 'change',
    desc: 'events.change'
  }]
}
