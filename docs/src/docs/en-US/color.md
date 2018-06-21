# Color

The `color` or `*-color` attributes of all components in the Muse-UI can be used `primary`, `secondary`, `success`, `warning`, `info`, `error`, or [Material Design] (https://material.io/) All the color names in the  specification.

## Color usage in Components

:::demo
```html
<mu-button class="demo-color-btn" color="primary"> primary </mu-button>
<mu-button class="demo-color-btn" color="success"> success </mu-button>
<mu-button class="demo-color-btn" color="indigo400"> indigo400 </mu-button>
<mu-button class="demo-color-btn" color="#1565c0"> Custom </mu-button>
<style>
.demo-color-btn {
  margin: 8px;
}
</style>
```
:::

## Use class Color

The Muse-UI Color class that defines all the colors in the [Material Design] (https://material.io/) specification.

```javascript
import theme from 'muse-ui/lib/theme';
import * as colors from 'muse-ui/lib/theme/colors';

theme.add('custom-theme', {
  primary: colors.indigo,
  secondary: colors.pinkA200
});
```

## Material color table

The following is a list of Material Design palettes grouped by primary colors.

<color-palette />

<style>
.demo-color-btn {
  margin: 8px;
}
</style>
