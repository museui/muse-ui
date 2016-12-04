export default {
  props: [{
    name: 'name',
    type: 'String',
    default: '',
    desc: '相当于 `input[type=checkbox]` 元素的 name 属性'
  }, {
    name: 'nativeValue',
    type: 'String',
    default: '',
    desc: '相当于 `input[type=checkbox]` 元素的 value 属性'
  }, {
    name: 'label',
    type: 'String',
    default: '',
    desc: '显示的标签文字'
  }, {
    name: 'labelLeft',
    type: 'Boolean',
    default: 'false',
    desc: '标签文字是否在左边，默认在右边'
  }, {
    name: 'labelClass',
    type: 'String,Object,Array',
    default: '',
    desc: '标签的样式, 同 `class` 绑定方式一致'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: '设置为 true 后复选框将不可用'
  }, {
    name: 'uncheckIcon',
    type: 'String',
    default: 'check_box_outline_blank',
    desc: '未选中时显示的icon, 必须在 material design icon 库中选择'
  }, {
    name: 'checkedIcon',
    type: 'String',
    default: 'check_box',
    desc: '已选中时显示的icon, 必须在 material design icon 库中选择'
  }, {
    name: 'iconClass',
    type: 'String,Object,Array',
    default: '',
    desc: '图标的样式, 同 `class` 绑定方式一致'
  }, {
    name: 'value',
    type: 'String',
    default: '',
    desc: '用来使用v-model控制'
  }],
  events: [{
    name: 'input',
    desc: '当value属性发生改变时触发事件，传入新的value, (value)'
  }, {
    name: 'change',
    desc: '同 `input[type=checkbox]` 元素的change事件一致，传入 value 属性值'
  }]
}
