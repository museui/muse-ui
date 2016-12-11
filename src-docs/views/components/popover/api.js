export default {
  props: [{
    name: 'trigger',
    type: 'Element',
    default: '',
    desc: 'props.trigger'
  }, {
    name: 'open',
    type: 'Boolean',
    default: 'false',
    desc: 'props.open'
  }, {
    name: 'popoverClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.popoverClass'
  }, {
    name: 'scroller',
    type: 'Element',
    default: 'window',
    desc: 'props.scroller'
  }, {
    name: 'autoPosition',
    type: 'Boolean',
    default: 'true',
    desc: 'props.autoPosition'
  }, {
    name: 'anchorOrigin',
    type: 'Object',
    default: '{vertical: \'bottom\',horizontal: \'left\'}',
    desc: 'props.anchorOrigin'
  }, {
    name: 'targetOrigin',
    type: 'Object',
    default: '{vertical: \'top\',horizontal: \'left\'}',
    desc: 'props.targetOrigin'
  }, {
    name: 'overlay',
    type: 'Boolean',
    default: 'false',
    desc: 'props.overlay'
  }, {
    name: 'overlayOpacity',
    type: 'Number',
    default: '0.01',
    desc: 'props.overlayOpacity'
  }, {
    name: 'overlayColor',
    type: 'String',
    default: '#000',
    desc: 'props.overlayColor'
  }],
  slots: [{
    name: 'default',
    desc: 'slots.default'
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
  }]
}
