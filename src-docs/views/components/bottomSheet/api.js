export default {
  props: [{
    name: 'open',
    type: 'Boolean',
    default: 'false',
    desc: 'props.open'
  }, {
    name: 'sheetClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.sheetClass'
  }, {
    name: 'overlay',
    type: 'Boolean',
    default: 'true',
    desc: 'props.overlay'
  }, {
    name: 'overlayColor',
    type: 'String',
    default: '#000',
    desc: 'props.overlayColor'
  }, {
    name: 'overlayOpacity',
    type: 'Number',
    default: '0.4',
    desc: 'props.overlayOpacity'
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
