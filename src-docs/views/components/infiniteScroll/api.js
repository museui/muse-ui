export default {
  props: [{
    name: 'scroller',
    type: 'Element',
    default: 'window',
    desc: 'props.scroller'
  }, {
    name: 'loading',
    type: 'Boolean',
    default: 'false',
    desc: 'props.loading'
  }, {
    name: 'loadingText',
    type: 'String',
    default: '正在加载...',
    desc: 'props.loadingText'
  }],
  events: [{
    name: 'load',
    desc: 'events.load'
  }]
}
