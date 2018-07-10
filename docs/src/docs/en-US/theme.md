# Theme

`Muse-UI` supports to use javascript to customize and switch theme. We provide two theme styles, `light` and `dark` by default.

## Switch theme

```javascript
import theme from 'muse-ui/lib/theme';

theme.use('dark');
```

## Custom theme

Using `add(name, config, extendName)` to add new theme

```javascript
import theme from 'muse-ui/lib/theme';
theme.add('teal', {
  primary: '#009688',
  secondary: '#ff4081',
  success: '#4caf50',
  warning: '#ffeb3b',
}, 'light');

theme.use('teal');
```

* name Theme name
* config Theme Configuration Objects
* extendName extend which theme, default ‘light’

The configurations of the `light` and `dark` themes provided by default are as follows:

```javascript
// light.js
{
  primary: '#2196f3',
  secondary: '#ff4081',
  success: '#4caf50',
  warning: '#fdd835',
  info: '#2196f3',
  error: '#f44336',
  track: '#bdbdbd',
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'gba(0, 0, 0, 0.54)',
    alternate: '#fff',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)' // 提示文字颜色
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#fff',
    chip: '#e0e0e0',
    default: '#fafafa'
  }
}
```
```javascript
// dark.js
{
  primary: '#1976d2',
  secondary: '#ff4081',
  success: '#4caf50',
  warning: '#fdd835',
  info: '#2196f3',
  error: '#f44336',
  track: '#757575',
  text: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    alternate: '#303030',
    disabled: 'rgba(255, 255, 255, 0.3)',
    hint: 'rgba(255, 255, 255, 0.3)' // 提示文字颜色
  },
  divider: 'rgba(255, 255, 255, 0.3)',
  background: {
    paper: '#424242',
    chip: '#616161',
    default: '#303030'
  }
}
```

## Theme style extension

If you have a new style that needs to be added to the theme style, you need to add it to themes centralized control using `addCreateTheme(func)`.

```javascript
import theme from 'muse-ui/lib/theme';

theme.addCreateTheme((theme) => {
  return `
  .mu-hello-word {
    color: ${theme.text.primary}
  }
  `;
});
```
