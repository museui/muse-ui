# 色彩

Muse-UI 中所有组件的 `color` 或者 `*-color` 属性，都可以使用 `primary`, `secondary`, `success`, `warning`, `info`, `error`, 或者 [Material Design](https://material.io/) 规范中的所有色彩名称。

## 组件中 color 使用

```html
<mu-button color="primary"> primary </mu-button>
<mu-button color="success"> success </mu-button>
<mu-button color="indigo400"> indigo400 </mu-button>
<mu-button color="#1565c0"> Custom </mu-button>
```

## Color 类使用

Muse-UI Color 类，定义了 [Material Design](https://material.io/) 规范的中所有的色彩。

```javascript
import theme from 'muse-ui/lib/theme';
import * as colors from 'muse-ui/lib/theme/colors';

theme.add('custom-theme', {
  primary: colors.indigo,
  secondary: colors.pinkA200
});
```

## Material 色彩表

以下是按原色分组的Material Design调色板列表。

<color-palette />
