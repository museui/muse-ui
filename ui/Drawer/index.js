import '../styles/components/drawer.less';
import Drawer from './Drawer';

Drawer.install = function (Vue) {
  Vue.component(Drawer.name, Drawer);
};

export default Drawer;
