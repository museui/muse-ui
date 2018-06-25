import { fade } from '../utils/colorManipulator';

export default (theme) => {
  return `
  .mu-item-wrapper.hover {
    background-color: ${fade(theme.text.primary, 0.1)};
  }
  .mu-item {
    color: ${theme.text.primary};
  }
  .mu-item-action {
    color: ${theme.text.secondary};
  }
  .mu-item.is-selected {
    color: ${theme.primary};
  }
  .mu-item-sub-title {
    color: ${theme.text.secondary};
  }
  .mu-item-after-text {
   color: ${theme.text.secondary};
  }
  `;
};
