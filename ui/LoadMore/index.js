import '../styles/components/progress.less';
import '../styles/components/load-more.less';
import theme from '../theme';
import LoadMoreTheme from './theme';
import InfiniteScroll from './InfiniteScroll';
import RefreshControl from './RefreshControl';
import LoadMore from './LoadMore';

LoadMore.install = function (Vue) {
  Vue.component(LoadMore.name, LoadMore);
  Vue.component(RefreshControl.name, RefreshControl);
  Vue.component(InfiniteScroll.name, InfiniteScroll);
};

theme.addCreateTheme(LoadMoreTheme);
export { LoadMore, InfiniteScroll, RefreshControl };
export default LoadMore;
