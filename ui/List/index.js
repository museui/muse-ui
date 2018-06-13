import '../styles/components/list.less';
import theme from '../theme';
import ListTheme from './theme';
import { createSimpleFunctional } from '../utils';
import List from './List';
import ListItem from './ListItem';
import ListAction from './ListAction';

export { List, ListItem, ListAction };
export const ListItemContent = createSimpleFunctional('mu-item-content', 'div', 'mu-list-item-content');
export const ListItemTitle = createSimpleFunctional('mu-item-title', 'div', 'mu-list-item-title');
export const ListItemSubTitle = createSimpleFunctional('mu-item-sub-title', 'div', 'mu-list-item-sub-title');
export const ListItemAfterText = createSimpleFunctional('mu-item-after-text', 'span', 'mu-list-item-after-text');

List.install = function (Vue) {
  Vue.component(List.name, List);
  Vue.component(ListItem.name, ListItem);
  Vue.component(ListAction.name, ListAction);
  Vue.component(ListItemContent.name, ListItemContent);
  Vue.component(ListItemTitle.name, ListItemTitle);
  Vue.component(ListItemSubTitle.name, ListItemSubTitle);
  Vue.component(ListItemAfterText.name, ListItemAfterText);
};

theme.addCreateTheme(ListTheme);
export default List;
