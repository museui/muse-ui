import '../styles/components/badge.less';
import theme from '../theme';
import BadgeTheme from './theme';
import Badge from './Badge';

Badge.install = function (Vue) {
  Vue.component(Badge.name, Badge);
};

theme.addCreateTheme(BadgeTheme);
export default Badge;
