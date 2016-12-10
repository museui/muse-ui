import description from './README.md'

export default {
  description,
  props: {
    mode: '进度指示器的模式， indeterminate 不确定进度模式，这时 value、min、max 无效, determinate 需要通过改变value值来改变进度显示',
    value: '进度指示器的 `value` 值',
    max: '最大值',
    min: '最小值',
    size: '圆形的大小',
    strokeWidth: '圆形线的宽度',
    color: '圆形线的颜色'
  }
}
