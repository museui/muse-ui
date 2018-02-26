import Chip from '../../Chip';
export default {
  props: {
    chips: Boolean
  },
  methods: {
    createSelectedItems (h) {
      if (!this.chips) return this.selects.map(item => item.label).join(',');
      return this.selects.map(item => {
        return h(Chip, {}, item.label);
      });
    },
    createSelection (h) {
      const content = h('div', {
        staticClass: 'mu-select-content'
      }, this.createSelectedItems(h));
      const action = h('div', {
        staticClass: 'mu-select-action'
      }, [
        h('svg', {
          staticClass: 'mu-select-icon',
          attrs: {
            viewBox: '0 0 24 24'
          },
          on: {
            click: (e) => {
              e.stopPropagation();
              this.toggleMenu();
            }
          }
        }, [
          h('path', {
            attrs: {
              d: 'M7 10l5 5 5-5z'
            }
          })
        ])
      ]);
      return h('div', {
        staticClass: 'mu-select',
        class: {
          'is-open': this.open
        },
        attrs: {
          tabindex: 0
        },
        on: this.createListeners(),
        ref: 'select'
      }, [
        content,
        action
      ]);
    }
  }
};
