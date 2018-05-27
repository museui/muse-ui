import '../styles/components/breadcrumbs.less';
import Breadcrumbs from './Breadcrumbs';
import BreadcrumbsItem from './BreadcrumbsItem';

Breadcrumbs.install = function (Vue) {
  Vue.component(Breadcrumbs.name, Breadcrumbs);
  Vue.component(BreadcrumbsItem.name, BreadcrumbsItem);
};

export { Breadcrumbs, BreadcrumbsItem };
export default Breadcrumbs;
