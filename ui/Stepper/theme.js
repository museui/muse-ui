export default (theme) => {
  return `
  .mu-step-label {
    color: ${theme.text.primary};
  }
  .mu-step-label.disabled {
    color: ${theme.text.disabled};
  }
  .mu-step-label.completed .mu-step-label-icon,
  .mu-step-label.active .mu-step-label-icon {
    color: ${theme.primary};
  }
  .mu-step-label-circle {
    color: ${theme.text.alternate};
  }
  .mu-step-label.completed .mu-step-label-circle,
  .mu-step-label.active .mu-step-label-circle {
    background-color: ${theme.primary};
  }
  `;
};
