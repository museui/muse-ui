import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: '可以使用 `v-model` 控制value',
  disabledExample: '禁用示例',
  stepExample: '步长定义',
  props: {
    name: '表单元素的 name 属性',
    max: '最大值',
    min: '最小值',
    step: '步长',
    disabled: '是否禁用滑块',
    value: '滑块的值',
    displayValue: '是否显示滑块的值'
  },
  events: {
    input: 'value 发生改变触发的事件，传入新的value, (value)',
    change: '用于用户行为(点击，拖拽)导致value发生改变时, 触发事件，传入 value 属性值'
  }
}
