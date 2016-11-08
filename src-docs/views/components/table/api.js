export default {
  table: {
    props: [{
      name: 'fixedHeader',
      type: 'Boolean',
      default: 'false',
      desc: '是否固定表头'
    }, {
      name: 'fixedFooter',
      type: 'Boolean',
      default: 'false',
      desc: '是否固定表尾'
    }, {
      name: 'height',
      type: 'String',
      default: 'auto',
      desc: '表格的高度'
    }, {
      name: 'allRowsSelected',
      type: 'Boolean',
      default: 'false',
      desc: '是否允许选择全部'
    }, {
      name: 'multiSelectable',
      type: 'Boolean',
      default: 'false',
      desc: '是否可以多选'
    }, {
      name: 'selectable',
      type: 'Boolean',
      default: 'true',
      desc: '是否可以选择'
    }, {
      name: 'showCheckbox',
      type: 'Boolean',
      default: 'true',
      desc: '是否显示复选框'
    }],
    slots: [{
      name: 'header',
      desc: '用于放置 `thead` 组件'
    }, {
      name: 'footer',
      desc: '用于放置 `tfoot` 组件'
    }, {
      name: 'default',
      desc: '用于放置 `tbody` 组件'
    }],
    events: [{
      name: 'rowClick',
      desc: '某一行被点击时触发, 参数 (index, rowId, tr): \n * index 这一行的下标 \n * rowId 这一行的id,有组件自动生成的唯一值 \n * tr tr组件实体'
    }, {
      name: 'rowHover',
      desc: '鼠标在某一行上时触发， 参数同 `rowClick` 一致'
    }, {
      name: 'rowHoverExit',
      desc: '鼠标在从一行移出时触发， 参数同 `rowClick` 一致'
    }, {
      name: 'rowSelection',
      desc: '当某一行被选择时触发，参数 (selectedRows) \n selectRows 是一个被选择 rowId 数组，'
    }, {
      name: 'cellClick',
      desc: 'td被点击时触发, 参数 (rowIndex, columnName, td, rowId, tr) \n * rowIndex 所在行的下标 \n * td组件的name属性 \n * td 组件实体 \n * rowId 所在行的id \n * tr tr组件实体'
    }, {
      name: 'cellHover',
      desc: '鼠标在这个 td 上时触发, 参数同 `cellClick` 一致'
    }, {
      name: 'cellHoverExit',
      desc: '鼠标从这个 td 移出时触发, 参数同 `cellClick` 一致'
    }]
  },
  tbody: {
    slots: [{
      name: 'default',
      desc: '用于放置 `tr` 组件'
    }]
  },
  thead: {
    slots: [{
      name: 'default',
      desc: '用于放置 `tr` 组件'
    }]
  },
  tr: {
    props: [{
      name: 'selectable',
      desc: '是否可以被选择'
    }],
    slots: [{
      name: 'default',
      desc: '用于放置 `td` 或 `th` 组件'
    }]
  },
  th: {
    props: [{
      name: 'tooltip',
      type: 'String',
      default: '',
      desc: '提示文字'
    }, {
      name: 'tooltipPosition',
      type: 'String',
      default: 'bottom-center',
      desc: '提示文字文字, [垂直位置]-[水平位置]，垂直位置: top，middle, bottom; 水平位置: left, center, right'
    }, {
      name: 'touch',
      type: 'Boolean',
      default: 'false',
      desc: '是否为 touch 的样式，一般用在移动端，提示框会大一些'
    }],
    slots: [{
      name: 'default',
      desc: '内容部分'
    }]
  },
  td: {
    props: [{
      name: 'name',
      type: 'String',
      default: '',
      desc: 'td 的名称，这是一个标识，在表格的 `cellClick` `cellHover` `cellHoverExit` 事件发生时会作为参数(columnName)传入,用来区分是哪一个 td 发生事件'
    }],
    slots: [{
      name: 'default',
      desc: '内容部分'
    }]
  }
}
