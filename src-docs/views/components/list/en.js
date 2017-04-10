import router from '../internal/router/en'
import description from './README_EN.md'

export default {
  description,
  simpleList: 'Simple List',
  simpleListDesc: 'a simple list example, to define the left icon and right icon',
  chatList: 'chat list',
  chatListDesc: 'a example with `avatar` and `icon`',
  contactList: 'contact list',
  contactListDesc: 'a example with `inset` and `avatar`',
  folderList: 'folder list',
  nestedList: 'nested list',
  nestedListDesc: 'nested list wil use `nested` slot, if the `toggleNested` is `true`, it will toggle the dispaly or hidden of children list',
  settingList: 'setting list',
  settingListDesc: 'a example with `checkbox` and `switch` and so on',
  addressList: 'address list',
  messageList: 'message list',
  messageListDesc: 'a example with `iconMenu` component, you can use `describe` slot to customize more various describe information',
  selectableList: 'selectable list',
  selectableListDesc: 'a example with `value` attribute and `change` event',
  list: {
    props: {
      value: 'should coordinate withe the children component listItem'
    },
    slots: {
      default: 'is used to place the `listItem`, `subHeader`, `divider` components'
    },
    events: {
      change: 'this event will triggered when the `value` is changed',
      itemClick: 'it will be triggered when the list item is clicked, and pass with the `listItem` component object'
    }
  },
  listItem: {
    props: {
      href: 'is same with the `href` attribute of `a` tag, if it is set, this component will render as a `a` tag, default to `div` tag.',
      target: 'is same with the `target` attribute of `a` element',
      title: 'listItem title',
      titleClass: 'style of title, the binding way is same with `class`',
      afterText: 'the rightmost text of title line',
      afterTextClass: 'style of the rightmost text of title line, the binding way is same with `class`',
      describeText: 'describe text',
      describeLine: 'describe text line number',
      describeTextClass: 'style of describe text , the binding way is same with `class`',
      inset: 'whether it is indented inward, if it is, it will adjust the paddingLeft to 72px',
      disabled: 'if this value is `true`, no click event, no `focusRipple` and `touchRipple` effect',
      disableRipple: 'if this value is `true`, no `focusRipple` and `touchRipple` effect',
      value: 'if the `value` is equal to the `value` of list, the component is selected',
      toggleNested: 'whether it is toggle the nested menu automatically or not',
      toggleIconClass: 'style of the toggle icon, the binding way is same with `class`',
      nestedListClass: 'style of the nested list',
      open: 'if this value is true, it will show the nested list'
    },
    slots: {
      left: 'used to distribute the left content of component',
      leftAvatar: 'used to distribute the left `avatar` component',
      right: 'used to distribute the right content of component',
      rightAvatar: 'used to distribute the right `avatar` component',
      title: 'title',
      after: 'content which at the right of title line, can be place some text or badge',
      describe: 'describe content, is same with the `describeText` attribute',
      nested: 'is used to place the nested list',
      default: 'others content of list item'
    },
    events: {
      click: 'it will trigger when list item was clicked',
      hover: 'hover event',
      hoverExit: 'hover existing event',
      keyboardFocus: 'when the button is focusing or blurring by the keyboard, this event will emit with a parameter which indicate the button is focusing or not. (isFocus)',
      toggleNested: 'this event will be triggered when the nested list  is toggled, it will pass a `open` parameter which `true` is means that showing the nested list'
    }
  },
  router
}
