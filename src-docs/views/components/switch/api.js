export default {
  props: [{
    name: 'label',
    type: 'String',
    default: '',
    desc: '显示的标签文字'
  }, {
    name: 'labelLeft',
    type: 'Boolean',
    default: 'false',
    desc: '标签文字是否在左边，默认在右边'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: '设置为 `true`, 将不可用'
  }, {
    name: 'value',
    type: 'Boolean',
    default: 'false',
    desc: '组件的值，true/false'
  }],
  events: [{
    name: 'input',
    desc: '输入时触发的事件，传入value, (value)'
  }, {
    name: 'change',
    desc: '同 input 事件一样'
  }]
}
