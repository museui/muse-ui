import '../styles/components/grid-list.less';
import theme from '../theme';
import GridListTheme from './theme';
import GridList from './GridList';
import GridTile from './GridTile';

GridList.install = function (Vue) {
  Vue.component(GridList.name, GridList);
  Vue.component(GridTile.name, GridTile);
};

theme.addCreateTheme(GridListTheme);
export { GridList, GridTile };
export default GridList;
