export default (theme) => {
  return `
  .mu-checkbox {
    color: ${theme.text.secondary};
  }
  .mu-checkbox.disabled {
    color: ${theme.text.disabled};
  }
  .mu-checkbox-checked {
    color: ${theme.primary};
  }
  .mu-checkbox.disabled .mu-checkbox-label {
    color: ${theme.text.disabled};
  }
  .mu-checkbox-label {
    color: ${theme.text.primary};
  }
  `;
};
