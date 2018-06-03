import '../styles/components/picker.less';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import DateTimePicker from './DateTimePicker';

export { DatePicker, TimePicker, DateTimePicker };
export default {
  install (Vue) {
    Vue.component(DatePicker.name, DatePicker);
    Vue.component(TimePicker.name, TimePicker);
    Vue.component(DateTimePicker.name, DateTimePicker);
  }
};
