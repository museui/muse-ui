import '../styles/components/avatar.less';
import Avatar from './Avatar';

Avatar.install = function (Vue) {
  Vue.component(Avatar.name, Avatar);
};

export default Avatar;
