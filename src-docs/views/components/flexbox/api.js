export default {
  flexbox: {
    props: [{
      name: 'gutter',
      type: 'Number',
      default: '8',
      desc: 'flexbox.props.gutter'
    }, {
      name: 'orient',
      type: 'String',
      default: 'horizontal',
      desc: 'flexbox.props.orient'
    }, {
      name: 'justify',
      type: 'String',
      default: '',
      desc: 'flexbox.props.justify'
    }, {
      name: 'align',
      type: 'String',
      default: '',
      desc: 'flexbox.props.align'
    }, {
      name: 'wrap',
      type: 'String',
      default: '',
      desc: 'flexbox.props.wrap'
    }],
    slots: [{
      name: 'default',
      desc: 'flexbox.slots.default'
    }]
  },
  flexboxItem: {
    props: [{
      name: 'grow',
      type: 'String, Number',
      default: '1',
      desc: 'flexboxItem.props.grow'
    }, {
      name: 'shrink',
      type: 'String, Number',
      default: '1',
      desc: 'flexboxItem.props.shrink'
    }, {
      name: 'basis',
      type: 'String, Number',
      default: 'auto',
      desc: 'flexboxItem.props.basis'
    }, {
      name: 'order',
      type: 'String, Number',
      default: '0',
      desc: 'flexboxItem.props.order'
    }],
    slots: [{
      name: 'default',
      desc: 'flexboxItem.slots.default'
    }]
  }
}
