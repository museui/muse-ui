import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: 'you can use it as the `table` tag, only difference is you are not need to add the `mu-` prefix',
  complexExample: 'Complex Example',
  complexExampleDesc: 'you can finish different function by different paramters',
  table: {
    props: {
      fixedHeader: 'fix header or not',
      fixedFooter: 'fix footer or not',
      height: 'height of table',
      enableSelectAll: 'whether it can be select all or not',
      allRowsSelected: 'whether it is default to select all or not',
      multiSelectable: 'multiple select or not',
      selectable: 'selectable or not',
      showCheckbox: 'show checkbox or not'
    },
    slots: {
      header: 'is used to place `thead` component',
      footer: 'is used to place `tfoot` component',
      default: 'is used to place `tbody` component'
    },
    events: {
      rowClick: 'row clicking event, paramters (index, tr): \n * index index of row \n * tr `tr` component entity',
      rowHover: 'row hovering event, paramters is same with `rowClick`',
      rowHoverExit: 'row hover existing event, paramters is same with `rowClick`',
      rowSelection: 'row selection event, paramters (selectedRowsIndex) \n selectedRowsIndex index of row, if `multiSelectable` is `true`, selectedRowsIndex will be an array',
      cellClick: 'td clicking event, paramters (rowIndex, columnName, td, tr) \n * rowIndex index of row \n * columnName name attibute of td component \n * td component entity \n * tr tr component entity',
      cellHover: 'row hovering event, paramters is same with `cellClick`',
      cellHoverExit: 'row hover existing event, paramters is same with `cellClick`'
    }
  },
  tbody: {
    slots: {
      default: 'is used to place `tr` component'
    }
  },
  thead: {
    slots: {
      default: 'is used to place `tr` component'
    }
  },
  tfoot: {
    slots: {
      default: 'is used to place `tr` component'
    }
  },
  tr: {
    props: {
      selectable: 'selectable',
      selected: 'selected'
    },
    slots: {
      default: 'is used to place `td` or `th` component'
    }
  },
  th: {
    props: {
      tooltip: 'tooltip text',
      tooltipPosition: 'position of hint, [vertical]-[horizontal]vertical: top, middle, bottom; horizontal: left, center, right',
      touch: 'whether it is a touch style, often we use this attibute on the mobile, and the tooltip box is more larger'
    },
    slots: {
      default: 'content'
    }
  },
  td: {
    props: {
      name: 'name of td,  this is a identification, when the `cellClick` `cellHover` `cellHoverExit` event has triggered, it will pass as a paramter(columnName), used to distinguish which td triggered this event'
    },
    slots: {
      default: 'content'
    }
  }
}
