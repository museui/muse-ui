import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: '`v-model` control the value of drop down, you can config the options by `menuItem`, and you can mutiple select by  `multiple` attribute, and in this case, `v-model` should be bind to array',
  complexExample: 'Complex Example',
  complexExampleDesc: '`maxHeight` control the height of popup box, `errorText` can be reminder the message when form verification failure',
  props: {
    autoWidth: 'adjust width automatically when it is true',
    maxHeight: 'the maximum height of menu',
    multiple: 'multiple or not',
    name: '`input` element name attribute',
    label: 'label',
    labelFloat: 'whether the label can be floated or not',
    labelClass: 'style of label, the binding way is same with the `class`',
    labelFocusClass: 'style of label when the input is focusing, the binding way is same with the `class`',
    disabled: 'whether ths input is disabled or not',
    hintText: 'hint text',
    hintTextClass: 'style of prompt text, the binding way is same with the `class`',
    helpText: 'help text',
    helpTextClass: 'style of help text, the binding way is same with the `class`',
    errorText: 'error text, the input box will become to error status when this parameters is not empty, thus the effect of style will be updated.',
    errorColor: 'color of error status, default to red',
    icon: 'display icon',
    iconClass: 'style of icon, the binding way is same with the `class`',
    fullWidth: 'whether the width is 100% or not, default to 256px',
    underlineShow: 'whether it will display bottom line or not',
    underlineClass: 'style of bottom line, the binding way is same with the `class`',
    underlineFocusClass: 'style of bottom line when the input box is focusing, the binding way is same with the `class`',
    dropDownIconClass: 'style of icon, the binding way is same with `class`',
    value: 'value of drop down box, you can use `v-model` instead of setting this parameter',
    scroller: 'scroll element, will listen to its `scroll` event, it will update the position of drop-down continually when you scroll.',
    separator: 'separator'
  },
  slots: {
    default: 'is used to place `menuItem`, `subHeader`, `divider` components'
  },
  events: {
    input: 'when the value is changed, the component will emit this event with the new value',
    change: 'when the user change the value , the component will emit this event with the new value',
    open: 'dropDown menu open event',
    close: 'dropDown menu open event'
  }
}
