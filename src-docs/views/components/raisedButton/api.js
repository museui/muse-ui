export default {
  props: [{
    name: 'label',
    type: 'String',
    default: '',
    desc: '按钮上的文字'
  }, {
    name: 'icon',
    type: 'String',
    default: '',
    desc: '按钮上的图标'
  }, {
    name: 'labelPosition',
    type: 'String',
    default: '',
    desc: '文字的位置, before 在图标之前，after 在图标之后'
  }, {
    name: 'labelClass',
    type: 'String',
    default: '',
    desc: '标签的样式'
  }, {
    name: 'primary',
    type: 'Boolean',
    default: 'false',
    desc: '背景色是否为主色'
  }, {
    name: 'secondary',
    type: 'Boolean',
    default: 'false',
    desc: '背景色是否为第二主色'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: '按钮是否不可用'
  }, {
    name: 'fullWidth',
    type: 'Boolean',
    default: 'false',
    desc: '是否将宽度设置为 100%'
  }, {
    name: 'href',
    type: 'String',
    default: '',
    desc: '相当于 a 标签的 href属性，设置之后会渲染成 a 标签，默认是使用button标签'
  }, {
    name: 'backgroundColor',
    type: 'String',
    default: '',
    desc: '按钮背景色'
  }, {
    name: 'color',
    type: 'String',
    default: '',
    desc: '按钮颜色'
  }, {
    name: 'rippleColor',
    type: 'String',
    default: '',
    desc: '波纹效果的颜色'
  }, {
    name: 'rippleOpacity',
    type: 'Number',
    default: '',
    desc: '波纹效果的透明度'
  }],
  slots: [{
    name: 'default',
    desc: '用来放置 input[type=file] 等特殊的按钮，或者自定义icon、文字'
  }],
  events: [{
    name: 'click',
    desc: '按钮点击事件'
  }, {
    name: 'hover',
    desc: '鼠标移到按钮上的事件'
  }, {
    name: 'hoverExit',
    desc: '鼠标移出按钮上的事件'
  }, {
    name: 'keyboardFocus',
    desc: '键盘使按钮获取焦点的事件，第一个参数为true 时表示获取焦点，为 false 失去焦点, (isFocus)'
  }]
}
