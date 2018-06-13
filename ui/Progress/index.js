import '../styles/components/progress.less';
import theme from '../theme';
import ProgressTheme from './theme';
import LinearProgress from './LinearProgress';
import CircularProgress from './CircularProgress';

theme.addCreateTheme(ProgressTheme);
export { LinearProgress, CircularProgress };
export default {
  install (Vue) {
    Vue.component(LinearProgress.name, LinearProgress);
    Vue.component(CircularProgress.name, CircularProgress);
  }
};
