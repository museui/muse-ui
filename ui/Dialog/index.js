import '../styles/components/dialog.less';
import Dialog from './Dialog';

Dialog.install = function (Vue) {
  Vue.component(Dialog.name, Dialog);
};

export default Dialog;
