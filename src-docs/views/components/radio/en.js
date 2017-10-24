import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: '`radio` 组件的属性和checkbox一致, 并且都可以通过 `v-model` 控制value',
  props: {
    name: 'is equal to the name attribute of `input[type=radio]` element',
    nativeValue: 'is equal to the name attribute of `input[type=radio]` element',
    label: 'label text',
    labelLeft: 'whether the label text is on the right or not, default to left side.',
    labelClass: 'style of label, the binding way is same with `class`',
    disabled: 'disabled the checkbox',
    uncheckIcon: 'the icon when you are not selecting, it should be selected from the material design icon library',
    checkedIcon: 'the icon when you are selecting, it should be selected from the material design icon library',
    iconClass: 'style of icon, the binding way is same with `class`',
    value: 'value'
  },
  events: {
    input: 'when the value attribute has changed, this event will be emitted with the new value',
    change: 'is the same with the change event of `input[type=radio]` element, pass with the value attribute'
  }
}
