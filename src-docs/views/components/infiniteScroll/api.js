export default {
  props: [{
    name: 'scroller',
    type: 'Element',
    default: 'window',
    desc: '滚动的元素，会监听它的 `scroll` 事件'
  }, {
    name: 'loading',
    type: 'Boolean',
    default: 'false',
    desc: '是否正在加载数据'
  }, {
    name: 'loadingText',
    type: 'String',
    default: '正在加载...',
    desc: '加载数据时显示的文字'
  }],
  events: [{
    name: 'load',
    desc: '当滚动到底部时触发事件'
  }]
}
