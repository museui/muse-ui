import '../styles/components/form.less';
import theme from '../theme';
import FormTheme from './theme';
import Form from './Form';
import FormItem from './FormItem';

Form.install = function (Vue) {
  Vue.component(Form.name, Form);
  Vue.component(FormItem.name, FormItem);
};

theme.addCreateTheme(FormTheme);
export { Form, FormItem };
export default Form;
