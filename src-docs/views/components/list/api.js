export default {
  list: {
    props: [{
      name: 'value',
      type: '',
      default: '',
      desc: '需要和子组件 listItem 配合使用时生效'
    }],
    slots: [{
      name: 'default',
      desc: '用来放置 `listItem` 、 `subHeader` 、 `divider` 等组件'
    }],
    events: [{
      name: 'change',
      desc: '当 `value` 需要被改变时触发'
    }, {
      name: 'itemClick',
      desc: '`listItem` 组件被点击时触发, 会传入 `listItem` 组件对象'
    }]
  },
  listItem: {
    props: [{
      name: 'href',
      type: 'String',
      default: '',
      desc: '相当于 a 标签的 href属性，设置之后会渲染成 a 标签，默认是使用div标签'
    }, {
      name: 'target',
      type: 'String',
      default: '',
      desc: '相当于 a 标签的target属性'
    }, {
      name: 'title',
      type: 'String',
      default: '',
      desc: 'listItem 的标题文字'
    }, {
      name: 'titleClass',
      type: 'String,Object,Array',
      default: '',
      desc: '标题文字样式，同 `class` 绑定方式一致'
    }, {
      name: 'afterText',
      type: 'String',
      default: '',
      desc: '标题行最右边的文字'
    }, {
      name: 'afterTextClass',
      type: 'String,Object,Array',
      default: '',
      desc: '标题行最右边的文字样式，同 `class` 绑定方式一致'
    }, {
      name: 'describeText',
      type: 'String',
      default: '',
      desc: '大段描述文字'
    }, {
      name: 'describeLine',
      type: 'Number',
      default: '2',
      desc: '描述文字行数'
    }, {
      name: 'describeTextClass',
      type: 'String,Object,Array',
      default: '',
      desc: '描述文字样式，同 `class` 绑定方式一致'
    }, {
      name: 'inset',
      type: 'Boolean',
      default: 'false',
      desc: '是否向内缩进, 会调整paddingLeft 为 72px'
    }, {
      name: 'disabled',
      type: 'Boolean',
      default: 'false',
      desc: '设置为 `true` ，则不会触发点击事件，没有 `focusRipple` 和 `touchRipple` 的效果'
    }, {
      name: 'disableRipple',
      type: 'Boolean',
      default: 'false',
      desc: '设置为 `true` , 没有 `focusRipple` 和 `touchRipple` 的效果, 但是会触发点击事件'
    }, {
      name: 'value',
      type: '',
      default: '',
      desc: '当 `value` 和 list 组件的 `value` 值相等时，组件呈现被选择状态'
    }, {
      name: 'toggleNested',
      type: 'Boolean',
      default: 'false',
      desc: '是否可以自动切换嵌套列表的显示'
    }, {
      name: 'toggleIconClass',
      type: 'String,Object,Array',
      default: '',
      desc: '切换显示的图标样式，同 `class` 绑定方式一致'
    }, {
      name: 'nestedListClass',
      type: 'String,Object,Array',
      default: '',
      desc: '嵌套列表样式'
    }, {
      name: 'open',
      type: 'Boolean',
      default: 'true',
      desc: '设为true，显示嵌套的列表'
    }],
    slots: [{
      name: 'left',
      desc: '组件左边的内容'
    }, {
      name: 'leftAvatar',
      desc: '组件左边的内容,只用来放置 `avatar` 组件'
    }, {
      name: 'right',
      desc: '组件右边内容'
    }, {
      name: 'rightAvatar',
      desc: '组件右边内容,只用来放置 `avatar` 组件'
    }, {
      name: 'title',
      desc: '标题内容，相当于 title 属性'
    }, {
      name: 'after',
      desc: '标题行右边的内容，可以放置一些文字，badge等内容'
    }, {
      name: 'describe',
      desc: '描述内容，相当于 `describeText` 属性'
    }, {
      name: 'nested',
      desc: '用于放置嵌套的列表项'
    }, {
      name: 'default',
      desc: '列表项的其它内容'
    }],
    events: [{
      name: 'click',
      desc: '列表项点击事件'
    }, {
      name: 'hover',
      desc: '鼠标移到列表项上的事件'
    }, {
      name: 'hoverExit',
      desc: '鼠标移出列表项上的事件'
    }, {
      name: 'keyboardFocus',
      desc: '键盘使列表项获取焦点的事件，第一个参数为true 时表示获取焦点，为 false 失去焦点, (isFocus)'
    }, {
      name: 'toggleNested',
      desc: '当嵌套列表切换显示时触发事件，会传入一个 `open` 参数， 为 `true` 是嵌套列表显示'
    }]
  }
}
