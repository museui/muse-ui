import '../styles/components/slider.less';
import theme from '../theme';
import SliderTheme from './theme';
import Slider from './Slider';

Slider.install = function (Vue) {
  Vue.component(Slider.name, Slider);
};

theme.addCreateTheme(SliderTheme);
export default Slider;
