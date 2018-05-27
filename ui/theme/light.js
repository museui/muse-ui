import * as Colors from './colors';
export default {
  type: 'light',
  primary: Colors.blue,
  secondary: Colors.pinkA200,
  success: Colors.green,
  warning: Colors.yellow600,
  info: Colors.blue,
  error: Colors.red,
  track: Colors.grey400,
  text: {
    primary: Colors.darkBlack,
    secondary: Colors.lightBlack,
    alternate: Colors.white,
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)' // 提示文字颜色
  },
  divider: Colors.faintBlack,
  background: {
    paper: Colors.white,
    chip: Colors.grey300,
    default: Colors.grey50
  }
};
