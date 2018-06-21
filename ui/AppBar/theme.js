export default (theme, type) => {
  return `
    .mu-appbar {
      background-color: ${type === 'light' ? '#f5f5f5' : '#212121'};
      color: ${theme.text.primary};
    }
  `;
};
