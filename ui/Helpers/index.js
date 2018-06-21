import TouchRipple from '../internal/TouchRipple';
import {
  ExpandTransition,
  FadeTransition,
  SlideTopTransition,
  SlideBottomTransition,
  SlideLeftTransition,
  SlideRightTransition,
  ScaleTransition
} from '../internal/transitions';
import clickOutside from '../internal/directives/click-outside';
import resize from '../internal/directives/resize';
import scroll from '../internal/directives/scroll';
import elevation from '../internal/directives/elevation';

export default {
  install (Vue) {
    Vue.component('mu-ripple', TouchRipple);
    [
      ExpandTransition,
      FadeTransition,
      SlideTopTransition,
      SlideBottomTransition,
      SlideLeftTransition,
      SlideRightTransition,
      ScaleTransition
    ].forEach(transition => Vue.component(transition.name, transition));
    Vue.directive(clickOutside.name, clickOutside);
    Vue.directive(resize.name, resize);
    Vue.directive(scroll.name, scroll);
    Vue.directive(elevation.name, elevation);
  }
};
