import { fade } from '../utils/colorManipulator';

export default (theme) => {
  return `
  .mu-bottom-nav{
    background-color: ${theme.background.paper};
  }

  .mu-bottom-nav-shift{
    background-color: ${theme.primary};
  }
  .mu-bottom-item {
    color: ${theme.text.secondary};
  }
  .mu-bottom-nav-shift .mu-bottom-item {
    color: ${fade(theme.text.alternate, 0.7)};
  }
  .mu-bottom-item-active .mu-bottom-item-icon,
  .mu-bottom-item-active .mu-bottom-item-text {
    color: ${theme.primary};
  }
  .mu-bottom-nav-shift .mu-bottom-item-active .mu-bottom-item-icon,
  .mu-bottom-nav-shift .mu-bottom-item-active .mu-bottom-item-text {
    color: ${theme.text.alternate};
  }
  `;
};
