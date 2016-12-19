import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: '`value` and `change` event is all need',
  props: {
    autoWidth: 'whether it can calculate the width of menu automatically or not',
    maxHeight: 'the maximum height of munu',
    multiple: 'multiple or not',
    disabled: 'disabled or not',
    openImmediately: 'whether open the menu automatically when initialization',
    anchorOrigin: 'anchor position',
    scroller: 'scroll element, it will listen the scroll `event` and update the popup box position continually',
    labelClass: 'style of text, the binding way is same with `class`',
    iconClass: 'style of icon, the binding way is same with `class`',
    menuClass: 'style of menu, the binding way is same with `class`',
    menuListClass: 'style of menu list, the binding way is same with `class`',
    underlineClass: 'style of the underline, the binding way is same with `class`'
  },
  slots: {
    default: 'is used to place the `menuItem` 、 `subHeader` 、 `divider` components'
  },
  events: {
    change: 'this event will triggered when the value is changed',
    open: 'this event will be triggered when the menu is openning',
    close: 'this event will be triggered when the menu is closing'
  }
}
