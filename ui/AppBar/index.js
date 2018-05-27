import '../styles/components/appbar.less';
import AppBar from './AppBar';

AppBar.install = function (Vue) {
  Vue.component(AppBar.name, AppBar);
};

export default AppBar;
