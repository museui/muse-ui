export default {
  props: [{
    name: 'backgroundColor',
    type: 'String',
    default: '',
    desc: '背景色'
  }, {
    name: 'color',
    type: 'String',
    default: '',
    desc: '图标和文字的颜色'
  }, {
    name: 'src',
    type: 'String',
    default: '',
    desc: '相当于 img 标签的 src 属性'
  }, {
    name: 'imgClass',
    type: 'String,Object,Array',
    default: '',
    desc: '图片的样式, 同 `class` 绑定方式一致'
  }, {
    name: 'icon',
    type: 'String',
    default: '',
    desc: '显示的图标'
  }, {
    name: 'iconClass',
    type: 'String,Object,Array',
    default: '',
    desc: '图标的样式, 同 `class` 绑定方式一致'
  }, {
    name: 'iconSize',
    type: 'Number',
    default: '',
    desc: '图标的大小'
  }, {
    name: 'size',
    type: 'Number',
    default: '',
    desc: 'avatar 的大小, 默认 40px'
  }],
  slots: [{
    name: 'default',
    desc: '用于放置 avatar 的文字'
  }]
}
