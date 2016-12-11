import description from './README.md'

export default {
  description,
  listExample: '配合列表使用',
  insetExample: '向内缩进示例',
  gridListExample: '配合网格列表使用',
  props: {
    inset: '是否向内缩进，设置为true 会调整padding-left 为 72px'
  },
  slots: {
    default: '放置副标题内容'
  }
}
