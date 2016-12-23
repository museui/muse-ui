import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  props: {
    open: 'open or not',
    popupClass: 'style of popup, the binding way is same with `class`',
    popupTransition: 'animation effects of popup layer, default to use the internal method `popup-slide`',
    position: 'positon of popup, can be left, right, top, bottom',
    overlay: 'whether it will display overlay or not',
    overlayOpacity: 'opacity of overlay',
    overlayColor: 'color of overlay'
  },
  slots: {
    default: 'content of popup'
  },
  events: {
    close: 'when you click the overlay or knock the `ESC` key, this event will be emitted with a paramter `reason`, ```javascript\n (reason) => console.log(reason)  \n```',
    show: 'when the popup appear(after the animation finishing), this event will be emitted',
    hide: 'when the popup disappear(after the animation finishing), this event will be emitted'
  }
}
