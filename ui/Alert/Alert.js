import color from '../internal/mixins/color';
import Button from '../Button';

export default {
  name: 'mu-alert',
  mixins: [color],
  props: {
    delete: Boolean,
    transition: String,
    mode: String
  },
  methods: {
    handleDelete (e) {
      e.stopPropagation();
      this.$emit('delete');
    }
  },
  render (h) {
    const deleteIcon = h(Button, {
      staticClass: 'mu-alert-delete-btn',
      props: {
        icon: true
      },
      on: {
        click: this.handleDelete
      }
    }, [
      h('svg', {
        staticClass: 'mu-alert-delete-icon',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [
        h('path', {
          attrs: {
            d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
          }
        }),
        h('path', {
          attrs: {
            d: 'M0 0h24v24H0z',
            fill: 'none'
          }
        })
      ])
    ]);
    const alert = h('div', {
      staticClass: `mu-alert ${this.getColorClass()}`,
      style: {
        'background-color': this.getColor(this.color)
      },
      on: this.$listeners
    }, [this.$slots.default, this.delete ? deleteIcon : undefined]);
    return this.transition ? h('transition', {
      props: {
        mode: this.mode,
        name: this.transition
      }
    }, [alert]) : alert;
  }
};
