export default {
  gridList: {
    props: [{
      name: 'cellHeight',
      type: 'Number',
      default: '180',
      desc: 'gridList.props.cellHeight'
    }, {
      name: 'cols',
      type: 'Number',
      default: '2',
      desc: 'gridList.props.cols'
    }, {
      name: 'padding',
      type: 'Number',
      default: '4',
      desc: 'gridList.props.padding'
    }],
    slots: [{
      name: 'default',
      desc: 'gridList.slots.default'
    }]
  },
  gridTile: {
    props: [{
      name: 'cols',
      type: 'Number',
      default: '1',
      desc: 'gridTile.props.cols'
    }, {
      name: 'rows',
      type: 'Number',
      default: '1',
      desc: 'gridTile.props.rows'
    }, {
      name: 'title',
      type: 'String',
      default: '',
      desc: 'gridTile.props.title'
    }, {
      name: 'subTitle',
      type: 'String',
      default: '',
      desc: 'gridTile.props.subTitle'
    }, {
      name: 'titlePosition',
      type: 'String',
      default: 'bottom',
      desc: 'gridTile.props.titlePosition'
    }, {
      name: 'titleBarClass',
      type: 'String,Array,Object',
      default: '',
      desc: 'gridTile.props.titleBarClass'
    }, {
      name: 'actionPosition',
      type: 'String',
      default: 'right',
      desc: 'gridTile.props.actionPosition'
    }],
    slots: [{
      name: 'title',
      desc: 'gridTile.slots.title'
    }, {
      name: 'subTitle',
      desc: 'gridTile.slots.subTitle'
    }, {
      name: 'action',
      desc: 'gridTile.slots.action'
    }, {
      name: 'default',
      desc: 'gridTile.slots.default'
    }]
  }
}
