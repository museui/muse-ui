import router from '../internal/router/zh'
import description from './README.md'

export default {
  description,
  simpleExample: '简单的用法',
  simpleExampleDesc: '两个简单的例子，可以根据内容自动调整宽度',
  disabledExample: '不可用的菜单',
  disabledExampleDesc: '改变`desktop`将菜单的样式改为桌面版， 设置`disabled`菜单项将不可以用',
  iconExample: '图标使用',
  iconExampleDesc: '`menuItem` 组件使用 `leftIcon` 和 `rightIcon` 来配合 `icon` 组件',
  afterExample: '菜单快捷显示',
  afterExampleDesc: '`afterText` 属性定义标题右边的文字',
  nestedExample: '嵌套菜单',
  nestedExampleDesc: '通过 `slot` 指定嵌套菜单，会在点击时出现',
  menu: {
    props: {
      desktop: '设置为 `true`, 菜单将被调整为桌面版的样式，缩小高度和调整padding',
      multiple: '是否可以多选',
      autoWidth: '设置为 `true` 会根据菜单内容自动设置宽度',
      width: '菜单宽度',
      maxHeight: '菜单的最大高度',
      disableAutoFocus: '是否关闭菜单项的自动获取焦点',
      initiallyKeyboardFocused: '初始化时是否获取焦点',
      listClass: '菜单列表部分样式',
      value: '设置以后菜单将为可选择的菜单，当菜单项的value 和 当前 value相等，则菜单项为被选中状态'
    },
    slots: {
      default: '用来放置`menuItem` 、 `subHeader` 、 `divider` 等组件'
    },
    events: {
      itemClick: '当菜单项点击时触发事件,会传入 `menuItem` 组件对象',
      change: '当value改变时触发事件，会传入新的 `value`'
    }
  },
  menuItem: {
    props: {
      href: '相当于 a 标签的 href属性，设置之后会渲染成 a 标签，默认是使用div标签',
      target: '相当于 a 标签的target属性',
      title: '菜单项的标题文字',
      titleClass: '标题文字样式，同 `class` 绑定方式一致',
      afterText: '标题行最右边的文字',
      afterTextClass: '标题行最右边的文字样式，同 `class` 绑定方式一致',
      inset: '是否向内缩进, 会调整paddingLeft 为 72px',
      disableFocusRipple: '是否关闭 `focusRipple` 效果',
      disabled: '菜单是否可用',
      leftIcon: '菜单左边图标的颜色',
      leftIconColor: '左边图标的颜色',
      leftIconClass: '左边图标样式，同 `class` 绑定方式一致',
      rightIcon: '菜单右边图标的颜色',
      rightIconColor: '右边图标的颜色',
      rightIconClass: '右边图标样式，同 `class` 绑定方式一致',
      nestedMenuClass: '嵌套菜单样式，同 `class` 绑定方式一致',
      nestedMenuListClass: '嵌套菜单列表部分样式，同 `class` 绑定方式一致',
      value: '菜单项的 value, 当于菜单组件的value一致是，菜单项会变为选择状态',
      nestedMenuValue: '嵌套菜单的 value 值'
    },
    slots: {
      title: '标题内容，相当于 title 属性',
      after: '标题行右边的内容，可以放置一些文字，badge等内容',
      default: '用于放置嵌套的菜单项，会在点击时出现'
    },
    events: {
      click: '点击事件',
      hover: '鼠标移到菜单项上的事件',
      hoverExit: '鼠标移出菜单项上的事件',
      keyboardFocus: '键盘使菜单项获取焦点的事件，第一个参数为true 时表示获取焦点，为 false 失去焦点, (isFocus)'
    }
  },
  router
}
