import '../styles/components/divider.less';
import theme from '../theme';
import DividerTheme from './theme';
import Divider from './Divider';

Divider.install = function (Vue) {
  Vue.component(Divider.name, Divider);
};

theme.addCreateTheme(DividerTheme);
export default Divider;
