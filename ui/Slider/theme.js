export default (theme) => {
  return `
  .mu-slider {
    color: ${theme.primary};
  }
  .mu-slider-track{
    background-color: ${theme.track};
  }
  .mu-slider.disabled .mu-slider-fill{
    background-color: ${theme.track};
  }
  .mu-slider.zero .mu-slider-thumb,
  .mu-slider.disabled .mu-slider-thumb{
    border-color: ${theme.track};
    color: ${theme.track};
    background-color: ${theme.text.alternate};
  }
  `;
};
