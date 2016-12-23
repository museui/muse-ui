import description from './README_EN.md'

export default {
  description,
  simpleExample: 'SimpleExample',
  iconExample: 'Icon Example',
  iconTextExample: 'Icon & Text Example',
  tabs: {
    props: {
      lineClass: 'style of highlight line, the binding way is same with `class`',
      value: 'required, should be coordinate with the child component tab'
    },
    slots: {
      default: 'is used to place the tab component'
    },
    events: {
      change: 'when the value has changed, this event will be triggered'
    }
  },
  tab: {
    props: {
      icon: 'icon of tab',
      iconClass: 'style of icon, the binding way is same with the `class`',
      title: 'text of tab',
      titleClass: 'style of title, the binding way is same with `class`',
      value: 'required, when this value is equal to the value of parent component,  it will become to selected state',
      href: 'is same with the `href` attribute of `a` tag, if it is set, this component will render as a `a` tag, default to `button` tag.',
      disabled: 'disabled or not'
    },
    events: {
      active: 'will be triggered when the tab is active',
      click: 'will be triggered when the tab is clicking'
    },
    slots: {
      default: 'is used to customize the icon'
    }
  }
}
