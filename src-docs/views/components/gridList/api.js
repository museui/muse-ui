export default {
  gridList: {
    props: [{
      name: 'cellHeight',
      type: 'Number',
      default: '180',
      desc: '每一个网格的高度'
    }, {
      name: 'cols',
      type: 'Number',
      default: '2',
      desc: '每一行的列数'
    }, {
      name: 'padding',
      type: 'Number',
      default: '4',
      desc: '每一个网的 `padding` 值'
    }],
    slots: [{
      name: 'default',
      desc: '用于放置子组件 `gridTile` 或者 `subHeader` '
    }]
  },
  gridTile: {
    props: [{
      name: 'cols',
      type: 'Number',
      default: '1',
      desc: '占的列数, 会根据此参数计算宽度'
    }, {
      name: 'rows',
      type: 'Number',
      default: '1',
      desc: '占的行数, 会根据此参数计算高度'
    }, {
      name: 'title',
      type: 'String',
      default: '',
      desc: '标题文字，也可以通过 name 为 title 的 `slot`来设置'
    }, {
      name: 'subTitle',
      type: 'String',
      default: '',
      desc: '子标题文字，也可以通过 name 为 subTitle 的 `slot`来设置'
    }, {
      name: 'titlePosition',
      type: 'String',
      default: 'bottom',
      desc: '标题栏的位置，`top` 在上方, `bottom` 在下方'
    }, {
      name: 'titleBarClass',
      type: 'String,Array,Object',
      default: '',
      desc: '标题栏的样式'
    }, {
      name: 'actionPosition',
      type: 'String',
      default: 'right',
      desc: '动作按钮的位置， right 在右边， left 在左边'
    }],
    slots: [{
      name: 'title',
      desc: '放置标题文字'
    }, {
      name: 'subTitle',
      desc: '放置子标题文字'
    }, {
      name: 'action',
      desc: '放置动作按钮，`iconButton` 组件等'
    }, {
      name: 'default',
      desc: '用于放置图片等元素'
    }]
  }
}
