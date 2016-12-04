export default {
  props: [{
    name: 'title',
    type: 'String',
    desc: '标题, 显示在中间'
  }, {
    name: 'titleClass',
    type: 'String,Object,Array',
    desc: '标题样式，同 `class` 绑定方式一致'
  }, {
    name: 'zDepth',
    type: 'Number',
    default: '1',
    desc: '阴影等级,设置为 0就没有阴影效果'
  }],
  slots: [{
    name: 'left',
    desc: '用于分发 appbar 左边的内容'
  }, {
    name: 'right',
    desc: '用于分发 appbar 右边的内容'
  }, {
    name: 'default',
    desc: '用于分发 appbar 中间的内容，设置此 slot，title参数将没有作用'
  }]
}
