import '../styles/components/popover.less';
import Popover from './Popover';

Popover.install = function (Vue) {
  Vue.component(Popover.name, Popover);
};

export default Popover;
