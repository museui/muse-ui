export default {
  snackbar: {
    props: [{
      name: 'message',
      type: 'String',
      default: '',
      desc: 'snackbar.props.message'
    }, {
      name: 'action',
      type: 'String',
      default: '',
      desc: 'snackbar.props.action'
    }, {
      name: 'actionColor',
      type: 'String',
      default: '',
      desc: 'snackbar.props.actionColor'
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
      desc: 'toast.props.message'
    }],
    events: [{
      name: 'close',
      desc: 'toast.events.close'
    }]
  }
}
