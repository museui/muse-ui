import router from '../internal/router/en'
import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: 'two simple examples which show the width can adjust automatically by the content',
  disabledExample: 'disabled menu',
  disabledExampleDesc: 'use the desktop style according `desktop` attribute, and disable the munu by `disabled` attribute',
  iconExample: 'icon usage',
  iconExampleDesc: 'coordinate with `leftIcon` and `rightIcon`',
  afterExample: 'shortcut menu showing',
  afterExampleDesc: '`afterText` define the text on the right side of title',
  nestedExample: 'nested menu',
  nestedExampleDesc: 'use the `slot` to assign the nested menu, it will appear when you click',
  menu: {
    props: {
      desktop: 'the menu will be become to the style of desktop which will shrink the width and adjust the padding when this value is `true`',
      multiple: 'multiple or not',
      autoWidth: 'adjust width automatically when it is true',
      width: 'width',
      maxHeight: 'the maximum height of menu',
      disableAutoFocus: 'disable auto focusing when it is true',
      initiallyKeyboardFocused: 'focusing when initialization',
      listClass: 'style of menu',
      value: 'menu will become selectable when this attibute is setting, when the value of menu item is equal to current value, the item will be chosen.'
    },
    slots: {
      default: 'is used to place the `menuItem` 、 `subHeader` 、 `divider` components'
    },
    events: {
      itemClick: 'it will be triggered when the menu item is clicked, and pass with the `menuItem` component object',
      change: 'this event will triggered when the `value` is changed'
    }
  },
  menuItem: {
    props: {
      href: 'is same with the `href` attribute of `a` tag, if it is set, this component will render as a `a` tag, default to `div` tag.',
      target: 'is same with the `target` attribute of `a` element',
      title: 'listItem title',
      titleClass: 'style of title, the binding way is same with `class`',
      afterText: 'the rightmost text of title line',
      afterTextClass: 'style of the rightmost text of title line, the binding way is same with `class`',
      inset: 'if it is true, `margin-left` will be `72px`',
      disableFocusRipple: 'disable the ripple effect when focus',
      disabled: 'disable menu or not',
      leftIcon: 'left icon of menu',
      leftIconColor: 'color of the left icon',
      leftIconClass: 'style of the left icon, binding way is same with `class`',
      rightIcon: 'right icon of menu',
      rightIconColor: 'color of the right icon',
      rightIconClass: 'style of the right icon, binding way is same with `class`',
      nestedMenuClass: 'style of the nested menu, the binding way is same with `class`',
      nestedMenuListClass: 'style of the nested menu list, the binding way is same with `class`',
      value: 'value',
      nestedMenuValue: 'value of nested menu'
    },
    slots: {
      title: 'title',
      after: 'content which at the right of title line, can be place some text or badge',
      default: 'is used to nested menu, it will appear when you click'
    },
    events: {
      click: 'it will trigger when menu item was clicked',
      hover: 'hover event',
      hoverExit: 'hover existing event',
      keyboardFocus: 'when the button is focusing or blurring by the keyboard, this event will emit with a parameter which indicate the button is focusing or not. (isFocus)'
    }
  },
  router
}
