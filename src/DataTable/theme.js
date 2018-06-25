import * as colors from '../theme/colors';
export default (theme, type) => {
  return `
  .mu-table {
    background-color: ${theme.text.alternate};
  }
  .mu-table tr {
    color: ${theme.text.primary};
  }
  .mu-table tr.is-stripe {
    background-color: ${type === 'dark' ? colors.grey800 : colors.grey50};
  }
  .mu-table tr.is-hover {
    background-color: ${type === 'dark' ? 'rgba(0, 0, 0, .14)' : colors.grey200};
  }
  .mu-table tr.is-selected {
    background-color: ${type === 'dark' ? colors.grey700 : colors.grey100};
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
