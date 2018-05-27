export default (theme, type) => {
  return `
  .mu-datepicker {
    color: ${theme.primary};
    background-color: ${theme.background.paper};
  }
  .mu-datepicker-week {
    color: ${theme.text.primary};
  }
  .mu-datepicker-toolbar-title {
    color: ${theme.text.primary};
  }
  .mu-datepicker-svg-icon {
    color: ${theme.text.primary};
  }
  .mu-date-display {
    background-color: ${type === 'dark' ? '#555555' : ''};
  }
  .mu-day-button-text {
    color: ${theme.text.primary};
  }
  .mu-day-button:hover:not(:disabled) .mu-day-button-text,
  .mu-day-button.selected .mu-day-button-text{
    color: ${theme.text.alternate};
  }
  .mu-month-button-text {
    color: ${theme.text.primary};
  }
  .mu-month-button:hover .mu-month-button-text,
  .mu-month-button.selected .mu-month-button-text {
    color: ${theme.text.alternate};
  }
  .mu-month-button:disabled .mu-month-button-text {
    color: ${theme.text.disabled};
  }
  .mu-year-button-text {
    color: ${theme.text.primary};
  }

  `;
};
