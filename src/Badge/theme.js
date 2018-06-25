export default (theme) => {
  return `
    .mu-badge{
      background-color: ${theme.track};
      color: ${theme.text.alternate};
    }
  `;
};
