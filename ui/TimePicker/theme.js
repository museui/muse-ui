export default (theme, type) => {
  return `
  .mu-timepicker {
    color: ${theme.primary};
    background-color: ${theme.background.paper};
  }
  .mu-time-display {
    background-color: ${type === 'dark' ? '#555555' : ''};
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
