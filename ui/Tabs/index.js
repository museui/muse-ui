import '../styles/components/tabs.less';
import theme from '../theme';
import TabsTheme from './theme';
import Tabs from './Tabs';
import Tab from './Tab';

Tabs.install = function (Vue) {
  Vue.component(Tabs.name, Tabs);
  Vue.component(Tab.name, Tab);
};

theme.addCreateTheme(TabsTheme);
export { Tabs, Tab };
export default Tabs;
