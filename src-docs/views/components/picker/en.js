import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: 'use this component can easily to implement a demo for selecting the provinces',
  props: {
    visibleItemCount: 'the count of visible items',
    values: 'values',
    slots: 'slot array object distribute the chosen data, the property as following: \n * **divider** is a divide operator or not \n * **content** text of divide operator \n * **values** value \n * **width** width \n * **textAlign** align '
  },
  events: {
    change: 'when you selected one item, this event will emitted with parameter (value, index) : \n * **value** the selected value \n * **index** index of the selected value in `slots`'
  }
}
