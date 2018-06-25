import '../styles/components/drawer.less';
import theme from '../theme';
import DrawerTheme from './theme';
import Drawer from './Drawer';

Drawer.install = function (Vue) {
  Vue.component(Drawer.name, Drawer);
};

theme.addCreateTheme(DrawerTheme);
export default Drawer;
