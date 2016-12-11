export default {
  row: {
    props: [{
      name: 'gutter',
      type: 'Boolean',
      default: 'false',
      desc: 'row.props.gutter'
    }],
    slots: [{
      name: 'default',
      desc: 'row.slots.default'
    }]
  },
  col: {
    props: [{
      name: 'width',
      type: 'String',
      default: '',
      desc: 'col.props.width'
    }, {
      name: 'tablet',
      type: 'String',
      default: '',
      desc: 'col.props.tablet'
    }, {
      name: 'desktop',
      type: 'String',
      default: '',
      desc: 'col.props.desktop'
    }],
    slots: [{
      name: 'default',
      desc: 'col.slots.default'
    }]
  }
}
