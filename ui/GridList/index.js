import '../styles/components/grid-list.less';
import GridList from './GridList';
import GridTile from './GridTile';

GridList.install = function (Vue) {
  Vue.component(GridList.name, GridList);
  Vue.component(GridTile.name, GridTile);
};

export { GridList, GridTile };
export default GridList;
