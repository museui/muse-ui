import '../styles/components/menu.less';
import Menu from './Menu';

Menu.install = function (Vue) {
  Vue.component(Menu.name, Menu);
};

export default Menu;
