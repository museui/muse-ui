import router from '../internal/router'
export default {
  bottomNav: {
    props: [{
      name: 'shift',
      type: 'Boolean',
      default: 'false',
      desc: 'bottomNav.props.shift'
    }, {
      name: 'value',
      type: '',
      default: '',
      desc: 'bottomNav.props.value'
    }],
    slots: [{
      name: 'default',
      desc: 'bottomNav.slots.default'
    }],
    events: [{
      name: 'change',
      desc: 'bottomNav.events.change'
    }]
  },
  bottomNavItem: {
    props: [{
      name: 'icon',
      type: 'String',
      default: '',
      desc: 'bottomNavItem.props.icon'
    }, {
      name: 'iconClass',
      type: 'String,Object,Array',
      default: '',
      desc: 'bottomNavItem.props.iconClass'
    }, {
      name: 'title',
      type: 'String',
      default: '',
      desc: 'bottomNavItem.props.title'
    }, {
      name: 'titleClass',
      type: 'String,Object,Array',
      default: '',
      desc: 'bottomNavItem.props.titleClass'
    }, {
      name: 'value',
      type: '',
      default: '',
      desc: 'bottomNavItem.props.value'
    }, {
      name: 'href',
      type: 'String',
      default: '',
      desc: 'bottomNavItem.props.href'
    }, ...router]
  }
}
