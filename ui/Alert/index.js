import '../styles/components/alert.less';
import Alert from './Alert';

Alert.install = function (Vue) {
  Vue.component(Alert.name, Alert);
};

export default Alert;
