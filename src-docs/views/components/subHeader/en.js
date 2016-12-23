import description from './README_EN.md'

export default {
  description,
  listExample: 'coordinate with the list component',
  insetExample: 'inset example',
  gridListExample: 'coordinate with the grid list',
  props: {
    inset: 'if it is true, `margin-left` will be `72px`'
  },
  slots: {
    default: 'place the sub header'
  }
}
