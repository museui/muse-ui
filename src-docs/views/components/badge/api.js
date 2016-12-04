export default {
  props: [{
    name: 'content',
    type: 'String',
    default: '',
    desc: '内容文本'
  }, {
    name: 'color',
    type: 'String',
    default: '',
    desc: '颜色'
  }, {
    name: 'primary',
    type: 'Boolean',
    default: 'false',
    desc: '颜色是否为主色'
  }, {
    name: 'secondary',
    type: 'Boolean',
    default: 'false',
    desc: '颜色是否为强调色'
  }, {
    name: 'circle',
    type: 'Boolean',
    default: 'false',
    desc: '是否为圆形'
  }, {
    name: 'badgeClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'badge 样式, 同 `class` 绑定方式一致'
  }],
  slots: [{
    name: 'content',
    desc: '用于分发内容，这个 slot 会覆盖掉 content 属性'
  }, {
    name: 'default',
    desc: '分发需要加入徽章的元素或者组件'
  }]
}
