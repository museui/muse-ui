import '../styles/components/subheader.less';
import SubHeader from './SubHeader';

SubHeader.install = function (Vue) {
  Vue.component(SubHeader.name, SubHeader);
};

export default SubHeader;
