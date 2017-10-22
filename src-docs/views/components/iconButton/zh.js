import router from '../internal/router/zh'
import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: '通过 `icon` 参数，或者通过 `slot` 指定图标。',
  tooltipExample: '按钮提示',
  tooltipExampleDesc: '不同位置、不同类型的提示文字，鼠标移上去看看吧',
  props: {
    icon: '按钮上的图标',
    iconClass: '图标的样式',
    primary: '颜色是否为主色',
    secondary: '颜色是否为强调色',
    disabled: '按钮是否不可用',
    type: '相当于button元素的type属性',
    href: '相当于 a 标签的 href属性，设置之后会渲染成 a 标签，默认是使用button标签',
    target: '相当于 a 标签的target属性',
    tooltip: '当鼠标移上去提示的文字',
    tooltipPosition: '提示文字的位置, [垂直位置]-[水平位置]，垂直位置: top，middle, bottom; 水平位置: left, center, right',
    touch: '是否为 touch 的样式，一般用在移动端，提示框会大一些'
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
