export default (theme) => {
  return `
  .mu-breadcrumbs-item {
    color: ${theme.primary};
  }
  .mu-breadcrumbs-item.is-disabled {
    color: ${theme.text.disabled};
  }
  .mu-breadcrumbs-divider {
    color: ${theme.text.disabled};
  }
  `;
};
