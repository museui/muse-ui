import '../styles/components/snackbar.less';
import Snackbar from './Snackbar';

Snackbar.install = function (Vue) {
  Vue.component(Snackbar.name, Snackbar);
};

export default Snackbar;
