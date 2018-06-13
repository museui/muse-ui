import '../styles/components/chip.less';
import theme from '../theme';
import ChipTheme from './theme';
import Chip from './Chip';

Chip.install = function (Vue) {
  Vue.component(Chip.name, Chip);
};

theme.addCreateTheme(ChipTheme);
export default Chip;
