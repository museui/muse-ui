import description from './README.md'

export default {
  description,
  simpleExample: '使用示例',
  simpleExampleDesc: '按住下拉，然后松开会刷新数据。`RefreshControl` 的 Container 元素必须是已定位的元素(也就是 `position` 为 relative、absolute 或 fixed)',
  props: {
    trigger: '触发下拉刷新的元素, 会给它绑定上事件',
    refreshing: '是否正在刷新数据'
  },
  events: {
    refresh: '需要刷新数据时触发'
  }
}
