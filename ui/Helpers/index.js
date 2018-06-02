import TouchRipple from '../internal/TouchRipple';
import * as transitions from '../internal/transitions';
import clickOutside from '../internal/directives/click-outside';
import resize from '../internal/directives/resize';
import scroll from '../internal/directives/scroll';

export default {
  install (Vue) {
    Vue.component('mu-ripple', TouchRipple);
    transitions.forEach(transition => Vue.component(transition.name, transition));
    Vue.directive(clickOutside.name, clickOutside);
    Vue.directive(resize.name, resize);
    Vue.directive(scroll.name, scroll);
  }
};
