export default {
  props: [{
    name: 'trigger',
    type: 'Element',
    default: '',
    desc: '触发下拉刷新的元素, 会给它绑定上事件'
  }, {
    name: 'refreshing',
    type: 'Boolean',
    default: 'false',
    desc: '是否正在刷新数据'
  }],
  events: [{
    name: 'refresh',
    desc: '需要刷新数据时触发'
  }]
}
