export default {
  props: [{
    name: 'current',
    type: 'Number',
    desc: 'props.current'
  }, {
    name: 'total',
    type: 'Number',
    default: '1',
    desc: 'props.total'
  }, {
    name: 'pageSize',
    type: 'Number',
    desc: 'props.pageSize'
  }, {
    name: 'defaultPageSize',
    type: 'Number',
    default: '10',
    desc: 'props.defaultPageSize'
  }, {
    name: 'showSizeChanger',
    type: 'Boolean',
    default: 'false',
    desc: 'props.showSizeChanger'
  }, {
    name: 'pageSizeOption',
    type: 'Array',
    default: '[10, 20, 30, 40]',
    desc: 'props.pageSizeOptions'
  }],
  slots: [{
    name: 'default',
    desc: 'slots.default'
  }],
  events: [{
    name: 'pageChange',
    desc: 'events.pageChange'
  }, {
    name: 'pageSizeChange',
    desc: 'events.pageSizeChange'
  }]
}
