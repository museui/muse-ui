export default (theme) => {
  return `
  .mu-input {
    color: ${theme.text.secondary};
  }
  .mu-input__focus {
    color: ${theme.primary};
  }
  .mu-input__error {
    color: ${theme.error};
  }
  .mu-input.disabled .mu-input-content {
    color: ${theme.text.disabled};
  }
  .mu-input-help {
    color: ${theme.text.secondary};
  }
  .mu-input__error .mu-input-help {
    color: ${theme.error};
  }
  .mu-input.has-label .mu-input-label.float {
    color: ${theme.text.disabled};
  }
  .mu-input-line {
    background-color: ${theme.divider};
  }
  .mu-input-line.disabled{
    border-bottom-color: ${theme.text.disabled};
  }
  .mu-input-suffix-text,
  .mu-input-prefix-text {
    color: ${theme.text.secondary};
  }
  .mu-text-field-input {
    color: ${theme.text.primary};
  }
  .mu-text-field-suffix {
    color: ${theme.text.secondary};
  }
  `;
};
