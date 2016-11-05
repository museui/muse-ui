export default {
  props: [{
    name: 'value',
    type: 'String',
    default: '',
    desc: 'icon的名称，不同的value 对应不同的icon， 可以去图表集中查找'
  }, {
    name: 'size',
    type: 'Number',
    default: '24',
    desc: '图标的大小'
  }, {
    name: 'color',
    type: 'String',
    default: '',
    desc: '图表的颜色'
  }]
}
