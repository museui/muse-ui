import { fade, darken } from '../utils/colorManipulator';
export default (theme) => {
  return `
  .mu-chip {
    background-color: ${darken(theme.text.alternate, 0.12)};
    color: ${fade(theme.text.primary, 0.87)};
  }
  .mu-chip:hover .mu-chip-delete-icon{
    color: ${fade(fade(theme.text.primary, 0.26), 0.4)};
  }
  .mu-chip-delete-icon{
    color: ${fade(theme.text.primary, 0.26)};
  }
  `;
};
