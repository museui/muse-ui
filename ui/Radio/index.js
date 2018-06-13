import '../styles/components/radio.less';
import theme from '../theme';
import RadioTheme from './theme';
import Radio from './Radio';

Radio.install = function (Vue) {
  Vue.component(Radio.name, Radio);
};

theme.addCreateTheme(RadioTheme);
export default Radio;
