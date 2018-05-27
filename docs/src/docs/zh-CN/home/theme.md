MuseUI 提供一个极为简单和优化的方式自定义主题风格

```javascript
import MuseUI from 'muse-ui';

MuseUI.theme.add('myTheme', {
  primary: MuseUI.Colors.blue,
  secondary: MuseUI.Colors.pinkA200,
  success: MuseUI.Colors.green,
  warning: MuseUI.Colors.yellow600,
  info: MuseUI.Colors.blue,
  error: MuseUI.Colors.red,
}).use('myTheme');
```
