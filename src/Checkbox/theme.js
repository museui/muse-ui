export default (theme) => {
  return `
  .mu-checkbox input[type="checkbox"]:checked + .mu-checkbox-wrapper .mu-checkbox-icon-uncheck {
    color: ${theme.primary};
  }
  .mu-checkbox input[type="checkbox"]:checked + .mu-checkbox-wrapper .mu-checkbox-icon-uncheck.mu-secondary-text-color {
    color: ${theme.secondary};
  }
  .mu-checkbox input[type="checkbox"]:checked + .mu-checkbox-wrapper .mu-checkbox-icon-uncheck.mu-success-text-color {
    color: ${theme.success};
  }
  .mu-checkbox input[type="checkbox"]:checked + .mu-checkbox-wrapper .mu-checkbox-icon-uncheck.mu-warning-text-color {
    color: ${theme.warning};
  }
  .mu-checkbox input[type="checkbox"]:checked + .mu-checkbox-wrapper .mu-checkbox-icon-uncheck.mu-info-text-color {
    color: ${theme.info};
  }
  .mu-checkbox input[type="checkbox"]:checked + .mu-checkbox-wrapper .mu-checkbox-icon-uncheck.mu-error-text-color {
    color: ${theme.error};
  }
  .mu-checkbox input[type="checkbox"]:checked + .mu-checkbox-wrapper .mu-checkbox-ripple-wrapper {
    color: ${theme.primary};
  }
  .mu-checkbox-label {
    color: ${theme.text.primary};
  }
  .mu-checkbox.disabled .mu-checkbox-label {
    color: ${theme.text.disabled};
  }
  .mu-checkbox.disabled .mu-checkbox-icon-uncheck {
    color: ${theme.text.disabled};
  }
  .mu-checkbox-icon-uncheck {
    color: ${theme.text.secondary};
  }
  .mu-checkbox.disabled .mu-checkbox-icon-checked {
    color: ${theme.text.disabled};
  }
  .mu-checkbox-icon-checked {
    color: ${theme.primary};
  }
  `;
};
