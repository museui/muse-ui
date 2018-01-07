import themeDoc from './theme_en.md'

export default {
  themeDoc,
  ok: 'Ok',
  cancel: 'Cancel',
  close: 'Close',
  dialogDesc: 'This is simple dialog',
  snackbarDesc: 'this is a snackbar',
  title: `## Themes

### Example

The example, you can choose a different **tab** to change the theme`,
  color: `<a  target="_blank" href="https://material.google.com/style/color.html#color-ui-color-palette">
  UI Color Palette
  </a> , each color in it are all can be found the corresponding color variable in the javasrcript and less, you can use the variable name directly in the component(except overlayColor, rippleColor).
  color variable configuration file:
  <a target="_blank" href="https://github.com/museui/muse-ui/blob/master/src/utils/colors.js">
  src/utils/colors.js
  </a>
  or
  <a target="_blank" href="https://github.com/museui/muse-ui/blob/master/src/styles/colors.less">
    src/styles/colors.less
  </a>
  。`
}
