import { convertClass } from '../../utils';

export default {
  props: {
    color: String
  },
  methods: {
    getColorClass () {
      return this.getNormalColorClass(this.color);
    },
    getTextColorClass () {
      return this.getNormalColorClass(this.textColor, true);
    },
    getNormalColorClass (color, text) {
      const classObj = {};
      const themes = ['primary', 'secondary', 'success', 'warning', 'info', 'error'];

      themes.forEach((theme) => {
        classObj[`mu-${theme}${text ? '-text' : ''}-color`] = color === theme;
      });
      if (!text) classObj['mu-inverse'] = !!color;

      return convertClass(classObj).join(' ');
    }
  }
};
