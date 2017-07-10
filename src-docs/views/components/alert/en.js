import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple example',
  simpleExampleDesc: 'four types, success、info、warning、error',
  defineExample: 'Customized example',
  defineExampleDesc: 'customized content, component or others',
  props: {
    type: 'component style, success、info、warning、error',
    closeable: 'close or not',
    showIcon: 'show icon or not'
  },
  events: {
    close: 'emit when close the alert'
  },
  slots: {
    default: 'customized content',
    description: 'customized description content',
    icon: 'customized icon',
    close: 'customized close content'
  }
}
