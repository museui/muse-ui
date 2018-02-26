export default (theme) => {
  return `
  .mu-radio input[type="radio"]:checked + .mu-radio-wrapper .mu-radio-icon-uncheck{
    color: ${theme.primary};
  }
  .mu-radio input[type="radio"]:checked + .mu-radio-wrapper .mu-radio-ripple-wrapper {
    color: ${theme.primary};
  }
  .mu-radio.disabled .mu-radio-label {
    color: ${theme.text.disabled};
  }
  .mu-radio-label {
    color: ${theme.text.primary};
  }
  .mu-radio.disabled .mu-radio-icon-uncheck {
    color: ${theme.text.disabled};
  }
  .mu-radio-icon-uncheck {
    color: ${theme.text.secondary};
  }
  .mu-radio.disabled .mu-radio-icon-checked {
    color: ${theme.text.disabled};
  }
  .mu-radio-icon-checked {
    color: ${theme.primary};
  }
  `;
};
