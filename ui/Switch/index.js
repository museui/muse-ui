import '../styles/components/switch.less';
import theme from '../theme';
import SwitchTheme from './theme';
import Switch from './Switch';

Switch.install = function (Vue) {
  Vue.component(Switch.name, Switch);
};

theme.addCreateTheme(SwitchTheme);
export default Switch;

