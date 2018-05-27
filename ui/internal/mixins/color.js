import { convertClass, getColor } from '../../utils';

export default {
  props: {
    color: String
  },
  methods: {
    getColorClass (addInverse = true) {
      return this.getNormalColorClass(this.color, false, addInverse);
    },
    getTextColorClass () {
      return this.getNormalColorClass(this.textColor, true, true);
    },
    getColor (color, disabled) {
      if (disabled || this.disabled) return;
      return getColor(color);
    },
    getNormalColorClass (color, text = false, addInverse = true) {
      const classObj = {};
      const themes = ['primary', 'secondary', 'success', 'warning', 'info', 'error'];

      themes.forEach((theme) => {
        classObj[`mu-${theme}${text ? '-text' : ''}-color`] = color === theme;
      });
      if (!text && addInverse) classObj['mu-inverse'] = !!color;

      return convertClass(classObj).join(' ');
    }
  }
};
