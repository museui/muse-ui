import '../styles/components/time-picker.less';
import TimePicker from './TimePicker';

TimePicker.install = function (Vue) {
  Vue.component(TimePicker.name, TimePicker);
};

export default TimePicker;
