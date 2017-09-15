import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple example',
  simpleExampleDesc: 'Default',
  defineExample: 'Customized example',
  defineExampleDesc: 'customized content, component or others',
  props: {
    height: 'Display component when scrolled height reach this value.',
    bottom: ' The distance of the component to the bottom.',
    right: 'The distance of the component to the right.',
    duration: ' Duration time of scrolling animation. Unit: ms'
  },
  events: {
    callBack: 'Emit when back top'
  },
  slots: {
    default: 'customized content'
  }
}
