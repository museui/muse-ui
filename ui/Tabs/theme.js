import { fade } from '../utils/colorManipulator';
export default (theme) => {
  return `
  .mu-tabs{
    background-color: ${theme.primary};
    color: ${fade(theme.text.alternate, 0.7)};
  }

  .mu-tabs-inverse {
    background-color: ${theme.background.default};
    color: ${theme.text.secondary};
  }

  .mu-tab-link-highlight{
    background-color: ${theme.secondary};
  }
  .mu-tab-active {
    color: ${theme.text.alternate};
  }
  .mu-tab-active.is-inverse {
    color: ${theme.text.primary};
  }
  `;
};
