import '../styles/components/pagination.less';
import theme from '../theme';
import PaginationTheme from './theme';
import Pagination from './Pagination';

Pagination.install = function (Vue) {
  Vue.component(Pagination.name, Pagination);
};

theme.addCreateTheme(PaginationTheme);
export default Pagination;
