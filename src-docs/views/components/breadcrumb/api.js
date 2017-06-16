export default {
  breadcrumb: {
    props: [{
      name: 'separator',
      type: 'String',
      default: '/',
      desc: 'breadcrumb.props.separator'
    }]
  },
  breadcrumbItem: {
    props: [{
      name: 'href',
      type: 'String',
      default: '',
      desc: 'breadcrumbItem.props.href'
    }],
    slots: [{
      name: 'default',
      desc: 'breadcrumbItem.slots.default'
    }]
  }
}
