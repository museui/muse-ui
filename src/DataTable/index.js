import '../styles/components/data-table.less';
import theme from '../theme';
import DataTableTheme from './theme';
import DataTable from './DataTable';

DataTable.install = function (Vue) {
  Vue.component(DataTable.name, DataTable);
};

theme.addCreateTheme(DataTableTheme);
export default DataTable;
