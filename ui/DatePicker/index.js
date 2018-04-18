import '../styles/components/date-picker.less';
import DatePicker from './DatePicker';

DatePicker.install = function (Vue) {
  Vue.component(DatePicker.name, DatePicker);
};

export default DatePicker;
