import '../styles/components/grid';
import Row from './Row';
import Col from './Col';

export { Row, Col };
export default {
  install (Vue) {
    Vue.component(Row.name);
    Vue.component(Col.name);
  }
};
