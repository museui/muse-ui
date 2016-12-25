import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  customExample: 'Custom Example',
  props: {
    trigger: 'trigger the `popover` element, we will calculate the positon of popup  box by this element',
    open: 'open or not',
    popoverClass: 'popover 样式, the binding way is same with `class`',
    scroller: 'scroll element, will listen to its `scroll` event, it will update the position of drop-down continually when you scroll.',
    autoPosition: 'whether it is calculate the position automatically or not',
    anchorOrigin: 'anchor position definition, the pop-up box position is based on this point',
    targetOrigin: 'target position definition',
    overlay: 'whether it will display overlay or not',
    overlayOpacity: 'opacity of overlay',
    overlayColor: 'color of overlay'
  },
  slots: {
    default: 'content'
  },
  events: {
    close: 'when you want to close it, this event will be emitted with a paramter `reason`, \n * overlay: click the overlay; \n * overflow: Rolling out of the window; \n * clickOutSide: click other postion \n * esc: knock the `ESC` key',
    show: 'when the popover appear(after the animation finishing), this event will be emitted',
    hide: 'when the popover disappear(after the animation finishing), this event will be emitted'
  }
}
