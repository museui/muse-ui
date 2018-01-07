import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: 'can be related to `v-model`',
  disabledExample: 'disabled example',
  stepExample: 'step definition',
  props: {
    name: 'The name attribute of the form elements',
    max: 'maximum',
    min: 'minimum',
    step: 'step',
    disabled: 'disabled sliding block or not',
    value: 'value of  sliding block',
    displayValue: 'display value of sliding block'
  },
  events: {
    input: 'when the value is changed, the component will emit this event with the new value',
    change: 'when the value has changed by clicking or dragging action, the component will emit this event with the new value'
  }
}
