import '../styles/components/divider.less';
import Divider from './Divider';

Divider.install = function (Vue) {
  Vue.component(Divider.name, Divider);
};

export default Divider;
