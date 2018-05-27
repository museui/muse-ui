# 主题

`Muse-UI` 支持使用 javascript 定制和切换主题，默认提供 `light` 和 `dark` 两种主题风格。

## 切换主题

```javascript
import theme from 'muse-ui/lib/theme';

theme.use('dark');
```

## 自定义主题

使用 `add(name, config, extendName)` 添加新的主题

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

* name 主题名称
* config 主题配置对象
* extendName 继承哪个主题， 默认 ‘light’

默认提供的 `light` 和 `dark` 两个主题的配置如下：

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

## 主题样式扩展

如果有新加入的样式，需要添加到主题样式中， 则需要使用 `addCreateTheme(func)` 添加到themes集中控制。

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
