function createEnumProps (type, def, enums) {
  return {
    type,
    default: def,
    validator (val) {
      return enums.indexOf(val) !== -1;
    }
  };
}

export const props = {
  direction: createEnumProps(String, 'row', ['row', 'column', 'row-reverse', 'column-reverse']),
  wrap: createEnumProps(String, '', ['', 'wrap', 'nowrap', 'wrap-reverse']),
  fill: Boolean,
  justifyContent: createEnumProps(String, 'start', ['start', 'center', 'end', 'between', 'around']),
  alignItems: createEnumProps(String, 'start', ['start', 'center', 'end', 'baseline', 'stretch']),
  alignContent: createEnumProps(String, '', ['', 'start', 'center', 'end', 'between', 'around', 'stretch']),
  alignSelf: createEnumProps(String, '', ['', 'auto', 'start', 'center', 'end', 'baseline', 'stretch'])
};

export function generatePropsClass (props) {
  const classNames = [];
  if (props.direction) classNames.push('flex-' + props.direction);
  if (props.wrap) classNames.push('flex-' + props.wrap);
  if (props.fill) classNames.push('flex-fill');
  if (props.justifyContent) classNames.push('justify-content-' + props.justifyContent);
  if (props.alignItems) classNames.push('align-items-' + props.alignItems);
  if (props.alignContent) classNames.push('align-content-' + props.alignContent);
  if (props.alignSelf) classNames.push('align-self-' + props.alignSelf);
  return classNames.join(' ');
}
