import '../styles/components/bottom-nav.less';
import BottomNav from './BottomNav';
import BottomNavItem from './BottomNavItem';

BottomNav.install = function (Vue) {
  Vue.component(BottomNav.name, BottomNav);
  Vue.component(BottomNavItem.name, BottomNavItem);
};

export { BottomNav, BottomNavItem };
export default BottomNav;
