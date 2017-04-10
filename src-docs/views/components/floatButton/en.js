import router from '../internal/router/en'
import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  props: {
    icon: 'icon above on the button',
    iconClass: 'style of icon, the binding way is same with `class`',
    disabled: 'disabled or not',
    type: 'is same with the `type` attribute of `button` element',
    href: 'is same with the `href` attribute of `a` element, if you had set this parameter, it will render to `a` tag, default to use the `button` tag',
    target: 'is same with the `target` attribute of `a` element',
    secondary: 'secondary color',
    mini: 'will make the button more little when it is true',
    backgroundColor: 'background color of button'
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
