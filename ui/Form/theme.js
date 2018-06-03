export default (theme) => {
  return `
  .mu-form-item {
    color: ${theme.text.secondary};
  }

  .mu-form-item__focus {
    color: ${theme.primary};
  }

  .mu-form-item__error {
    color: ${theme.error};
  }
  .mu-form-item-help {
    color: ${theme.text.secondary};
  }
  .mu-form-item__error .mu-form-item-help {
    color: ${theme.error};
  }
  `;
};
