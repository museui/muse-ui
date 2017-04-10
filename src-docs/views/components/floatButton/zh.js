import router from '../internal/router/zh'
import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  props: {
    icon: '按钮上的图标',
    iconClass: '图标的样式',
    disabled: '按钮是否不可用',
    type: '相当于button元素的type属性',
    href: '相当于 a 标签的 href属性，设置之后会渲染成 a 标签，默认是使用button标签',
    target: '相当于 a 标签的target属性',
    secondary: '颜色是否为强调色',
    mini: '如果设置为 true, 按钮将变得更小',
    backgroundColor: '按钮背景色'
  },
  slots: {
    default: '用来放置 input[type=file] 等特殊的按钮，或者自定义icon'
  },
  events: {
    click: '按钮点击事件',
    hover: '鼠标移到按钮上的事件',
    hoverExit: '鼠标移出按钮上的事件',
    keyboardFocus: '键盘使按钮获取焦点的事件，第一个参数为true 时表示获取焦点，为 false 失去焦点, (isFocus)'
  },
  router
}
