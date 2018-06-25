import '../styles/components/avatar.less';
import theme from '../theme';
import AvatarTheme from './theme';
import Avatar from './Avatar';

Avatar.install = function (Vue) {
  Vue.component(Avatar.name, Avatar);
};

theme.addCreateTheme(AvatarTheme);
export default Avatar;
