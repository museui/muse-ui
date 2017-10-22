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
    name: 'tooltip',
    type: 'String',
    default: '',
    desc: 'props.tooltip'
  }, {
    name: 'tooltipPosition',
    type: 'String',
    default: 'bottom-center',
    desc: 'props.tooltipPosition'
  }, {
    name: 'touch',
    type: 'Boolean',
    default: 'false',
    desc: 'props.touch'
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
