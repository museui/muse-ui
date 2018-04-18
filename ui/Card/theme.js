import { fade } from '../utils/colorManipulator';

export default (theme) => {
  return `
    .mu-card {
      background-color: ${theme.background.paper};
    }
    .mu-card-header-title .mu-card-title{
      color: ${fade(theme.text.primary, 0.87)};
    }
    .mu-card-header-title .mu-card-sub-title{
      color: ${fade(theme.text.primary, 0.57)};
    }
    .mu-card-text{
      color: ${theme.text.primary};
    }
    .mu-card-title-container .mu-card-title{
      color: ${theme.text.primary};
    }
    .mu-card-title-container .mu-card-sub-title {
      color: ${theme.text.secondary};
    }
  `;
};
