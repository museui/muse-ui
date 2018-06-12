export default (theme) => {
  return `
  .mu-pagination {
    color: ${theme.text.primary};
    font-size: 14px;
  }
  .mu-pagination__raised .mu-pagination-item.mu-button,
  .mu-pagination__raised .mu-pagination-btn.mu-button{
    background-color: ${theme.text.alternate};
  }
  .mu-pagination-item.mu-button.is-current {
    background-color: ${theme.primary};
  }
  `;
};
