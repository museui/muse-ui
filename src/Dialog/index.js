import '../styles/components/dialog.less';
import theme from '../theme';
import DialogTheme from './theme';
import Dialog from './Dialog';

Dialog.install = function (Vue) {
  Vue.component(Dialog.name, Dialog);
};

theme.addCreateTheme(DialogTheme);
export default Dialog;
