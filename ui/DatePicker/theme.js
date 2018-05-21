export default (theme) => {
  return `
  .mu-datepicker {
    color: ${theme.primary};
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
  .mu-datepicker-year {
    background-color: ${theme.background.paper};
  }
  .mu-date-display-year {
    color: ${theme.text.alternate};
  }
  .mu-date-display-monthday {
    color: ${theme.text.alternate};
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
