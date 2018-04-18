import { fade } from '../utils/colorManipulator';
export default (theme) => {
  return `
  .mu-tabs {
    background-color: ${theme.primary};
    color: ${fade(theme.text.alternate, 0.7)};
  }
  .mu-tabs.mu-inverse {
    color: ${fade('#fff', 0.7)};
  }
  .mu-tabs.mu-tabs-inverse {
    background-color: ${theme.background.paper};
    color: ${theme.text.secondary};
  }
  .mu-tabs.mu-primary-text-color .mu-tab-active {
    color: ${theme.primary};
  }
  .mu-tabs.mu-secondary-text-color .mu-tab-active {
    color: ${theme.secondary};
  }
  .mu-tabs.mu-success-text-color .mu-tab-active {
    color: ${theme.success};
  }
  .mu-tabs.mu-warning-text-color .mu-tab-active {
    color: ${theme.warning};
  }
  .mu-tabs.mu-info-text-color .mu-tab-active {
    color: ${theme.info};
  }
  .mu-tabs.mu-error-text-color .mu-tab-active {
    color: ${theme.error};
  }
  .mu-tab-link-highlight{
    background-color: ${theme.secondary};
  }
  .mu-tab-active{
    color: #fff;
  }
  `;
};
