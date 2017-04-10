import router from '../internal/router/en'
import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  shiftExample: 'Shift Mode',
  bottomNav: {
    props: {
      shift: 'whether the component need to use the `shift` model',
      value: 'required, need to combined with the children component `bottomNavItem`'
    },
    slots: {
      default: 'used to place the `bottomNavItem` component'
    },
    events: {
      change: 'when the value has changed, this event will emit with the new value as the return parameter'
    }
  },
  bottomNavItem: {
    props: {
      icon: 'icon',
      iconClass: 'style of icon, the binding way is same with `class`',
      title: 'title',
      titleClass: 'style of title, the binding way is same with `class`',
      value: 'required, when this parameter is same with the value of parent component, it will turn to checked status',
      href: 'is same with the `href` attribute of `a` tag, if it is set, this component will render as a `a` tag, default to `button` tag.'
    }
  },
  router
}
