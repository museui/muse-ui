import description from './README.md'

export default {
  description,
  simpleExample: '使用示例',
  simpleExampleDesc: '鼠标移动至图标时显示提示信息，设置不同的属性调整提示信息的位置和样式。`Tooltip` 的 Container 元素必须是已定位的元素(也就是 `position` 为 relative、absolute 或 fixed)',
  props: {
    trigger: '触发 tooltip 的元素，需要根据此元素计算tooltip出现的位置',
    label: '提示的文字',
    verticalPosition: '垂直方向位置，top 在上面， bottom 在下面',
    horizontalPosition: '水平方向位置，left, center, right',
    show: '是否显示',
    touch: '是否为 touch 的样式，一般用在移动端，提示框会大一些'
  }
}
