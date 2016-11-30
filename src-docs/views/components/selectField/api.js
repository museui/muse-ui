export default {
  props: [{
    name: 'autoWidth',
    type: 'Boolean',
    default: 'false',
    desc: '是否自动计算菜单宽度'
  }, {
    name: 'maxHeight',
    type: 'Number',
    default: '',
    desc: '菜单最大高度'
  }, {
    name: 'multiple',
    type: 'Boolean',
    default: 'false',
    desc: '是否可以多选'
  }, {
    name: 'label',
    type: 'String',
    default: '',
    desc: '下拉框的标签'
  }, {
    name: 'labelFloat',
    type: 'Boolean',
    default: 'false',
    desc: '标签是否浮动'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: '下拉框是否不可用'
  }, {
    name: 'hintText',
    type: 'String',
    default: '',
    desc: '提示文本'
  }, {
    name: 'helpText',
    type: 'String',
    default: '',
    desc: '下拉框的帮助文字'
  }, {
    name: 'errorText',
    type: 'String',
    default: '',
    desc: '错误提醒文字，如果此参数有值，那么下拉框会转为错误的状态, 显示效果将会更改'
  }, {
    name: 'errorColor',
    type: 'String',
    default: '',
    desc: '错误状态的时的颜色，默认为红色'
  }, {
    name: 'icon',
    type: 'String',
    default: '',
    desc: '显示图标'
  }, {
    name: 'fullWidth',
    type: 'Boolean',
    default: 'false',
    desc: '是否将宽度设置为 100%, 默认 256px'
  }, {
    name: 'underlineShow',
    type: 'Boolean',
    default: 'true',
    desc: '是否显示底部的横线'
  }, {
    name: 'value',
    type: 'String',
    default: '',
    desc: '下拉框的值，可不设置此参数，使用 `v-model` 指令代替'
  }, {
    name: 'scroller',
    type: 'Element',
    default: 'window',
    desc: '滚动的元素，会监听它的 `scroll` 事件, 在滚动时会不断更新弹出框的位置'
  }],
  slots: [{
    name: 'default',
    desc: '用来放置`menuItem` 、 `subHeader` 、 `divider` 等组件'
  }],
  events: [{
    name: 'input',
    desc: 'value 发生改变触发的事件，传入新的value, (value)'
  }, {
    name: 'change',
    desc: '由于用户选择是value改变时触发事件，传入 value 属性值'
  }]
}
