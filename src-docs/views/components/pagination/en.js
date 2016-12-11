import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  moreExample: '更多的分页',
  pageSizeExample: '改变每页显示条目数',
  props: {
    current: '当前页数',
    total: '数据总数',
    pageSize: '每页条数, 当同时配置pageSizeOptions的时候，优先使用pageSizeOptions',
    defaultPageSize: '默认的每页条数',
    showSizeChanger: '是否显示 pageSize 选择框',
    pageSizeOptions: '指定每页可以显示多少条'
  },
  slots: {
    default: '用于放置 pagination 组件'
  },
  events: {
    pageChange: '当页码改变的时候触发',
    pageSizeChange: '当pageSize改变的时候触发'
  }
}
