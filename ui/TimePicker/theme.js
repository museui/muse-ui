export default (theme) => {
  return `
  .mu-timepicker {
    color: ${theme.primary};
  }
  .mu-time-display-text {
    color: ${theme.text.alternate};
  }
  .mu-timepicker-number {
    color: ${theme.text.primary};
  }
  .mu-timepicker-number__selected {
    background-color: ${theme.primary};
    color: ${theme.text.alternate};
  }
  .mu-timepicker-pointer-mark {
    background-color: ${theme.text.alternate};
  }
  `;
};
