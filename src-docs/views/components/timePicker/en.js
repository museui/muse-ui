import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: 'change the value of `format` can swicth 12/24 hours, swith the direction between the  vertical mode and horizontal mode',
  inlineExample: 'Inline Example',
  inlineExampleDesc: 'By setting the `container=inline` will make the data picker popup with the inline mode',
  props: {
    autoOk: 'whether it is completed automatically or not after you choose the minute, if it is true, the `ok` button is disappear.',
    okLabel: 'the text of `ok` button',
    cancelLabel: 'the text of `cancel` button',
    container: 'dialog/inline, the way of popup time picker',
    mode: '`portrait`-showing with the vertical direction, `landscape`-showing with the horizontal direction',
    format: 'ampm: 12 hours; 24hr: 24 hours',
    name: 'The name attribute of the form elements',
    label: 'the label of time picker',
    labelFloat: 'whether the label can be float',
    labelClass: 'style of label, the binding way is same with `class`',
    labelFocusClass: 'the style of label when the input box is focusing, the binding way is same with `class`',
    disabled: 'whether the time picker is disabled or not',
    hintText: 'hint text',
    hintTextClass: 'the style of hint text, the binding way is same with `class`',
    helpText: 'help text',
    helpTextClass: 'the style of help text, the binding way is same with `class`',
    errorText: 'error text, if this paramter is not null, the time picker will transfer to error status, and the style will be changed',
    errorColor: 'the color of error status, default to red',
    icon: 'icon',
    iconClass: 'the style of icon, the binding way is same with `class`',
    fullWidth: 'whether the width is 100%, default to 256px',
    underlineShow: 'whether it is display the underline',
    underlineClass: 'the style of underline, the binding way is same with `class`',
    underlineFocusClass: 'the style of underline when the input box is focuding, the binding way is same with `class`',
    inputClass: 'the style of input box, the binding way is same with `class`',
    value: 'the value of time cker, you cab replace it with the `v-model` directive'
  },
  events: {
    input: 'this event will be emitted when the value has changed, pass with the new value, (value)',
    change: 'as the user action(such as clicking the ok button) lead to the value has changed, this event will be emitted with the value attribute'
  }
}
