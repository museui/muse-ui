import '../styles/components/bottom-nav.less';
import theme from '../theme';
import BottomNavTheme from './theme';
import BottomNav from './BottomNav';
import BottomNavItem from './BottomNavItem';

BottomNav.install = function (Vue) {
  Vue.component(BottomNav.name, BottomNav);
  Vue.component(BottomNavItem.name, BottomNavItem);
};

theme.addCreateTheme(BottomNavTheme);
export { BottomNav, BottomNavItem };
export default BottomNav;
