export default {
  props: [{
    name: 'circle',
    type: 'Boolean',
    default: 'false',
    desc: '是否为圆形的纸片'
  }, {
    name: 'rounded',
    type: 'Boolean',
    default: 'true',
    desc: '是否为圆角的纸片'
  }, {
    name: 'zDepth',
    type: 'Number',
    default: '1',
    desc: '1-6, 纸片的阴影程度'
  }],
  slots: [{
    name: 'default',
    desc: '内容部分'
  }]
}
