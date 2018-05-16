export default (theme) => {
  return `
  .mu-radio.disabled  {
    color: ${theme.text.disabled};
  }
  .mu-radio-checked {
    color: ${theme.primary};
  }
  .mu-radio-label {
    color: ${theme.text.primary};
  }
  .mu-radio.disabled .mu-radio-label {
    color: ${theme.text.disabled};
  }
  `;
};
