import '../styles/components/checkbox.less';
import Checkbox from './Checkbox';

Checkbox.install = function (Vue) {
  Vue.component(Checkbox.name, Checkbox);
};

export default Checkbox;
