export default {
  props: [{
    name: 'label',
    type: 'String',
    default: '',
    desc: '提示的文字'
  }, {
    name: 'verticalPosition',
    type: 'String',
    default: 'bottom',
    desc: '垂直方向位置，top 在上面， bottom 在下面'
  }, {
    name: 'horizontalPosition',
    type: 'String',
    default: 'center',
    desc: '水平方向位置，left, center, right'
  }, {
    name: 'show',
    type: 'String',
    default: 'false',
    desc: '是否显示'
  }, {
    name: 'touch',
    type: 'Boolean',
    default: 'false',
    desc: '是否为 touch 的样式，一般用在移动端，提示框会大一些'
  }]
}
