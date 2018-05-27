import '../styles/components/text-field.less';
import TextField from './TextField';

TextField.install = function (Vue) {
  Vue.component(TextField.name, TextField);
};

export default TextField;
