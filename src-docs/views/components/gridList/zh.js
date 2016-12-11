import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  complexExample: '稍复杂的使用',
  complexExampleDesc: '通过定义 `rows` 和 `cols` 来定义每个 `gridTile` 的空间， 通过 `titlePosition` 改变 title的位置，`actionPosition` 改变 `action` 位置。',
  inlineExample: '在一行的示例',
  inlineExampleDesc: '通过外部 `class` 调整成一行的网格列表',
  gridList: {
    props: {
      cellHeight: '每一个网格的高度',
      cols: '每一行的列数',
      padding: '每一个网的 `padding` 值'
    },
    slots: {
      default: '用于放置子组件 `gridTile` 或者 `subHeader` '
    }
  },
  gridTile: {
    props: {
      cols: '占的列数, 会根据此参数计算宽度',
      rows: '占的行数, 会根据此参数计算高度',
      title: '标题文字，也可以通过 name 为 title 的 `slot`来设置',
      subTitle: '子标题文字，也可以通过 name 为 subTitle 的 `slot`来设置',
      titlePosition: '标题栏的位置，`top` 在上方, `bottom` 在下方',
      titleBarClass: '标题栏的样式',
      actionPosition: '动作按钮的位置， right 在右边， left 在左边'
    },
    slots: {
      title: '放置标题文字',
      subTitle: '放置子标题文字',
      action: '放置动作按钮，`iconButton` 组件等',
      default: '用于放置图片等元素'
    }
  }
}
