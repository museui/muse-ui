import router from '../internal/router/zh'
import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  shiftExample: 'Shift 模式',
  bottomNav: {
    props: {
      shift: '是否使用 shift 模式',
      value: '必需，需要和子组件 bottomNavItem 配合'
    },
    slots: {
      default: '用于放置 bottomNavItem 组件'
    },
    events: {
      change: '当 value 改变的时触发，参数(value) value 新的value'
    }
  },
  bottomNavItem: {
    props: {
      icon: '图标',
      iconClass: '图标的样式, 同 `class` 绑定方式一致',
      title: '显示的标题',
      titleClass: '标题的样式, 同 `class` 绑定方式一致',
      value: '必需，当value 与父组件的 value值相等时，会变成选中状态',
      href: '相当于 a 标签的 href属性，设置之后会渲染成 a 标签，默认是使用button标签'
    }
  },
  router
}
