import '../styles/components/paper.less';
import Paper from './Paper';

Paper.install = function (Vue) {
  Vue.component(Paper.name, Paper);
};

export default Paper;
