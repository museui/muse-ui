import '../styles/components/checkbox.less';
import theme from '../theme';
import CheckboxTheme from './theme';
import Checkbox from './Checkbox';

Checkbox.install = function (Vue) {
  Vue.component(Checkbox.name, Checkbox);
};

theme.addCreateTheme(CheckboxTheme);
export default Checkbox;
