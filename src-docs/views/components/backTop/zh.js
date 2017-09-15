import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: '所有使用默认值',
  defineExample: '自定义组件内容',
  defineExampleDesc: '自定义组件内容，可以是组件也可以是自定义内容',
  props: {
    height: '页面滚动高度达到该值时才显示组件',
    bottom: '组件距离底部的距离',
    right: '组件距离右部的距离',
    duration: '滚动动画持续时间，单位 毫秒'
  },
  events: {
    callBack: '回到顶部时触发'
  },
  slots: {
    default: '自定义内容'
  }
}
