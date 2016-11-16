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
    }, {
      name: 'href',
      type: 'String',
      default: '',
      desc: '相当于 a 标签的 href属性，设置之后会渲染成 a 标签，默认是使用button标签'
    }, {
      name: 'disabled',
      type: 'Boolean',
      default: 'false',
      desc: '是否禁用'
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
