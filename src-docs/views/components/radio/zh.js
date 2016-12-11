import description from './README.md'

export default {
  description,
  simpleExample: '使用示例',
  simpleExampleDesc: '`radio` 组件的属性和checkbox一致，并且都可以通过 `v-model` 控制value',
  props: {
    name: '相当于 `input[type=radio]` 元素的 name 属性',
    nativeValue: '相当于 `input[type=radio]` 元素的 value 属性',
    label: '显示的标签文字',
    labelLeft: '标签文字是否在左边，默认在右边',
    labelClass: '标签的样式, 同 `class` 绑定方式一致',
    disabled: '设置为 true 后 radio 将不可用',
    uncheckIcon: '未选中时显示的icon, 必须在 material design icon 库中选择',
    checkedIcon: '已选中时显示的icon, 必须在 material design icon 库中选择',
    iconClass: '图标的样式, 同 `class` 绑定方式一致',
    value: '用来使用v-model控制'
  },
  events: {
    input: '当 value 属性发生改变时触发事件，传入新的value, (value)',
    change: '同 `input[type=radio]` 元素的change事件一致, 传入 value 属性值'
  }
}
