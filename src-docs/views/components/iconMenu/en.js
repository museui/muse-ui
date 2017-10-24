import description from './README_EN.md'

export default {
  description,
  simpleExample: 'different position of menu',
  simpleExampleDesc: 'define the various position of popup menu by `anchorOrigin` and `targetOrigin`',
  controlExample: 'control the menu selection and display',
  controlExampleDesc: 'control the menu display or hidden by `open`',
  scrollableExample: 'scrollable menu',
  props: {
    icon: 'icon on the button',
    iconClass: 'style of icon, the binding way is same with `class`',
    menuClass: 'style of menu, the binding way is same with `class`',
    menuListClass: 'style of menu list, the binding way is same with `class`',
    multiple: 'multiple or not',
    desktop: 'the menu will be become to the style of desktop which will shrink the width and adjust the padding when this value is `true`',
    maxHeight: 'the maximum height, scroll bar will be showed when the menu length is larger than this value',
    open: 'open the menu or not',
    itemClickClose: 'whether it is closing after clicking the menu item',
    anchorOrigin: 'the positon of anchor',
    targetOrigin: 'the position of target',
    scroller: 'scrollable element, it wil listen to its `scroll` event, and update the position of popup box continually when scrolling.',
    tooltip: 'tooltip',
    tooltipPosition: 'the positon of hint text, [horizon]-[vertical], vertical: top, middle, bottom; horizon: left, center, right',
    value: 'the menu will be selectable after this parameter is set, the menu item will selected when the current value is equal to the value of menu item'
  },
  slots: {
    icon: 'is used to place the icon',
    default: 'is used to place the `menuItem`, `subHeader` , `divider` components'
  },
  events: {
    itemClick: 'it will be triggered when the menu item is clicked, and pass with the `menuItem` component object',
    change: 'this event will triggered when the value is changed',
    open: 'this event will be triggered when the menu is openning',
    close: 'this event will be triggered when the menu is closing'
  }
}
