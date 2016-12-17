import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  props: {
    showDelete: 'whether it is display the deletion icon or not',
    deleteIconClass: 'style of the deletion icon',
    disabled: 'disable the component',
    backgroundColor: 'background color',
    color: 'color of text'
  },
  slots: {
    default: 'used to place the avatar  and brief text'
  },
  events: {
    delete: 'it will trigger when the deletion icon was clicked',
    click: 'it will trigger when it was clicked'
  }
}
