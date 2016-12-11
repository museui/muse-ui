import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: '通过 `zDepth` 控制纸片的阴影程度',
  circleExample: '圆形的纸片',
  props: {
    circle: '是否为圆形的纸片',
    rounded: '是否为圆角的纸片',
    zDepth: '1-6, 纸片的阴影程度'
  },
  slots: {
    default: '内容部分'
  }
}
