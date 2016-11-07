export default {
  props: [{
    name: 'max',
    type: 'Number',
    default: '100',
    desc: '最大值'
  }, {
    name: 'min',
    type: 'Number',
    default: '100',
    desc: '最小值'
  }, {
    name: 'step',
    type: 'Number',
    default: '0.1',
    desc: '步长'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: '是否禁用滑块'
  }, {
    name: 'value',
    type: 'Number',
    default: '0',
    desc: '滑块的值'
  }],
  events: [{
    name: 'input',
    desc: 'value 发生改变触发的事件，传入新的value, (value)'
  }, {
    name: 'change',
    desc: '同 input 事件一样'
  }]
}
