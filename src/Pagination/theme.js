export default (theme) => {
  return `
  .mu-pagination {
    color: ${theme.text.primary};
    font-size: 14px;
  }
  .mu-pagination-item.mu-button.is-current {
    background-color: ${theme.primary};
  }
  `;
};
