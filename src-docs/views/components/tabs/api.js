export default {
  tabs: {
    props: [{
      name: 'lineClass',
      type: 'String,Object,Array',
      default: '',
      desc: 'tabs.props.lineClass'
    }, {
      name: 'value',
      type: '',
      default: '',
      desc: 'tabs.props.value'
    }],
    slots: [{
      name: 'default',
      desc: 'tabs.slots.default'
    }],
    events: [{
      name: 'change',
      desc: 'tabs.events.change'
    }]
  },
  tab: {
    props: [{
      name: 'icon',
      type: 'String',
      default: '',
      desc: 'tab.props.icon'
    }, {
      name: 'iconClass',
      type: 'String,Object,Array',
      default: '',
      desc: 'tab.props.iconClass'
    }, {
      name: 'title',
      type: 'String',
      default: '',
      desc: 'tab.props.title'
    }, {
      name: 'titleClass',
      type: 'String,Object,Array',
      default: '',
      desc: 'tab.props.titleClass'
    }, {
      name: 'value',
      type: '',
      default: '',
      desc: 'tab.props.value'
    }, {
      name: 'href',
      type: 'String',
      default: '',
      desc: 'tab.props.href'
    }, {
      name: 'disabled',
      type: 'Boolean',
      default: 'false',
      desc: 'tab.props.disabled'
    }],
    events: [{
      name: 'active',
      desc: 'tab.events.active'
    }, {
      name: 'click',
      desc: 'tab.events.click'
    }],
    slots: [{
      name: 'default',
      desc: 'tab.slots.default'
    }]
  }
}
