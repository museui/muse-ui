export default {
  menu: {
    props: [{
      name: 'desktop',
      type: 'Boolean',
      default: 'false',
      desc: '设置为 `true`, 菜单将被调整为桌面版的样式，缩小高度和调整padding'
    }, {
      name: 'multiple',
      type: 'Boolean',
      default: 'false',
      desc: '是否可以多选'
    }, {
      name: 'autoWidth',
      type: 'Boolean',
      default: 'true',
      desc: '设置为 `true` 会根据菜单内容自动设置宽度'
    }, {
      name: 'width',
      type: 'String, Number',
      default: '',
      desc: '菜单宽度'
    }, {
      name: 'maxHeight',
      type: 'Number',
      default: '',
      desc: '菜单的最大高度'
    }, {
      name: 'disableAutoFocus',
      type: 'Boolean',
      default: 'false',
      desc: '是否关闭菜单项的自动获取焦点'
    }, {
      name: 'initiallyKeyboardFocused',
      type: 'Boolean',
      default: 'false',
      desc: '初始化时是否获取焦点'
    }, {
      name: 'value',
      type: '',
      default: '',
      desc: '设置以后菜单将为可选择的菜单，当菜单项的value 和 当前 value相等，则菜单项为被选中状态'
    }],
    slots: [{
      name: 'default',
      desc: '用来放置`menuItem` 、 `subHeader` 、 `divider` 等组件'
    }],
    events: [{
      name: 'itemClick',
      desc: '当菜单项点击时触发事件,会传入 `menuItem` 组件对象'
    }, {
      name: 'change',
      desc: '当value改变时触发事件，会传入新的 `value`'
    }]
  },
  menuItem: {
    props: [{
      name: 'href',
      type: 'String',
      default: '',
      desc: '相当于 a 标签的 href属性，设置之后会渲染成 a 标签，默认是使用button标签'
    }, {
      name: 'target',
      type: 'String',
      default: '',
      desc: '相当于 a 标签的target属性'
    }, {
      name: 'title',
      type: 'String',
      default: '',
      desc: '菜单项的标题文字'
    }, {
      name: 'afterText',
      type: 'String',
      default: '',
      desc: '标题行最右边的文字'
    }, {
      name: 'inset',
      type: 'Boolean',
      default: 'false',
      desc: '是否向内缩进, 会调整paddingLeft 为 72px'
    }, {
      name: 'disableFocusRipple',
      type: 'Boolean',
      default: 'false',
      desc: '是否关闭 `focusRipple` 效果'
    }, {
      name: 'disabled',
      type: 'Boolean',
      default: 'false',
      desc: '菜单是否可用'
    }, {
      name: 'leftIcon',
      type: 'String',
      default: '',
      desc: '菜单左边图标的颜色'
    }, {
      name: 'leftIconColor',
      type: 'String',
      default: '左边图标的颜色'
    }, {
      name: 'rightIcon',
      type: 'String',
      default: '',
      desc: '菜单右边图标的颜色'
    }, {
      name: 'rightIconColor',
      type: 'String',
      default: '',
      desc: '右边图标的颜色'
    }, {
      name: 'value',
      type: '',
      default: '',
      desc: '菜单项的 value, 当于菜单组件的value一致是，菜单项会变为选择状态'
    }, {
      name: 'nestedMenuValue',
      type: '',
      default: '',
      desc: '嵌套菜单的 value 值'
    }],
    slots: [{
      name: 'title',
      desc: '标题内容，相当于 title 属性'
    }, {
      name: 'after',
      desc: '标题行右边的内容，可以放置一些文字，badge等内容'
    }, {
      name: 'default',
      desc: '用于放置嵌套的菜单项，会在点击时出现'
    }],
    menuItem: [{
      name: 'hover',
      desc: '鼠标移到菜单项上的事件'
    }, {
      name: 'hoverExit',
      desc: '鼠标移出菜单项上的事件'
    }, {
      name: 'keyboardFocus',
      desc: '键盘使菜单项获取焦点的事件，第一个参数为true 时表示获取焦点，为 false 失去焦点, (isFocus)'
    }]
  }
}
