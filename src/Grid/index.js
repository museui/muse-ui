import '../styles/components/bootstrap-grid.less';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import Flex from './Flex';

export { Container, Row, Col };
export default {
  install (Vue) {
    Vue.component(Container.name, Container);
    Vue.component(Row.name, Row);
    Vue.component(Col.name, Col);
    Vue.component(Flex.name, Flex);
  }
};
