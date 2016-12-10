export default {
  card: {
    slots: [{
      name: 'default',
      desc: 'card.slots.default'
    }]
  },
  cardHeader: {
    props: [{
      name: 'title',
      type: 'String',
      default: '',
      desc: 'cardHeader.props.title'
    }, {
      name: 'titleClass',
      type: 'String,Object,Array',
      default: '',
      desc: 'cardHeader.props.titleClass'
    }, {
      name: 'subTitle',
      type: 'String',
      default: '',
      desc: 'cardHeader.props.subTitle'
    }, {
      name: 'subTitleClass',
      type: 'String,Object,Array',
      default: '',
      desc: 'cardHeader.props.subTitleClass'
    }],
    slots: [{
      name: 'avatar',
      desc: 'cardHeader.slots.avatar'
    }, {
      name: 'default',
      desc: 'cardHeader.slots.default'
    }]
  },
  cardMedia: {
    props: [{
      name: 'title',
      type: 'String',
      default: '',
      desc: 'cardMedia.props.title'
    }, {
      name: 'titleClass',
      type: 'String,Object,Array',
      default: '',
      desc: 'cardMedia.props.titleClass'
    }, {
      name: 'subTitle',
      type: 'String',
      default: '',
      desc: 'cardMedia.props.subTitle'
    }, {
      name: 'subTitleClass',
      type: 'String,Object,Array',
      default: '',
      desc: 'cardMedia.props.subTitleClass'
    }],
    slots: [{
      name: 'default',
      desc: 'cardMedia.slots.default'
    }]
  },
  cardTitle: {
    props: [{
      name: 'title',
      type: 'String',
      default: '',
      desc: 'cardTitle.props.title'
    }, {
      name: 'titleClass',
      type: 'String,Object,Array',
      default: '',
      desc: 'cardTitle.props.titleClass'
    }, {
      name: 'subTitle',
      type: 'String',
      default: '',
      desc: 'cardTitle.props.subTitle'
    }, {
      name: 'subTitleClass',
      type: 'String,Object,Array',
      default: '',
      desc: 'cardTitle.props.subTitleClass'
    }]
  },
  cardText: {
    slots: [{
      name: 'default',
      desc: 'cardText.slots.default'
    }]
  },
  cardActions: {
    slots: [{
      name: 'default',
      desc: 'cardText.slots.default'
    }]
  }
}
