export default (theme) => {
  return `
  .mu-switch.disabled input[type="checkbox"]:checked+.mu-switch-wrapper .mu-switch-track{
    background-color: ${theme.track};
  }
  .mu-switch-checked {
    color: ${theme.primary};
  }
  .mu-switch.disabled .mu-switch-label {
    color: ${theme.text.disabled};
  }
  .mu-switch-label {
    color: ${theme.text.primary};
  }
  .mu-switch.disabled .mu-switch-track {
    background-color: ${theme.track};
  }
  .mu-switch-track {
    background-color: ${theme.track};
  }
  .mu-switch-thumb {
    background-color: ${theme.background.paper};
  }
  `;
};
