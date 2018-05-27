import { fade } from '../utils/colorManipulator';

export default (theme) => {
  return `
  .mu-select-content {
    color: ${theme.text.primary};
  }
  .mu-select-input {
    color: ${theme.text.primary};
  }
  .mu-selection-text.is-active {
    color: ${theme.primary};
  }
  .mu-select-no-data {
    color: ${theme.text.disabled};
  }
  .mu-option.is-selected .mu-item {
    color: ${theme.secondary};
  }
  .mu-option.is-focused {
    color: ${theme.secondary};
    background-color: ${fade(theme.text.primary, 0.1)};
  }
  .mu-option.is-disabled .mu-item {
    color: ${theme.text.disabled};
  }
  `;
};
