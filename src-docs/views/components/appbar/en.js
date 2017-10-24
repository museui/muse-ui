import description from './README_EN.md'
export default {
  description,
  simpleExample: 'Simple Example',
  iconMenu: 'Combine with the IconMenu component',
  addSearch: 'Combine with the search box and button',
  props: {
    title: 'title, centered',
    titleClass: 'title style, the binding way is same with `class`',
    zDepth: 'shadow level, if you set it to 0, shadow is not effective'
  },
  slots: {
    left: 'used to distribute the left content of appbar',
    right: 'used to distribute the right content of appbar',
    default: 'used to distribute the middle content of appbar, when you set this slot, the title parameter is not effective'
  }
}
