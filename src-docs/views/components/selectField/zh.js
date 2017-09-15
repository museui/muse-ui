import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: '下拉框的value 通过 `v-model` 控制，通过 `menuItem` 配置可选项； `multiple` 可将下拉框改为多选，这个时候 `v-model` 需要绑定数组',
  complexExample: '其它参数的使用',
  complexExampleDesc: '`maxHeight` 控制弹窗框的高度，`errorText` 当表单验证出错时可以给出提示信息',
  props: {
    autoWidth: '是否自动计算菜单宽度',
    maxHeight: '菜单最大高度',
    multiple: '是否可以多选',
    name: 'input 的 name 属性',
    label: '下拉框的标签',
    labelFloat: '标签是否浮动',
    labelClass: '标签的样式, 同 `class` 绑定方式一致',
    labelFocusClass: '输入框获取焦点时标签的样式, 同 `class` 绑定方式一致',
    disabled: '下拉框是否不可用',
    hintText: '提示文字',
    hintTextClass: '提示文字样式, 同 `class` 绑定方式一致',
    helpText: '帮助文字',
    helpTextClass: '帮助文字样式, 同 `class` 绑定方式一致',
    errorText: '错误提醒文字，如果此参数有值，那么下拉框会转为错误的状态, 显示效果将会更改',
    errorColor: '错误状态的时的颜色，默认为红色',
    icon: '显示图标',
    iconClass: '图标的样式, 同 `class` 绑定方式一致',
    fullWidth: '是否将宽度设置为 100%, 默认 256px',
    underlineShow: '是否显示底部的横线',
    underlineClass: '底部横线样式, 同 `class` 绑定方式一致',
    underlineFocusClass: '输入框获取焦点时底部横线样式, 同 `class` 绑定方式一致',
    dropDownIconClass: '下拉图标样式, 同 `class` 绑定方式一致',
    value: '下拉框的值，可不设置此参数，使用 `v-model` 指令代替',
    scroller: '滚动的元素，会监听它的 `scroll` 事件, 在滚动时会不断更新弹出框的位置',
    separator: '分隔符'
  },
  slots: {
    default: '用来放置`menuItem` 、 `subHeader` 、 `divider` 等组件'
  },
  events: {
    input: 'value 发生改变触发的事件，传入新的value, (value)',
    change: '由于用户选择是value改变时触发事件，传入 value 属性值',
    open: '下拉菜单打开时事件',
    close: '下拉菜单关闭时事件'
  }
}
