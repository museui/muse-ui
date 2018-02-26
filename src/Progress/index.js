import '../styles/components/progress.less';
import LinearProgress from './LinearProgress';
import CircularProgress from './CircularProgress';

export default {
  install (Vue) {
    Vue.component(LinearProgress.name, LinearProgress);
    Vue.component(CircularProgress.name, CircularProgress);
  }
};
