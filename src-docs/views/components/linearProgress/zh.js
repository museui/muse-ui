import description from './README.md'

export default {
  description,
  indeterminateDesc: '默认的进度指示器',
  determinateDesc: '不过设置不同 `value` 来改变进度条的进度',
  customExample: '定制大小和颜色',
  props: {
    mode: '进度指示器的模式， indeterminate 不确定进度模式，这时 value、min、max 无效, determinate 需要通过改变value值来改变进度显示',
    value: '进度条的 `value` 值',
    max: '最大值',
    min: '最小值',
    size: '进度条的大小(高度)',
    color: '进度条的颜色'
  }
}
