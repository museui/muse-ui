import '../styles/components/chip.less';
import Chip from './Chip';

Chip.install = function (Vue) {
  Vue.component(Chip.name, Chip);
};

export default Chip;
