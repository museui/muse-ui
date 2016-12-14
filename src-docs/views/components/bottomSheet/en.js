import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  props: {
    open: 'whether it is open or not',
    sheetClass: 'style of bottomSheet, the binding way is same with `class`',
    overlay: 'whether it will display overlay or not',
    overlayColor: 'color of overlay',
    overlayOpacity: 'opacity of overlay'
  },
  slots: {
    default: 'used to place the content of popup'
  },
  events: {
    close: 'it will trigger this event when you click the overlay or click the `ESC` key, and the trigger reason will pass to event as a parameter, e.g: (reason) => {if(reason == \'overlay\') {// execute the close action}} ',
    show: 'when the bottomSheet was popuped(after the animation has finished), it will emit this event',
    hide: 'when the bottomSheet was hidden(after the animation has finished), it will emit this event'
  }
}
