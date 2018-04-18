import '../styles/components/button.less';
import Button from './Button';

Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
