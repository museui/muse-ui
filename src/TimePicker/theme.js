export default (theme) => {
  return `
  .mu-time-display {
    background-color: ${theme.primary};
    color: ${theme.text.alternate};
  }
  .mu-timepicker-number.selected {
    background-color: ${theme.primary};
    color: ${theme.text.alternate};
  }
  .mu-timepicker-pointer {
    background-color: ${theme.primary};
  }
  .mu-timepicker-pointer-mark {
    background-color: ${theme.text.alternate};
    border-color: ${theme.primary};
  }
  `;
};
