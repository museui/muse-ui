import { fade, darken } from '../utils/colorManipulator';

export default (theme) => {
  return `
  .mu-raised-button {
    background-color: ${theme.background.paper};
    color: ${theme.text.primary};
  }
  .mu-raised-button.hover .mu-button-wrapper {
    background-color: ${fade(theme.text.primary, 0.1)};
  }
  .mu-raised-button.mu-inverse.hover  .mu-button-wrapper {
    background-color: ${fade(theme.text.alternate, 0.3)};
  }
  .mu-raised-button.disabled{
    color: ${fade(theme.text.primary, 0.3)};
    background-color: ${darken(theme.text.alternate, 0.1)};
  }
  .mu-flat-button {
    color: ${theme.text.primary};
  }
  .mu-flat-button.hover,
  .mu-icon-button.hover {
    background-color: ${fade(theme.text.primary, 0.1)};
  }
  .mu-flat-button.disabled {
    color: ${theme.text.disabled};
  }
  .mu-flat-button .mu-circle-ripple {
    color: ${theme.text.primary};
  }
  .mu-icon-button {
    color: ${theme.text.primary};
  }
  .mu-icon-button .mu-circle-ripple{
    color: ${theme.text.primary};
  }
  .mu-icon-button.disabled {
    color: ${theme.text.disabled};
  }
  .mu-fab-button {
    background-color: ${theme.primary};
    color: ${theme.text.alternate};
  }
  .mu-fab-button.hover .mu-button-wrapper,
  .mu-fab-button:active .mu-button-wrapper {
    background-color: ${fade(theme.text.alternate, 0.3)};
  }
  .mu-fab-button.disabled {
    color: ${fade(theme.text.primary, 0.3)};
    background-color: ${darken(theme.text.alternate, 0.1)};
  }
  `;
};
