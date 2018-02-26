export default (theme) => {
  return `
  .mu-switch input[type="checkbox"]:checked + .mu-switch-wrapper  .mu-switch-track {
    background-color: ${theme.primary};
  }
  .mu-switch input[type="checkbox"]:checked + .mu-switch-wrapper .mu-switch-thumb{
    background-color: ${theme.primary};
    color: ${theme.primary};
  }
  .mu-switch.disabled input[type="checkbox"]:checked + .mu-switch-wrapper .mu-switch-track{
    background-color: ${theme.track};
  }
  .mu-switch.disabled .mu-switch-label {
    color: ${theme.text.disabled};
  }
  .mu-switch-label {
    color: ${theme.text.primary};
  }
  .mu-switch.disabled .mu-switch-track{
    background-color: ${theme.track};
  }
  .mu-switch-track {
    background-color: ${theme.track};
  }
  .mu-switch-thumb {
    background-color: ${theme.background.default};
  }
  `;
};
