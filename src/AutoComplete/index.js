import '../styles/components/text-field.less';
import '../styles/components/select.less';
import AutoComplete from './AutoComplete';

AutoComplete.install = function (Vue) {
  Vue.component(AutoComplete.name, AutoComplete);
};

export default AutoComplete;
