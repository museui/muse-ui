import '../styles/components/paper.less';
import '../styles/components/elevation.less';
import theme from '../theme';
import PaperTheme from './theme';
import Paper from './Paper';

Paper.install = function (Vue) {
  Vue.component(Paper.name, Paper);
};

theme.addCreateTheme(PaperTheme);
export default Paper;
