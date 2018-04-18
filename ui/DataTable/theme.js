export default (theme) => {
  return `
  .mu-table {
    background-color: ${theme.text.alternate};
  }
  .mu-table tr {
    color: ${theme.text.primary};
  }
  .mu-table td {
    border-bottom-color: ${theme.divider};
  }
  .mu-table th {
    color: ${theme.text.secondary};
    border-bottom-color: ${theme.divider};
  }
  .mu-table th.is-sortable:hover {
    color: ${theme.text.primary};
  }
  .mu-table th.is-sorting {
    color: ${theme.text.primary};
  }
  .mu-table-border {
    border-color: ${theme.divider};
  }
  .mu-table-border th,
  .mu-table-border td {
    border-right-color: ${theme.divider};
  }
  .mu-table-empty {
    color: ${theme.text.secondary};
  }
  .mu-table-expand-row td.is-expand {
    border-bottom-color: ${theme.divider};
  }
  `;
};
