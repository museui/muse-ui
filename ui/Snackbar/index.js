import '../styles/components/snackbar.less';
import theme from '../theme';
import SnackbarTheme from './theme';
import Snackbar from './Snackbar';

Snackbar.install = function (Vue) {
  Vue.component(Snackbar.name, Snackbar);
};

theme.addCreateTheme(SnackbarTheme);
export default Snackbar;
