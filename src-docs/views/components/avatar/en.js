import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: 'Different picture, icon, file and size setting',
  props: {
    backgroundColor: 'background color',
    color: 'the color of icon and text',
    src: 'is same with the src attribute of img tag',
    imgClass: 'style of picture, the binding way is same with `class`',
    icon: 'the icon what you want to show',
    iconClass: 'style of icon, the binding way is same with `class`',
    iconSize: 'size of icon',
    size: 'the size of avatar, default to 40px'
  },
  slots: {
    default: 'somewhere to place the avatar`s text'
  }
}
