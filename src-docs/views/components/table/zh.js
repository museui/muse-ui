import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用示例',
  simpleExampleDesc: '同 `table` 标签一样使用，只不过都需要 `mu-` 前缀',
  complexExample: '稍复杂的使用',
  complexExampleDesc: '设置不同的参数，完成不同的功能',
  table: {
    props: {
      fixedHeader: '是否固定表头',
      fixedFooter: '是否固定表尾',
      height: '表格的高度',
      enableSelectAll: '是否允许选择全部',
      allRowsSelected: '是否默认选择全部，设置为true 会选择所有行',
      multiSelectable: '是否可以多选',
      selectable: '是否可以选择',
      showCheckbox: '是否显示复选框'
    },
    slots: {
      header: '用于放置 `thead` 组件',
      footer: '用于放置 `tfoot` 组件',
      default: '用于放置 `tbody` 组件'
    },
    events: {
      rowClick: '某一行被点击时触发, 参数 (index, tr): \n * index 这一行的下标 \n * tr `tr` 组件实体',
      rowHover: '鼠标在某一行上时触发， 参数同 `rowClick` 一致',
      rowHoverExit: '鼠标在从一行移出时触发， 参数同 `rowClick` 一致',
      rowSelection: '当某一行被选择时触发，参数 (selectedRowsIndex) \n selectedRowsIndex 是一个被选择行下标，如果 `multiSelectable` 为 `true` , selectedRowsIndex 是一个数组',
      cellClick: 'td被点击时触发, 参数 (rowIndex, columnName, td, tr) \n * rowIndex 所在行的下标 \n * columnName td组件的name属性 \n * td 组件实体 \n * tr tr组件实体',
      cellHover: '鼠标在这个 td 上时触发, 参数同 `cellClick` 一致',
      cellHoverExit: '鼠标从这个 td 移出时触发, 参数同 `cellClick` 一致'
    }
  },
  tbody: {
    slots: {
      default: '用于放置 `tr` 组件'
    }
  },
  thead: {
    slots: {
      default: '用于放置 `tr` 组件'
    }
  },
  tfoot: {
    slots: {
      default: '用于放置 `tr` 组件'
    }
  },
  tr: {
    props: {
      selectable: '是否可以被选择',
      selected: '是否已选择'
    },
    slots: {
      default: '用于放置 `td` 或 `th` 组件'
    }
  },
  th: {
    props: {
      tooltip: '提示文字',
      tooltipPosition: '提示文字文字, [垂直位置]-[水平位置]，垂直位置: top，middle, bottom; 水平位置: left, center, right',
      touch: '是否为 touch 的样式，一般用在移动端，提示框会大一些'
    },
    slots: {
      default: '内容部分'
    }
  },
  td: {
    props: {
      name: 'td 的名称，这是一个标识，在表格的 `cellClick` `cellHover` `cellHoverExit` 事件发生时会作为参数(columnName)传入,用来区分是哪一个 td 发生事件'
    },
    slots: {
      default: '内容部分'
    }
  }
}
