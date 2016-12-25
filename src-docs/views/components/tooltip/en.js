import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: 'tooltip will appear when you hover on the icon, you can change the position and style by different attributes. The container element of `Tooltip` component should be a position element(i.e: `position` should be relative、absolute or fixed)',
  props: {
    trigger: 'the element which will trigger the  tooltip, we will bind the event to this element',
    label: 'hint text',
    verticalPosition: 'vertical position, top or bottom',
    horizontalPosition: 'vertical position, left, center, right',
    show: 'display or not',
    touch: 'whether it is a touch style, often we use this attibute on the mobile, and the tooltip box is more larger'
  }
}
