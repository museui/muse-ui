import '../styles/components/picker.less';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';

export { DatePicker, TimePicker };
export default {
  install (Vue) {
    Vue.component(DatePicker.name, DatePicker);
    Vue.component(TimePicker.name, TimePicker);
  }
};
