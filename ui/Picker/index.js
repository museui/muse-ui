import '../styles/components/picker.less';
import theme from '../theme';
import PickerTheme from './theme';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import DateTimePicker from './DateTimePicker';

theme.addCreateTheme(PickerTheme);
export { DatePicker, TimePicker, DateTimePicker };
export default {
  install (Vue) {
    Vue.component(DatePicker.name, DatePicker);
    Vue.component(TimePicker.name, TimePicker);
    Vue.component(DateTimePicker.name, DateTimePicker);
  }
};
