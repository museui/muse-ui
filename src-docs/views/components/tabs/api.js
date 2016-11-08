export default {
  tabs: {
    props: [{
      name: 'value',
      type: '',
      default: '',
      desc: '必需，需要和子组件 tab 配合'
    }],
    slots: [{
      name: 'default',
      desc: '用于放置 tab 组件'
    }],
    events: [{
      name: 'change',
      desc: '当 value 改变的时触发，参数(value) value 新的value'
    }]
  },
  tab: {
    props: [{
      name: 'icon',
      type: 'String',
      default: '',
      desc: 'tab 上的图标'
    }, {
      name: 'title',
      type: 'String',
      default: '',
      desc: 'tab 上的文字'
    }, {
      name: 'value',
      type: '',
      default: '',
      desc: '必需，当value 与父组件的 value值相等时，会变成选中状态'
    }],
    events: [{
      name: 'active',
      desc: '当 tab 被选择时触发'
    }, {
      name: 'click',
      desc: '当 tab 被点击时触发'
    }]
  }
}
