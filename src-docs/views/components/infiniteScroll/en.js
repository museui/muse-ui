import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: 'this example will load more data when you scroll down',
  props: {
    scroller: 'scrollable element, it will listen to `scroll` event',
    loading: 'whether it is loading data or not',
    loadingText: 'the text when loading data'
  },
  events: {
    load: 'this event will be triggered when scroll to the bottom'
  }
}
