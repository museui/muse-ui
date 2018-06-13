import '../styles/components/subheader.less';
import theme from '../theme';
import SubHeaderTheme from './theme';
import SubHeader from './SubHeader';

SubHeader.install = function (Vue) {
  Vue.component(SubHeader.name, SubHeader);
};

theme.addCreateTheme(SubHeaderTheme);
export default SubHeader;
