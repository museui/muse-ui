import router from '../internal/router/zh'
import description from './README.md'

export default {
  description,
  simpleList: '简单的列表',
  simpleListDesc: '一个简单的列表的例子，定义左边和右边的图标',
  chatList: '聊天列表',
  chatListDesc: '使用 `avatar` 和 `icon` 的例子',
  contactList: '联系人列表',
  contactListDesc: '使用 `inset` 和 `avatar` 完成联系人列表',
  folderList: '文件夹列表',
  nestedList: '嵌套列表',
  nestedListDesc: '使用 `nested` slot 完成嵌套列表 `toggleNested` 参数设置为 `true` 会自动切换子列表的显示与隐藏。',
  settingList: '设置列表',
  settingListDesc: '配合 `checkbox` 和 `switch` 等表单组件完成设置列表展示',
  addressList: '通讯列表',
  messageList: '信息列表',
  messageListDesc: '配合 `iconMenu` 组件,使用 `describe` slot 定制更多样的描述信息',
  selectableList: '可选择的列表',
  selectableListDesc: '使用 `value` 属性和 `change` 事件完成列表的选择功能',
  list: {
    props: {
      value: '需要和子组件 listItem 配合使用时生效'
    },
    slots: {
      default: '用来放置 `listItem` 、 `subHeader` 、 `divider` 等组件'
    },
    events: {
      change: '当 `value` 需要被改变时触发',
      itemClick: '`listItem` 组件被点击时触发, 会传入 `listItem` 组件对象'
    }
  },
  listItem: {
    props: {
      href: '相当于 a 标签的 href属性，设置之后会渲染成 a 标签，默认是使用div标签',
      target: '相当于 a 标签的target属性',
      title: 'listItem 的标题文字',
      titleClass: '标题文字样式，同 `class` 绑定方式一致',
      afterText: '标题行最右边的文字',
      afterTextClass: '标题行最右边的文字样式，同 `class` 绑定方式一致',
      describeText: '大段描述文字',
      describeLine: '描述文字行数',
      describeTextClass: '描述文字样式，同 `class` 绑定方式一致',
      inset: '是否向内缩进, 会调整paddingLeft 为 72px',
      disabled: '设置为 `true` ，则不会触发点击事件，没有 `focusRipple` 和 `touchRipple` 的效果',
      disableRipple: '设置为 `true` , 没有 `focusRipple` 和 `touchRipple` 的效果, 但是会触发点击事件',
      value: '当 `value` 和 list 组件的 `value` 值相等时，组件呈现被选择状态',
      toggleNested: '是否可以自动切换嵌套列表的显示',
      toggleIconClass: '切换显示的图标样式，同 `class` 绑定方式一致',
      nestedListClass: '嵌套列表样式',
      open: '设为true，显示嵌套的列表'
    },
    slots: {
      left: '组件左边的内容',
      leftAvatar: '组件左边的内容,只用来放置 `avatar` 组件',
      right: '组件右边内容',
      rightAvatar: '组件右边内容,只用来放置 `avatar` 组件',
      title: '标题内容，相当于 title 属性',
      after: '标题行右边的内容，可以放置一些文字，badge等内容',
      describe: '描述内容，相当于 `describeText` 属性',
      nested: '用于放置嵌套的列表项',
      default: '列表项的其它内容'
    },
    events: {
      click: '列表项点击事件',
      hover: '鼠标移到列表项上的事件',
      hoverExit: '鼠标移出列表项上的事件',
      keyboardFocus: '键盘使列表项获取焦点的事件，第一个参数为true 时表示获取焦点，为 false 失去焦点, (isFocus)',
      toggleNested: '当嵌套列表切换显示时触发事件，会传入一个 `open` 参数， 为 `true` 是嵌套列表显示'
    }
  },
  router
}
