import themeDoc from './theme.md'

export default {
  themeDoc,
  ok: '确定',
  cancel: '取消',
  close: '关闭',
  dialogDesc: '这是一个简单的弹出框',
  snackbarDesc: '一段简单的文本',
  title: `## 主题

### 示例

下面的示例，你可以通过选择不同的tab来改变主题`,
  color: `<a  target="_blank" href="https://material.google.com/style/color.html#color-ui-color-palette">
  UI Color Palette
  </a> 中的每一个颜色，在javasrcript 和 less 中都有对应的颜色变量，组件中关于颜色属性(overlayColor，rippleColor 除外)可以直接使用变量名.
  颜色变量文件在
  <a target="_blank" href="https://github.com/museui/muse-ui/blob/master/src/utils/colors.js">
  src/utils/colors.js
  </a>
  或者
  <a target="_blank" href="https://github.com/museui/muse-ui/blob/master/src/styles/colors.less">
    src/styles/colors.less
  </a>
  。`
}
