export default (query = '', data = [], maxSearchResults = 0) => {
  const results = [];
  for (let i = 0; i < data.length; i++) {
    const value = getValueByItem(data[i]);
    const index = value.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) continue;
    const before = value.substring(0, index);
    const highlight = value.substring(index, index + query.length);
    const after = value.substring(index + query.length);
    results.push({
      value,
      item: data[i],
      highlight: [
        before,
        `<span class="mu-secondary-text-color">${highlight}</span>`,
        after
      ].join('')
    });
    if (maxSearchResults > 0 && maxSearchResults === results.length) break;
  }
  return results;
};

function getValueByItem (item) {
  if (!item) return '';
  return typeof item === 'string' ? item : item.value;
}
