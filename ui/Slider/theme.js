export default (theme) => {
  return `
  .mu-slider-display-value {
    background-color: ${theme.primary};
  }
  .mu-slider-track{
    background-color: ${theme.track};
  }
  .mu-slider-fill{
    background-color: ${theme.primary};
  }
  .mu-slider.disabled .mu-slider-fill {
    background-color: ${theme.track};
  }
  .mu-slider-thumb {
    background-color: ${theme.primary};
    color: ${theme.primary};
  }
  .mu-slider.zero .mu-slider-thumb,
  .mu-slider.disabled .mu-slider-thumb{
    border-color: ${theme.track};
    color: ${theme.track};
    background-color: ${theme.text.alternate};
  }
  `;
};
