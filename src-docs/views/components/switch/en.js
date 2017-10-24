import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: '此组件亦可以使用 `v-model` 控制, `labelPosition` 控制文字的位置',
  props: {
    label: 'label',
    labelLeft: 'whether the lable text is on the right or not, default to right side.',
    labelClass: 'style of label, the binding way is same with the `class`',
    trackClass: 'style of track, the binding way is same with `class`',
    thumbClass: 'style of thumb, the binding way is same with `class`',
    disabled: 'disabled or not',
    value: 'value, true/false'
  },
  events: {
    input: 'when the value attribute has changed, this event will be emitted with the new value',
    change: 'is the same with the change event of `input[type=checkbox]` element, pass with the value attribute'
  }
}
