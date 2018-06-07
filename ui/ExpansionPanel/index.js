import '../styles/components/expansion-panel.less';
import ExpansionPanel from './ExpansionPanel';

ExpansionPanel.install = function (Vue) {
  Vue.component(ExpansionPanel.name, ExpansionPanel);
};

export default ExpansionPanel;
