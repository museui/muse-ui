import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: 'These are the simplest example. By using the `uncheckIcon` and `checkedIcon` to customize the icon, `disabled` attribute make the component disabled, `labelPosition` will change the position of text',
  controlExample: 'checkbox control',
  controlExampleDesc: '`v-model` control the value of checkbox, as `v-model` only can control the value attribute, the value of checkbox element should be use the `nativeValue` to define',
  props: {
    name: 'is equal to the name attribute of `input[type=checkbox]` element',
    nativeValue: 'is equal to the name attribute of `input[type=checkbox]` element',
    label: 'label text',
    labelLeft: 'whether the label text is on the right or not, default to right side.',
    labelClass: 'style of label, the binding way is same with `class`',
    disabled: 'disabled the checkbox',
    uncheckIcon: 'the icon when you are not selecting, it should be selected from the material design icon library',
    checkedIcon: 'the icon when you are selecting, it should be selected from the material design icon library',
    iconClass: 'style of icon, the binding way is same with `class`',
    value: 'value'
  },
  events: {
    input: 'when the value attribute has changed, this event will be emitted with the new value',
    change: 'is the same with the change event of `input[type=checkbox]` element, pass with the value attribute'
  }
}
