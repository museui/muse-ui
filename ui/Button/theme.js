import { fade, darken } from '../utils/colorManipulator';

export default (theme) => {
  return `
  .mu-raised-button {
    background-color: ${theme.background.paper};
    color: ${theme.text.primary};
  }
  .mu-raised-button.disabled{
    color: ${fade(theme.text.primary, 0.3)};
    background-color: ${darken(theme.text.alternate, 0.1)};
  }
  .mu-flat-button {
    color: ${theme.text.primary};
  }
  .mu-flat-button.disabled {
    color: ${theme.text.disabled};
  }
  .mu-icon-button {
    color: ${theme.text.primary};
  }
  .mu-icon-button.disabled {
    color: ${theme.text.disabled};
  }
  .mu-fab-button {
    background-color: ${theme.primary};
    color: ${theme.text.alternate};
  }
  .mu-fab-button.disabled {
    color: ${fade(theme.text.primary, 0.3)};
    background-color: ${darken(theme.text.alternate, 0.1)};
  }
  `;
};
