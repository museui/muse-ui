import '../styles/components/switch.less';
import Switch from './Switch';

Switch.install = function (Vue) {
  Vue.component(Switch.name, Switch);
};

export default Switch;

