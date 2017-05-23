import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: '关于 `textField` 一些简单的使用例子， 还是可以通过 `v-model` 控制value',
  errorExample: '错误状态样式',
  errorExampleDesc: '使用 `errorText` 在输入出错时给提示，并且输入框变为错误状态， 可根据 `errorColor` 调整颜色',
  iconExample: '使用图标的示例',
  disabledExample: '输入框被禁用',
  inputLenExample: '输入字符数记录',
  inputLenExampleDesc: '设置 `maxLength` 属性，启动输入字符数记录，再输入时会触发 `textOverflow` 事件，当一个参数为 `true` 是则说明输入的长度已超过最大长度',
  props: {
    name: 'input/textarea 的name属性',
    type: '输入框的类型，在单行输入时有效 text, password, email, url, number',
    icon: '输入框图标',
    iconClass: '图标的样式, 同 `class` 绑定方式一致',
    label: '输入框的标签',
    labelFloat: '标签是否浮动',
    labelClass: '标签的样式, 同 `class` 绑定方式一致',
    labelFocusClass: '输入框获取焦点时标签的样式, 同 `class` 绑定方式一致',
    disabled: '输入框是否不可用',
    hintText: '提示文字',
    hintTextClass: '提示文字样式, 同 `class` 绑定方式一致',
    helpText: '帮助文字',
    helpTextClass: '帮助文字样式, 同 `class` 绑定方式一致',
    errorText: '错误提醒文字，如果此参数有值，那么输入框会转为错误的状态, 显示效果将会更改',
    errorColor: '错误状态的时的颜色，默认为红色',
    fullWidth: '是否将宽度设置为 100%, 默认 256px',
    underlineShow: '是否显示底部的横线',
    underlineClass: '底部横线样式, 同 `class` 绑定方式一致',
    underlineFocusClass: '输入框获取焦点时底部横线样式, 同 `class` 绑定方式一致',
    inputClass: '输入框样式, 同 `class` 绑定方式一致',
    multiLine: '是否为多行输入',
    rows: '行数',
    rowsMax: '最大行数',
    maxLength: '可输入的最大长度',
    value: '输入框的值，可不设置此参数，使用 v-model 指令代替',
    max: '当type = number 时，max属性生效',
    min: '当type = number 时，min属性生效',
    required: 'whether the input is required or not'
  },
  events: {
    focus: '输入框获取焦点时触发',
    blur: '输入框失去焦点时触发',
    input: 'value 发生改变触发的事件，传入新的value, (value)',
    change: '用户输入时触发事件，传入输入框的 value'
  },
  slots: {
    default: '用于和其它组件配合使用，可以保留输入框的样式，但内部表单组件可以放置其它的组件，现在的 `selectField` `datePicer` `timePicker` 都是这种方式'
  }
}
