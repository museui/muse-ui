MuseUI provides a very simple and optimized way to customize theme styles.

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
