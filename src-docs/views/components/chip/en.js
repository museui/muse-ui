import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  props: {
    showDelete: '是否显示删除图标',
    deleteIconClass: '删除图标的样式',
    disabled: '设为true则不可点击',
    backgroundColor: '背景色',
    color: '文字的颜色'
  },
  slots: {
    default: '用于放置 avatar 和简短的文字'
  },
  events: {
    delete: '点击删除图标后触发',
    click: '点击时候触发'
  }
}
