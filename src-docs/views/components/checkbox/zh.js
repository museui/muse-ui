import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: '这些是最简单的使用示例，通过 `uncheckIcon` 和 `checkedIcon` 自定义图标，`disabled` 使组件不可用, `labelPosition` 改变文字的位置',
  controlExample: '复选框控制',
  controlExampleDesc: '`v-model` 控制复选框的 value , `v-model` 只能控制 value属性，所以 checkbox 元素的value只能使用 `nativeValue` 来定义',
  props: {
    name: '相当于 `input[type=checkbox]` 元素的 name 属性',
    nativeValue: '相当于 `input[type=checkbox]` 元素的 value 属性',
    label: '显示的标签文字',
    labelLeft: '标签文字是否在左边，默认在右边',
    labelClass: '标签的样式, 同 `class` 绑定方式一致',
    disabled: '设置为 true 后复选框将不可用',
    uncheckIcon: '未选中时显示的icon, 必须在 material design icon 库中选择',
    checkedIcon: '已选中时显示的icon, 必须在 material design icon 库中选择',
    iconClass: '图标的样式, 同 `class` 绑定方式一致',
    value: '用来使用v-model控制'
  },
  events: {
    input: '当value属性发生改变时触发事件，传入新的value, (value)',
    change: '同 `input[type=checkbox]` 元素的change事件一致，传入 value 属性值'
  }
}
