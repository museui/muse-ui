import { fade } from '../utils/colorManipulator';
export default (theme, type) => {
  return `
  .mu-picker {
    color: ${theme.primary};
    background-color: ${theme.background.paper};
  }
  .mu-picker-display {
    background-color: ${type === 'dark' ? '#555555' : 'currentColor'};
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
  .mu-timepicker-list-hours {
    border-right-color: ${theme.divider};
  }
  .mu-timepicker-hour-button,
  .mu-timepicker-minute-button {
    color: ${theme.text.primary};
  }
  .mu-timepicker-hour-button:hover,
  .mu-timepicker-minute-button:hover,
  .mu-year-button:hover {
    background-color: ${fade(theme.text.primary, 0.1)};
  }
  `;
};
