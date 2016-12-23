import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: 'the postion of `snackbar` and `toast` is different on the different device, Note: a page should only `snackbar` 或 `toast` 。',
  snackbar: {
    props: {
      message: 'message',
      action: 'text of the action button',
      actionColor: 'color of the action button'
    },
    events: {
      close: 'this event will be triggered when snackbar has been closing',
      actionClick: 'this event will be triggered when the action button has been clicking'
    }
  },
  toast: {
    props: {
      message: 'message'
    },
    events: {
      close: 'this event will be triggered when toast has been closing'
    }
  }
}
