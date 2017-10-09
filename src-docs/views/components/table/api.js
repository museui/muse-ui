export default {
  table: {
    props: [{
      name: 'fixedHeader',
      type: 'Boolean',
      default: 'false',
      desc: 'table.props.fixedHeader'
    }, {
      name: 'fixedFooter',
      type: 'Boolean',
      default: 'false',
      desc: 'table.props.fixedFooter'
    }, {
      name: 'height',
      type: 'String',
      default: 'auto',
      desc: 'table.props.height'
    }, {
      name: 'enableSelectAll',
      type: 'Boolean',
      default: 'false',
      desc: 'table.props.enableSelectAll'
    }, {
      name: 'allRowsSelected',
      type: 'Boolean',
      default: 'false',
      desc: 'table.props.allRowsSelected'
    }, {
      name: 'multiSelectable',
      type: 'Boolean',
      default: 'false',
      desc: 'table.props.multiSelectable'
    }, {
      name: 'selectable',
      type: 'Boolean',
      default: 'true',
      desc: 'table.props.selectable'
    }, {
      name: 'showCheckbox',
      type: 'Boolean',
      default: 'true',
      desc: 'table.props.showCheckbox'
    }],
    slots: [{
      name: 'header',
      desc: 'table.slots.header'
    }, {
      name: 'footer',
      desc: 'table.slots.footer'
    }, {
      name: 'default',
      desc: 'table.slots.default'
    }],
    events: [{
      name: 'rowClick',
      desc: 'table.events.rowClick'
    }, {
      name: 'rowHover',
      desc: 'table.events.rowHover'
    }, {
      name: 'rowHoverExit',
      desc: 'table.events.rowHoverExit'
    }, {
      name: 'rowSelection',
      desc: 'table.events.rowSelection'
    }, {
      name: 'cellClick',
      desc: 'table.events.cellClick'
    }, {
      name: 'cellHover',
      desc: 'table.events.cellHover'
    }, {
      name: 'cellHoverExit',
      desc: 'table.events.cellHoverExit'
    }]
  },
  tbody: {
    slots: [{
      name: 'default',
      desc: 'tbody.slots.default'
    }]
  },
  thead: {
    slots: [{
      name: 'default',
      desc: 'thead.slots.default'
    }]
  },
  tfoot: {
    slots: [{
      name: 'default',
      desc: 'tfoot.slots.default'
    }]
  },
  tr: {
    props: [{
      name: 'selectable',
      type: 'Boolean',
      default: 'false',
      desc: 'tr.props.selectable'
    }, {
      name: 'selected',
      type: 'Boolean',
      default: 'false',
      desc: 'tr.props.selected'
    }],
    slots: [{
      name: 'default',
      desc: 'tr.slots.default'
    }]
  },
  th: {
    props: [{
      name: 'tooltip',
      type: 'String',
      default: '',
      desc: 'th.props.tooltip'
    }, {
      name: 'tooltipPosition',
      type: 'String',
      default: 'bottom-right',
      desc: 'th.props.tooltipPosition'
    }, {
      name: 'touch',
      type: 'Boolean',
      default: 'false',
      desc: 'th.props.touch'
    }, {
      name: 'sortable',
      type: 'Boolean',
      default: 'false',
      desc: 'if the column should be sortable or not'
    }],
    slots: [{
      name: 'default',
      desc: 'th.slots.default'
    }]
  },
  td: {
    props: [{
      name: 'name',
      type: 'String',
      default: '',
      desc: 'td.props.name'
    }],
    slots: [{
      name: 'default',
      desc: 'td.slots.default'
    }]
  }
}
