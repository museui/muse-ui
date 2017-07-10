import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: '四种样式，success、info、warning、error',
  defineExample: '自定义组件内容',
  defineExampleDesc: '自定义组件内容，可以是组件也可以是自定义内容',
  props: {
    type: '组件样式，success、info、warning、error',
    closeable: '是否可关闭',
    showIcon: '是否显示图标'
  },
  events: {
    close: '关闭后的回调函数 '
  },
  slots: {
    default: '自定义内容',
    description: '描述内容',
    icon: '自定义图标',
    close: '自定义关闭内容'
  }
}
