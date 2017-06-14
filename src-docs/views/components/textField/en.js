import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: 'simple examle which use ',
  errorExample: 'style of error status',
  errorExampleDesc: 'use `errorText` to reminder the error status, you can change the error color by `errorColor`',
  iconExample: 'icon usage',
  disabledExample: 'disabled examle',
  inputLenExample: 'record the count of string',
  inputLenExampleDesc: 'after you set `maxLength`, the component will record the count of input string, when the count exceed the length, it will trigger `textOverflow` event with parameter as true',
  props: {
    name: '`input` / `textarea` name attribute',
    type: 'type of input box, only active in the single line input, can be text, password, email, url, number',
    icon: 'display icon',
    iconClass: 'style of icon, the binding way is same with the `class`',
    label: 'label of input box',
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
    fullWidth: 'whether the width is 100% or not, default to 256px',
    underlineShow: 'whether it will display bottom line or not',
    underlineClass: 'style of bottom line, the binding way is same with the `class`',
    underlineFocusClass: 'style of bottom line when the input box is focusing, the binding way is same with the `class`',
    inputClass: 'style of input box, the binding way is same with the `class`',
    multiLine: 'multiple line or not',
    rows: 'rows',
    rowsMax: 'maximum rows',
    maxLength: 'maximum length',
    value: 'value',
    max: 'when the `type = number`, `max` attribute',
    min: 'when the `type = number`, `min` attribute',
    required: 'whether the input is required or not'
  },
  events: {
    focus: 'when the input box is focusing, component will emit this event',
    blur: 'when the input box is bluring, component will emit thisevent',
    input: 'when the value is changed, the component will emit this event with the new value',
    change: 'when the user input, the component will emit this event with the new value'
  },
  slots: {
    default: 'is used to coordinate with other components, can retain the style of input box, and the form component use other components internal, `selectField` `datePicer` `timePicker` are all use this way'
  }
}
