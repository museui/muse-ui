import '../../styles/components/elevation.less';
import { hasClass, addClass, removeClass } from '../../utils/dom';

function getElevationClass (depth) {
  return 'mu-elevation-' + depth;
}
export default {
  name: 'elevation',
  inserted (el, { value }, vnode) {
    addClass(el, getElevationClass(value));
  },
  update (el, { value, oldValue }) {
    if (value === oldValue && hasClass(el, getElevationClass(oldValue))) return;
    removeClass(el, getElevationClass(oldValue));
    addClass(el, getElevationClass(value));
  },
  unbind (el, { value }) {
    removeClass(el, getElevationClass(value));
  }
};
