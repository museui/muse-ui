export default {
  props: [{
    name: 'autoOk',
    type: 'Boolean',
    default: 'false',
    desc: '是否在选择分钟后自动确定, 设为true则不显示确定按钮'
  }, {
    name: 'okLabel',
    type: 'String',
    default: '确定',
    desc: '确定按钮的文字'
  }, {
    name: 'cancelLabel',
    type: 'String',
    default: '确定',
    desc: '取消按钮的文字'
  }, {
    name: 'container',
    type: 'String',
    default: 'dialog',
    desc: 'dialog/inline, 弹出时间选择的方式， dialog 弹出框， inline 内联弹出显示'
  }, {
    name: 'mode',
    type: 'String',
    default: 'portrait',
    desc: '`portrait` 竖屏显示， `landscape` 横屏显示'
  }, {
    name: 'format',
    type: 'String',
    default: 'ampm',
    desc: 'ampm: 12小时制; 24hr: 24小时制'
  }, {
    name: 'label',
    type: 'String',
    default: '',
    desc: '时间选择框的标签'
  }, {
    name: 'labelFloat',
    type: 'Boolean',
    default: 'false',
    desc: '标签是否浮动'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: '时间选择框是否不可用'
  }, {
    name: 'hintText',
    type: 'String',
    default: '',
    desc: '提示文本'
  }, {
    name: 'helpText',
    type: 'String',
    default: '',
    desc: '帮助文字'
  }, {
    name: 'errorText',
    type: 'String',
    default: '',
    desc: '错误提醒文字，如果此参数有值，那么时间选择框会转为错误的状态, 显示效果将会更改'
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
    desc: '时间选择框的值，可不设置此参数，使用 v-model 指令代替'
  }],
  events: [{
    name: 'input',
    desc: 'value 发生改变触发的事件，传入新的value, (value)'
  }, {
    name: 'change',
    desc: '同 input 事件一样'
  }]
}
