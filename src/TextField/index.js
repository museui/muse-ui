import '../styles/components/text-field.less';
import theme from '../theme';
import TextFieldTheme from './theme';
import TextField from './TextField';

TextField.install = function (Vue) {
  Vue.component(TextField.name, TextField);
};

theme.addCreateTheme(TextFieldTheme);
export default TextField;
