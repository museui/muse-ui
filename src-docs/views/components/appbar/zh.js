import description from './README.md'
export default {
  description,
  simpleExample: '简单的使用',
  iconMenu: '配合 IconMenu 加入菜单',
  addSearch: '加入搜索框和按钮',
  props: {
    title: '标题, 显示在中间',
    titleClass: '标题样式，同 `class` 绑定方式一致',
    zDepth: '阴影等级,设置为 0就没有阴影效果'
  },
  slots: {
    left: '用于分发 appbar 左边的内容',
    right: '用于分发 appbar 右边的内容',
    default: '用于分发 appbar 中间的内容，设置此 slot，title参数将没有作用'
  }
}
