import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: '调整 `format` 属性可以切换 12/24小时制， `mode` 切换横屏或竖屏显示',
  inlineExample: '内联弹出模式',
  inlineExampleDesc: '`container` 设置为 `inline` 则使用内联模式弹出',
  props: {
    autoOk: '是否在选择分钟后自动确定, 设为true则不显示确定按钮',
    okLabel: '确定按钮的文字',
    cancelLabel: '取消按钮的文字',
    container: 'dialog/inline, 弹出时间选择的方式， dialog 弹出框， inline 内联弹出显示',
    mode: '`portrait` 竖屏显示， `landscape` 横屏显示',
    format: 'ampm: 12小时制; 24hr: 24小时制',
    name: '表单元素的 name 属性',
    label: '时间选择框的标签',
    labelFloat: '标签是否浮动',
    labelClass: '标签的样式, 同 `class` 绑定方式一致',
    labelFocusClass: '输入框获取焦点时标签的样式, 同 `class` 绑定方式一致',
    disabled: '时间选择框是否不可用',
    hintText: '提示文字',
    hintTextClass: '提示文字样式, 同 `class` 绑定方式一致',
    helpText: '帮助文字',
    helpTextClass: '帮助文字样式, 同 `class` 绑定方式一致',
    errorText: '错误提醒文字，如果此参数有值，那么时间选择框会转为错误的状态, 显示效果将会更改',
    errorColor: '错误状态的时的颜色，默认为红色',
    icon: '显示图标',
    iconClass: '图标的样式, 同 `class` 绑定方式一致',
    fullWidth: '是否将宽度设置为 100%, 默认 256px',
    underlineShow: '是否显示底部的横线',
    underlineClass: '底部横线样式, 同 `class` 绑定方式一致',
    underlineFocusClass: '输入框获取焦点时底部横线样式, 同 `class` 绑定方式一致',
    inputClass: '输入框样式, 同 `class` 绑定方式一致',
    value: '时间选择框的值，可不设置此参数，使用 v-model 指令代替'
  },
  events: {
    input: 'value 发生改变触发的事件，传入新的value, (value)',
    change: '由于用户行为(点击确定按钮)导致 value 值改变时触发事件, 传入 value 属性值'
  }
}
