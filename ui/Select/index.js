import '../styles/components/select.less';
import Select from './Select';
import Option from './Option';

Select.install = function (Vue) {
  Vue.component(Select.name, Select);
  Vue.component(Option.name, Option);
};

export { Select, Option };
export default Select;
