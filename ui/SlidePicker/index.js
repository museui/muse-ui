import '../styles/components/slide-picker.less';
import Picker from './Picker';

Picker.install = function (Vue) {
  Vue.component(Picker.name, Picker);
};

export default Picker;
