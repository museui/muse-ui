import '../styles/components/tooltip.less';
import Tooltip from './Tooltip';

Tooltip.install = function (Vue) {
  Vue.component(Tooltip.name, Tooltip);
};

export default Tooltip;
