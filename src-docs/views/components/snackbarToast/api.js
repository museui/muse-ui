export default {
  snackbar: {
    props: [{
      name: 'message',
      type: 'String',
      default: '',
      desc: '提示的信息'
    }, {
      name: 'action',
      type: 'String',
      default: '',
      desc: '动作按钮上的文字'
    }, {
      name: 'actionColor',
      type: 'String',
      default: '',
      desc: '动作按钮颜色'
    }],
    events: [{
      name: 'close',
      desc: 'snackbar 需要被关闭时触发事件'
    }, {
      name: 'actionClick',
      desc: '动作按钮点击事件'
    }]
  },
  toast: {
    props: [{
      name: 'message',
      type: 'String',
      default: '',
      desc: '提示的信息'
    }],
    events: [{
      name: 'close',
      desc: 'snackbar 需要被关闭时触发事件'
    }]
  }
}
