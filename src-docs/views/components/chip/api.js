export default {
  props: [{
    name: 'showDelete',
    type: 'Boolean',
    default: 'false',
    desc: '是否显示删除图标'
  }, {
    name: 'deleteIconClass',
    type: 'String',
    default: '',
    desc: '删除图标的样式'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: '设为true则不可点击'
  }, {
    name: 'backgroundColor',
    type: 'String',
    default: '',
    desc: '背景色'
  }, {
    name: 'color',
    type: 'String',
    default: '',
    desc: '文字的颜色'
  }],
  slots: [{
    name: 'default',
    desc: '用于放置 avatar 和简短的文字'
  }],
  events: [{
    name: 'delete',
    desc: '点击删除图标后触发'
  }, {
    name: 'click',
    desc: '点击时候触发'
  }]
}
