export default {
  props: [{
    name: 'trigger',
    type: 'Element',
    default: '',
    desc: 'props.trigger'
  }, {
    name: 'label',
    type: 'String',
    default: '',
    desc: 'props.label'
  }, {
    name: 'verticalPosition',
    type: 'String',
    default: 'bottom',
    desc: 'props.verticalPosition'
  }, {
    name: 'horizontalPosition',
    type: 'String',
    default: 'center',
    desc: 'props.horizontalPosition'
  }, {
    name: 'show',
    type: 'String',
    default: 'false',
    desc: 'props.show'
  }, {
    name: 'touch',
    type: 'Boolean',
    default: 'false',
    desc: 'props.touch'
  }]
}
