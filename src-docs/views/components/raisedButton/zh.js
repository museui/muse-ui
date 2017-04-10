import router from '../internal/router/zh'
import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: '`Raised Button` 默认、主色、强调色, 不可用、全宽五种不同状态的按钮示例',
  complexExample: '稍复杂的使用',
  complexExampleDesc: '配合图标、文件按钮、调整文字位置，自定义样式等',
  props: {
    icon: '按钮上的图标',
    iconClass: '图标的样式, 同 `class` 绑定方式一致',
    label: '按钮上的文字',
    labelPosition: '文字的位置, before 在图标之前，after 在图标之后',
    labelClass: '标签的样式',
    primary: '背景色是否为主色',
    secondary: '背景色是否为强调色',
    disabled: '按钮是否不可用',
    fullWidth: '是否将宽度设置为 100%',
    type: '相当于button元素的type属性',
    href: '相当于 a 标签的 href属性，设置之后会渲染成 a 标签，默认是使用button标签',
    router: '相当于 router-link 标签的 to 属性，设置之后会渲染成 router-link 标签',
    target: '相当于 a 标签的target属性',
    backgroundColor: '按钮背景色',
    color: '按钮颜色',
    rippleColor: '波纹效果的颜色',
    rippleOpacity: '波纹效果的透明度'
  },
  slots: {
    default: '用来放置 input[type=file] 等特殊的按钮，或者自定义icon、文字'
  },
  events: {
    click: '按钮点击事件',
    hover: '鼠标移到按钮上的事件',
    hoverExit: '鼠标移出按钮上的事件',
    keyboardFocus: '键盘使按钮获取焦点的事件，第一个参数为true 时表示获取焦点，为 false 失去焦点, (isFocus)'
  },
  router
}
