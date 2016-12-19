import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: 'Each `dialog` use the `v-if` directive to control the apperance or not,  when you click the overlay or knock the `ESC` key, all will trigger the close event',
  alertExample: 'Alert',
  alertExampleDesc: 'we also can make it close by click the `ok` button instead of listening the  `close` event',
  scrollExample: 'scrolled dialog',
  props: {
    open: 'open or not',
    dialogClass: 'style of dialog, the binding way is same with `class`',
    title: 'title of dialog',
    titleClass: 'style of title, the binding way is same with `class`',
    bodyClass: 'style of body, the binding way is same with `class`',
    actionsContainerClass: 'style of action button container, the binding way is same with `class`',
    scrollable: 'scroll or not in the body of content'
  },
  slots: {
    title: 'is used to customize the title',
    actions: 'is used to place the action button of bottom',
    default: 'the content part of dialog component'
  },
  events: {
    close: 'when you click the overlay or knock the `ESC` key, this event will be emitted with a paramter `reason`, ```javascript\n (reason) => console.log(reason)  \n```',
    show: 'when the dialog appear(after the animation finishing), this event will be emitted',
    hide: 'when the dialog disappear(after the animation finishing), this event will be emitted'
  }
}
