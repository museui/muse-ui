export default {
  props: [{
    name: 'anchorOrigin',
    type: 'Object',
    default: `{vertical: 'bottom', horizontal: 'left' }`,
    desc: '锚点的位置定义，弹出补全列表是以这个点为基准定位'
  }, {
    name: 'targetOrigin',
    type: 'Object',
    default: `{vertical: 'top', horizontal: 'left' }`,
    desc: '锚点相对于弹出补全列表的位置'
  }, {
    name: 'dataSource',
    type: 'Array',
    default: '',
    desc: '必须，填充补全列表的数据'
  }, {
    name: 'dataSourceConfig',
    type: 'Object',
    default: `{text: 'text', value: 'value'}`,
    desc: 'dataSource 的配置信息，text 显示文本属性名称，value 值的属性名称'
  }, {
    name: 'disableFocusRipple',
    type: 'Boolean',
    default: 'true',
    desc: '将 focus 时波纹效果设置为不可用'
  }, {
    name: 'filter',
    type: 'String, Function',
    default: 'caseSensitiveFilter',
    desc: '过滤器配置，用于过滤 dataSource 里的数据，只显示于输入相关的数据。'
  }, {
    name: 'maxSearchResults',
    type: 'Number',
    default: '',
    desc: '最多显示数据的条数'
  }, {
    name: 'openOnFocus',
    type: 'Boolean',
    default: 'false',
    desc: '是否在 focus 是显示补全信息列表'
  }, {
    name: 'menuCloseDelay',
    type: 'Number',
    default: '300',
    desc: '补全列表关闭的延迟时间，单位：ms'
  }, {
    name: 'label',
    type: 'String',
    default: '',
    desc: '输入框的标签'
  }, {
    name: 'labelFloat',
    type: 'Boolean',
    default: 'false',
    desc: '标签是否浮动'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: '输入框是否不可用'
  }, {
    name: 'hintText',
    type: 'String',
    default: '',
    desc: '提示文本'
  }, {
    name: 'helpText',
    type: 'String',
    default: '',
    desc: '输入的帮助文字'
  }, {
    name: 'errorText',
    type: 'String',
    default: '',
    desc: '错误提醒文字，如果此参数有值，那么输入框会转为错误的状态, 显示效果将会更改'
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
    desc: '输入框的值，可不设置此参数，使用 v-model 指令代替'
  }],
  events: [{
    name: 'focus',
    desc: '输入框获取焦点事件'
  }, {
    name: 'blur',
    desc: '输入框失去焦点事件'
  }, {
    name: 'select',
    desc: '选择补全列表事件, 会传入这条数据和index值，(item, index)'
  }, {
    name: 'input',
    desc: '输入时触发的事件，传入value, (value)'
  }, {
    name: 'change',
    desc: '同 input 事件一样'
  }]
}
