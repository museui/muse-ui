export default (theme) => {
  return `
  .mu-expansion-panel {
    color: ${theme.text.primary};
    border-top-color: ${theme.divider};
  }
  .mu-expansion-toggle-btn {
    color: ${theme.text.secondary};
  }
  .mu-expansion-panel-actions {
    border-top-color: ${theme.divider};
  }
  `;
};
