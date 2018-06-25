import color from '../internal/mixins/color';

export default {
  mixins: [color],
  props: {
    size: {
      type: Number,
      default: 24
    },
    color: {
      type: String,
      default: ''
    },
    borderWidth: {
      type: Number,
      default: 3
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'mu-circle-wrapper active',
      style: {
        width: this.size + 'px',
        height: this.size + 'px'
      }
    }, [
      h('div', {
        staticClass: `mu-circle-spinner active ${this.getColorClass()}`,
        style: {
          'border-color': this.getColor(this.color)
        }
      }, [
        h('div', { staticClass: 'mu-circle-clipper left' }, [
          h('div', { staticClass: 'mu-circle', style: { 'border-width': this.borderWidth + 'px' }})
        ]),
        h('div', { staticClass: 'mu-circle-gap-patch' }, [
          h('div', { staticClass: 'mu-circle' })
        ]),
        h('div', { staticClass: 'mu-circle-clipper right' }, [
          h('div', { staticClass: 'mu-circle', style: { 'border-width': this.borderWidth + 'px' }})
        ])
      ])
    ]);
  }
};
