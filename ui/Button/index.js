import '../styles/components/button.less';
import theme from '../theme';
import ButtonTheme from './theme';
import Button from './Button';

Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

theme.addCreateTheme(ButtonTheme);
export default Button;
