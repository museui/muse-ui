### 主题的使用

muse-ui 预设 4 种主题 `light`, `dark`, `carbon`, `teal` 只需要在组件后面引入即可

```js
import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css' // 使用 carbon 主题
Vue.use(MuseUI)
```

动态的切换主题,需要依赖 `webpack` 的 `raw-loader` 加载器

```html
<template>
<mu-tabs :value="theme" @change="changeTheme">
  <mu-tab title="LIGHT (DEFAULT)" value="light"/>
  <mu-tab title="DARK" value="dark"/>
  <mu-tab title="CARBON" value="carbon"/>
  <mu-tab title="TEAL" value="teal"/>
</mu-tabs>
</template>
<script>
import light from '!raw!muse-ui/dist/theme-default.css'
import dark from '!raw!muse-ui/dist/theme-dark.css'
import carbon from '!raw!muse-ui/dist/theme-carbon.css'
import teal from '!raw!muse-ui/dist/theme-teal.css'
export default {
  data () {
    return {
      theme: 'light',
      themes: {
        light,
        dark,
        carbon,
        teal
      }
    }
  },
  methods: {
    changeTheme (theme) {
      this.theme = theme
      const styleEl = this.getThemeStyle()
      styleEl.innerHTML = this.themes[theme] || ''
    },
    getThemeStyle () {
      const themeId = 'muse-theme'
      let styleEl = document.getElementById(themeId)
      if (styleEl) return styleEl
      styleEl = document.createElement('style')
      styleEl.id = themeId
      document.body.appendChild(styleEl)
      return styleEl
    }
  }
}
</script>
```

### 自定义主题

目前只支持 `less`, 黑色的主题配置 `dark.less`

```less
@import "muse-ui/less/vars.less"; // 默认基础的变量

// 修改基础变量

@primaryColor: @lightBlue700;
@darkerPrimaryColor: @lightBlue700;
@lighterPrimaryColor: @grey600;
@accentColor: @pinkA200;
@darkerAccentColor: @pinkA400;
@lighterAccentColor: @pinkA100;

@textColor: @fullWhite;
@secondaryTextColor: fade(@fullWhite, 70%);
@alternateTextColor: #303030;
@borderColor: fade(@fullWhite, 30%);
@disabledColor: fade(@fullWhite, 30%);

// background
@backgroundColor: #303030;
@statusBarBackgroundColor: @fullBlack;
@appbarBackgroundColor: @grey900;
@dialogBackgroundColor: #424242; // dialogs or cards

// icon
@activeIconColor: fade(@fullWhite, 100%);
@inActiveIconColor: fade(@fullWhite, 50%);

@import "muse-ui/less/theme-vars.less";  // 默认组件变量

// 修改组件变量
@avatarBackgroundColor: lighten(@alternateTextColor, 26%);
@datePickerHeaderColor: fade(@fullWhite, 12%);
@timePickerHeaderColor: fade(@fullWhite, 12%);
@timePickerClockCircleColor: fade(@fullWhite, 12%);
@avatarBackgroundColor: lighten(@alternateTextColor, 26%);
@chipColor: lighten(@alternateTextColor, 12%);
@floatButtonDisabledColor: lighten(@alternateTextColor, 12%);

@tableRowHoverBackgroundColor: fade(@textColor, 10%);
@tableRowSelectedBackgroundColor: fade(@textColor, 5%);

@import "muse-ui/less/theme.less"; // 主题相关的样式

```

### 关于主题变量

主题的颜色变量，来源于 [material design colors](https://material.google.com/style/color.html#color-text-background-colors)

```less
@fontFamily: Roboto, Lato, sans-serif;  // 字体

// 主色和强调色
@primaryColor: @lightBlue;           // 主色
@darkerPrimaryColor: @lightBlue700;  // 更深的主色
@lighterPrimaryColor: @grey400;      // 浅一点的主色
@accentColor: @pinkA200;             // 强调色
@darkerAccentColor: @grey100;        // 更深的强调色
@lighterAccentColor: @grey500;       // 浅一点的强调色

// 文本颜色
@textColor: @darkBlack;
@secondaryTextColor: fade(@fullBlack, 54%);
@alternateTextColor: @white;
@borderColor: fade(@fullBlack, 12%);
@disabledColor: fade(@fullBlack, 38%);

// background
@backgroundColor: @white;           // 背景色
@statusBarBackgroundColor: @grey300; // web项目没有状态栏，所以也没有使用
@appbarBackgroundColor: @grey100; // 并未在appbar组件中应用
@dialogBackgroundColor: @white; // dialogs、 cards、 paper 组件背景

// icon color
@activeIconColor: fade(@fullBlack, 54%);
@inActiveIconColor: fade(@fullBlack, 38%);
```
