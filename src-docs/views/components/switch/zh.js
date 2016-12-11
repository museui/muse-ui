import description from './README.md'

export default {
  description,
  simpleExample: '使用示例',
  simpleExampleDesc: '此组件亦可以使用 `v-model` 控制，`labelPosition` 控制文字的位置',
  props: {
    label: '显示的标签文字',
    labelLeft: '标签文字是否在左边，默认在右边',
    labelClass: 'label 样式，同 `class` 绑定方式一致',
    trackClass: 'track 样式，同 `class` 绑定方式一致',
    thumbClass: 'thumb 样式，同 `class` 绑定方式一致',
    disabled: '设置为 `true`, 将不可用',
    value: '组件的值，true/false'
  },
  events: {
    input: '当 value 属性发生改变时触发事件，传入新的value, (value)',
    change: '同 `input[type=checkbox]` 元素的change事件一致，传入 value 属性值'
  }
}
