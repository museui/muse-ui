import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: 'Hold the screen and then drop down, the data will be refreshed when you loosen. The container element of `RefreshControl` component should be a position element(i.e: `position` should be relative、absolute or fixed)',
  props: {
    trigger: 'the element which will trigger the  pull-to-refresh, we will bind the event to this element',
    refreshing: 'whether it is refreshing data or not'
  },
  events: {
    refresh: 'it will be triggered when the data is refreshing'
  }
}
