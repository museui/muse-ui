### Themes Usage

muse-ui comes bundled with four themes: `light`, `dark`, `carbon`, `teal`. Just import them after the component:

```js
import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css' // use carbon theme
Vue.use(MuseUI)
```

Themes can be switched dynamically. To enable dynamic switching configure `raw-loader` in `webpack` configuration.

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

### Customizing the theme

For now, only `less` is supported. The black theme is `dark.less`.

```less
@import "muse-ui/less/vars.less"; // default basic variable

// change defalut basic variable
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

@import "muse-ui/less/theme-vars.less";  // default component variable

// change the component variable
@avatarBackgroundColor: lighten(@alternateTextColor, 26%);
@datePickerHeaderColor: fade(@fullWhite, 12%);
@timePickerHeaderColor: fade(@fullWhite, 12%);
@timePickerClockCircleColor: fade(@fullWhite, 12%);
@avatarBackgroundColor: lighten(@alternateTextColor, 26%);
@chipColor: lighten(@alternateTextColor, 12%);
@floatButtonDisabledColor: lighten(@alternateTextColor, 12%);

@tableRowHoverBackgroundColor: fade(@textColor, 10%);
@tableRowSelectedBackgroundColor: fade(@textColor, 5%);

@import "muse-ui/less/theme.less"; // style related to theme

```

### Theme variables

Color variables of the themes, refer to [Material Design colors](https://material.google.com/style/color.html#color-text-background-colors)

```less
@fontFamily: Roboto, Lato, sans-serif;  // font

// primary color and accent color
@primaryColor: @lightBlue;           // primary color
@darkerPrimaryColor: @lightBlue700;  // darker primary color
@lighterPrimaryColor: @grey400;      // lighter primary color
@accentColor: @pinkA200;             // accent color
@darkerAccentColor: @grey100;        // darker accent color
@lighterAccentColor: @grey500;       // lighter accent color

// text color
@textColor: @darkBlack;
@secondaryTextColor: fade(@fullBlack, 54%);
@alternateTextColor: @white;
@borderColor: fade(@fullBlack, 12%);
@disabledColor: fade(@fullBlack, 38%);

// background
@backgroundColor: @white;           // background color
@statusBarBackgroundColor: @grey300; // useless
@appbarBackgroundColor: @grey100; // useless in the appbar component
@dialogBackgroundColor: @white; // dialogs、 cards、 paper background

// icon color
@activeIconColor: fade(@fullBlack, 54%);
@inActiveIconColor: fade(@fullBlack, 38%);
```
