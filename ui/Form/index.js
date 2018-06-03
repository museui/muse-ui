import '../styles/components/form.less';
import Form from './Form';
import FormItem from './FormItem';

Form.install = function (Vue) {
  Vue.component(Form.name, Form);
  Vue.component(FormItem.name, FormItem);
};

export { Form, FormItem };
export default Form;
