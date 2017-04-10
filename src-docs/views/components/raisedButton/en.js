import router from '../internal/router/en'
import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: 'Showing the four `Flat Button`- default, primary,secondary,disabled, full width',
  complexExample: 'more complex example',
  complexExampleDesc: 'coordinate with the file button or icon, and define the position of label',
  props: {
    icon: 'icon above on the button',
    iconClass: 'style of icon, the binding way is same with `class`',
    label: 'text above on the button',
    labelPosition: 'position of text, before: before the icon, after: after the icon',
    labelClass: 'style of label, the binding way is same with `class`',
    primary: 'primary color',
    secondary: 'secondary color',
    disabled: 'disabled or not',
    type: 'is same with the `type` attribute of `button` element',
    href: 'is same with the `href` attribute of `a` element, if you had set this parameter, it will render to `a` tag, default to use the `button` tag',
    router: 'is same with the `to` attribute of `router-link` element, if you had set this parameter, it will render to `router-link` tag',
    target: 'is same with the `target` attribute of `a` element',
    backgroundColor: 'background color of button',
    color: 'color of button',
    hoverColor: 'the background color when you hover on it',
    rippleColor: 'ripple color',
    rippleOpacity: 'opacity of ripple'
  },
  slots: {
    default: 'is uesd to place some special button such as input[type=file] or customize icon and text'
  },
  events: {
    click: 'button clicking event',
    hover: 'hover eevent',
    hoverExit: 'hover existing event',
    keyboardFocus: 'when the button is focusing or blurring by the keyboard, this event will emit with a parameter which indicate the button is focusing or not. (isFocus)'
  },
  router
}
