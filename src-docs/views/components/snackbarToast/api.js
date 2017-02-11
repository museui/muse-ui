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
      desc: 'snackbar.events.close'
    }, {
      name: 'actionClick',
      desc: 'snackbar.events.actionClick'
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
