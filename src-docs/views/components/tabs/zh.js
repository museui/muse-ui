import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  iconExample: '使用图标',
  iconTextExample: '图标 + 文字',
  tabs: {
    props: {
      lineClass: '高亮线的样式，同 `class` 绑定方式一致',
      value: '必需，需要和子组件 tab 配合'
    },
    slots: {
      default: '用于放置 tab 组件'
    },
    events: {
      change: '当 value 改变的时触发，参数(value) value 新的value'
    }
  },
  tab: {
    props: {
      icon: 'tab 上的图标',
      iconClass: '图标的样式，同 `class` 绑定方式一致',
      title: 'tab 上的文字',
      titleClass: '标题的样式，同 `class` 绑定方式一致',
      value: '必需，当value 与父组件的 value值相等时，会变成选中状态',
      href: '相当于 a 标签的 href属性，设置之后会渲染成 a 标签，默认是使用button标签',
      disabled: '是否禁用'
    },
    events: {
      active: '当 tab 被选择时触发',
      click: '当 tab 被点击时触发'
    },
    slots: {
      default: '用于自定义icon'
    }
  }
}
