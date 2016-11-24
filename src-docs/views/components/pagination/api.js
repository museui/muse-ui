export default {
  props: [{
    name: 'current',
    type: 'Number',
    desc: '当前页数'
  }, {
    name: 'total',
    type: 'Number',
    default: '0',
    desc: '页码总数'
  }, {
    name: 'pageSize',
    type: 'Number',
    desc: '每页条数, 当同时配置pageSizeOptions的时候，优先使用pageSizeOptions'
  }, {
    name: 'defaultPageSize',
    type: 'Number',
    default: '10',
    desc: '默认的每页条数'
  }, {
    name: 'showSizeChanger',
    type: 'Boolean',
    default: 'false',
    desc: '是否显示 pageSize 选择框'
  }, {
    name: 'pageSizeOptions',
    type: 'Array',
    default: "['10', '20', '30', '40']",
    desc: '指定每页可以显示多少条'
  }],
  slots: [{
    name: 'default',
    desc: '用于放置 pagination 组件'
  }],
  events: [{
    name: 'pageChange',
    desc: '当页码改变的时候触发'
  }, {
    name: 'pageSizeChange',
    desc: '当pageSize改变的时候触发'
  }]
}
