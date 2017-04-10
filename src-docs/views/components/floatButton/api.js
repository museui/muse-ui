import router from '../internal/router'
export default {
  props: [{
    name: 'icon',
    type: 'String',
    default: '',
    desc: 'props.icon'
  }, {
    name: 'iconClass',
    type: 'String',
    default: '',
    desc: 'props.iconClass'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: 'props.disabled'
  }, {
    name: 'type',
    type: 'String',
    default: '',
    desc: 'props.type'
  }, {
    name: 'href',
    type: 'String',
    default: '',
    desc: 'props.href'
  }, ...router, {
    name: 'target',
    type: 'String',
    default: '',
    desc: 'props.target'
  }, {
    name: 'secondary',
    type: 'Boolean',
    default: 'false',
    desc: 'props.secondary'
  }, {
    name: 'mini',
    type: 'Boolean',
    default: 'false',
    desc: 'props.mini'
  }, {
    name: 'backgroundColor',
    type: 'String',
    default: '如果设置为true，按钮背景色变为强调色',
    desc: 'props.backgroundColor'
  }],
  slots: [{
    name: 'default',
    desc: 'slots.default'
  }],
  events: [{
    name: 'click',
    desc: 'events.click'
  }, {
    name: 'hover',
    desc: 'events.hover'
  }, {
    name: 'hoverExit',
    desc: 'events.hoverExit'
  }, {
    name: 'keyboardFocus',
    desc: 'events.keyboardFocus'
  }]
}
