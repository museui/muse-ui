import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: 'using the `open` paramter to control its appearance,  `docked` is default to true, and thus not only the overlay is hidden, but also the menu is not close even though you click it.',
  rightExample: 'open the right Drawer',
  props: {
    width: 'width of drawer',
    zDepth: 'the depth of shadow',
    open: 'open it or not',
    docked: 'whether it is a fixed drawer, default to`true`, thus the overlay is hidden and will not emit the `close` event',
    right: 'whether popup from the right side'
  },
  events: {
    close: 'when you click the overlay or knock the `ESC` key, this event will be emitted with a paramter `reason`, ```javascript\n (reason) => console.log(reason)  \n```',
    show: 'when the drawer popup(after the animation finishing), this event will be emitted',
    hide: 'when the drawer hide(after the animation finishing), this event will be emitted'
  },
  slots: {
    default: 'is used to place the content of drawer'
  }
}
