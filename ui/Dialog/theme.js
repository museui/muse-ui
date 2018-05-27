import { fade } from '../utils/colorManipulator';

export default (theme) => {
  return `
  .mu-dialog {
    background-color: ${theme.background.paper};
  }
  .mu-dialog-scrollable .mu-dialog-title {
    border-bottom-color: ${theme.divider};
  }
  .mu-dialog-scrollable .mu-dialog-actions {
    border-top-color: ${theme.divider};
  }
  .mu-dialog-title {
    color: ${theme.text.primary};
  }
  .mu-dialog-body {
    color: ${fade(theme.text.primary, 0.6)};
  }
  `;
};
