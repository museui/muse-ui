export default {
  props: [{
    name: 'mode',
    type: 'String',
    default: 'indeterminate',
    desc: '进度指示器的模式， indeterminate 不确定进度模式，这时这时value无效, determinate 需要通过改变value值来改变进度显示'
  }, {
    name: 'value',
    type: 'Number',
    default: '',
    desc: '进度条的 `value` 值'
  }, {
    name: 'max',
    type: 'Number',
    default: '100',
    desc: '最大值'
  }, {
    name: 'min',
    type: 'Number',
    default: '0',
    desc: '最小值'
  }]
}
