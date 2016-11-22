export default {
  props: [{
    name: 'current',
    type: 'Number',
    desc: '当前页数'
  }, {
    name: 'total',
    type: 'Number',
    default: '0',
    desc: '页码总数'
  }, {
    name: 'isCircle',
    type: 'Boolean',
    default: 'false',
    desc: '页码的显示外观是否为圆形'
  }],
  slots: [],
  events: []
}
