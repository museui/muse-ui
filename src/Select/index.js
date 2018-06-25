import '../styles/components/select.less';
import theme from '../theme';
import SelectTheme from './theme';
import Select from './Select';
import Option from './Option';

Select.install = function (Vue) {
  Vue.component(Select.name, Select);
  Vue.component(Option.name, Option);
};

theme.addCreateTheme(SelectTheme);
export { Select, Option };
export default Select;
