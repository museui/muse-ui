import description from './README.md'

export default {
  description,
  simpleExample: '使用示例',
  simpleExampleDesc: '不同的设备上`snackbar` 与 `toast` 弹出的位置是不同的，使用时需要注意，同时只能存在一个 `snackbar` 或 `toast` 。',
  snackbar: {
    props: {
      message: '提示的信息',
      action: '动作按钮上的文字',
      actionColor: '动作按钮颜色'
    },
    events: {
      close: 'snackbar 需要被关闭时触发事件',
      actionClick: '动作按钮点击事件'
    }
  },
  toast: {
    props: {
      message: '提示的信息'
    },
    events: {
      close: 'toast 需要被关闭时触发事件'
    }
  }
}
