import color from '../internal/mixins/color';
import { getColor } from '../utils';

export default {
  name: 'mu-alert',
  mixins: [color],
  props: {
    delete: Boolean,
    transition: String,
    mode: String,
    show: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleDelete (e) {
      e.stopPropagation();
      this.$emit('update:show', false);
      this.$emit('delete');
    }
  },
  render (h) {
    const deleteIcon = h('svg', {
      staticClass: 'mu-alert-delete-icon',
      attrs: {
        viewBox: '0 0 24 24'
      },
      on: {
        click: this.handleDelete
      }
    }, [
      h('path', {
        attrs: {
          d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
        }
      })
    ]);

    return h('transition', {
      props: {
        mode: this.mode,
        name: this.transition
      }
    }, [
      this.show ? h('div', {
        staticClass: `mu-alert ${this.getColorClass()}`,
        style: {
          'background-color': getColor(this.color)
        },
        on: this.$listeners
      }, [this.$slots.default, this.delete ? deleteIcon : undefined]) : undefined
    ]);
  }
};
