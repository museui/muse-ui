import DateInput from './DateInput';
import '../styles/components/date-input.less';

DateInput.install = function (Vue) {
  Vue.component(DateInput.name, DateInput);
};

export default DateInput;
