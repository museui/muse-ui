import '../styles/components/elevation.less';
import '../styles/components/appbar.less';
import theme from '../theme';
import AppBarTheme from './theme';
import AppBar from './AppBar';

AppBar.install = function (Vue) {
  Vue.component(AppBar.name, AppBar);
};

theme.addCreateTheme(AppBarTheme);
export default AppBar;
