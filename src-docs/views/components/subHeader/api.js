export default {
  props: [{
    name: 'inset',
    type: 'Boolean',
    default: 'false',
    desc: '是否向内缩进，设置为true 会调整padding-left 为 72px'
  }],
  slots: [{
    name: 'default',
    desc: '放置副标题内容'
  }]
}
