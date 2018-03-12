export default (theme) => {
  return `
  .mu-datepicker {
    color: ${theme.text.primary};
  }
  .mu-datepicker-toolbar-title.clickable:hover {
    color: ${theme.primary};
  }
  .mu-datepicker-year {
    background-color: ${theme.background.paper};
  }
  .mu-date-display {
    background-color: ${theme.primary};
    color: ${theme.text.alternate};
  }
  .mu-day-button-bg {
    background-color:${theme.primary};
  }
  .mu-day-button-text {
    color: ${theme.text.primary};
  }
  .mu-day-button.now .mu-day-button-text {
    color:${theme.primary};
  }
  .mu-day-button:hover .mu-day-button-text,
  .mu-day-button.selected .mu-day-button-text {
    color: ${theme.text.alternate};
  }
  .mu-month-button-bg {
    background-color:${theme.primary};
  }
  .mu-month-button-text {
    color: ${theme.text.primary};
  }
  .mu-month-button:disabled .mu-month-button-text {
    color: ${theme.text.disabled};
  }
  .mu-month-button:hover .mu-month-button-text,
  .mu-month-button.selected .mu-month-button-text {
    color: ${theme.text.alternate};
  }
  .mu-year-button-text {
    color: ${theme.text.primary};
  }
  .mu-year-button.selected .mu-year-button-text {
    color:${theme.primary};
  }
  .mu-year-button:hover .mu-year-button-text {
    color:${theme.primary};
  }
  `;
};
