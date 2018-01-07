import router from '../internal/router/en'
import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: 'Assign the icon by `icon` or `slot` parameter. Showing the four `Icon Button`s - default, primary, secondary and disabled',
  tooltipExample: 'hint about the button',
  tooltipExampleDesc: 'hint text on the different position and type, just do it with you mouse',
  props: {
    icon: 'icon above on the button',
    iconClass: 'style of icon, the binding way is same with `class`',
    primary: 'primary color',
    secondary: 'secondary color',
    disabled: 'disabled or not',
    type: 'is same with the `type` attribute of `button` element',
    href: 'is same with the `href` attribute of `a` element, if you had set this parameter, it will render to `a` tag, default to use the `button` tag',
    target: 'is same with the `target` attribute of `a` element',
    tooltip: 'the hint text when your mouse hover on it',
    tooltipPosition: 'the positon of hint text, [horizon]-[vertical], vertical: top, middle, bottom; horizon: left, center, right',
    touch: 'whether it is a touch style, often we use this attibute on the mobile, and the tooltip box is more larger'
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
