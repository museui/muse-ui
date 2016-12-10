import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: '配合 `menu` 和 `listItem` 组件使用，定义不同的内容和颜色',
  iconAndButton: '配合图标和按钮',
  iconAndButtonDesc: '配合 `icon` 和 `iconButton` 组件使用, 这个时候一般使用圆形的徽章',
  custom: '定义不同的内容',
  props: {
    content: '内容文本',
    color: '颜色',
    primary: '颜色是否为主色',
    secondary: '颜色是否为强调色',
    circle: '是否为圆形',
    badgeClass: 'badge 样式, 同 `class` 绑定方式一致'
  },
  slots: {
    content: '用于分发内容，这个 slot 会覆盖掉 content 属性',
    default: '分发需要加入徽章的元素或者组件'
  }
}
