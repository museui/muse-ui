import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  moreExample: '更多的分页',
  pageSizeExample: '改变每页显示条目数',
  props: {
    current: '当前页数',
    total: '数据总数,该值必须大于等于1',
    pageSize: '每页条数, 当同时配置pageSizeOptions的时候并且showSizeChanger为true的时候，优先使用pageSizeOptions，否则将会使用该参数',
    defaultPageSize: '默认的每页条数，只有当showSizeChanger为false并且pageSize没有配置的时候才会生效',
    showSizeChanger: '是否显示 pageSize 选择框以及决定pageSizeOptions是否生效',
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
