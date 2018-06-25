export default (theme) => {
  return `
  .mu-slide-picker{
    background: ${theme.background.paper};
  }
  .mu-slide-picker-center-highlight {
    border-top-color: ${theme.divider};
    border-bottom-color: ${theme.divider};
  }
  .mu-slide-picker-slot.mu-slide-picker-slot-divider{
    color: ${theme.text.primary};
  }
  .mu-slide-picker-item{
    color: ${theme.text.secondary};
  }
  .mu-slide-picker-item.selected {
    color: ${theme.text.primary};
  }
  `;
};
