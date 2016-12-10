import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: '设置不同的图片、图标、文件以及大小',
  props: {
    backgroundColor: '背景色',
    color: '图标和文字的颜色',
    src: '相当于 img 标签的 src 属性',
    imgClass: '图片的样式, 同 `class` 绑定方式一致',
    icon: '显示的图标',
    iconClass: '图标的样式, 同 `class` 绑定方式一致',
    iconSize: '图标的大小',
    size: 'avatar 的大小, 默认 40px'
  },
  slots: {
    default: '用于放置 avatar 的文字'
  }
}
