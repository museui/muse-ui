import '../styles/components/badge.less';
import Badge from './Badge';

Badge.install = function (Vue) {
  Vue.component(Badge.name, Badge);
};

export default Badge;
