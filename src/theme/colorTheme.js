export default (theme) => {
  return `
  .mu-primary-color {
    background-color: ${theme.primary};
  }
  .mu-secondary-color {
    background-color: ${theme.secondary};
  }
  .mu-success-color {
    background-color: ${theme.success};
  }
  .mu-warning-color {
    background-color: ${theme.warning};
  }
  .mu-info-color {
    background-color: ${theme.info};
  }
  .mu-error-color {
    background-color: ${theme.error};
  }
  .mu-inverse {
    color: #fff;
  }
  .mu-primary-text-color {
    color: ${theme.primary};
  }
  .mu-secondary-text-color {
    color: ${theme.secondary};
  }
  .mu-success-text-color {
    color: ${theme.success};
  }
  .mu-warning-text-color {
    color: ${theme.warning};
  }
  .mu-info-text-color {
    color: ${theme.info};
  }
  .mu-error-text-color {
    color: ${theme.error};
  }
  `;
};
