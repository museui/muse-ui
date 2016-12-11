import description from './README.md'

export default {
  description,
  simpleExample: '使用示例',
  simpleExampleDesc: '下面的例子向下滚动还会加载更多的数据',
  props: {
    scroller: '滚动的元素，会监听它的 `scroll` 事件',
    loading: '是否正在加载数据',
    loadingText: '加载数据时显示的文字'
  },
  events: {
    load: '当滚动到底部时触发事件'
  }
}
