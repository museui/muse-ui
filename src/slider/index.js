import '../styles/components/slider.less';
import Slider from './Slider';

Slider.install = function (Vue) {
  Vue.component(Slider.name, Slider);
};

export default Slider;
