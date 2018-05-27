import '../styles/components/data-table.less';
import DataTable from './DataTable';

DataTable.install = function (Vue) {
  Vue.component(DataTable.name, DataTable);
};

export default DataTable;
