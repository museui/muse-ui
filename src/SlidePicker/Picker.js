import PickerSlot from './PickerSlot';

export default {
  name: 'mu-slide-picker',
  props: {
    visibleItemCount: {
      type: Number,
      default: 5
    },
    values: {
      type: Array,
      default () {
        return [];
      }
    },
    slots: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  methods: {
    change (index, value) {
      this.$emit('change', value, index);
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'mu-slide-picker'
    }, [
      ...this.slots.map((slot, index) => {
        return h(PickerSlot, {
          props: {
            divider: slot.divider,
            content: slot.content,
            textAlign: slot.textAlign,
            width: slot.width,
            value: this.values[index],
            values: slot.values,
            visibleItemCount: this.visibleItemCount
          },
          key: 'picker-slot-item-' + index,
          on: {
            change: (value) => {
              this.change(index, value);
            }
          }
        });
      }),
      h('div', {
        staticClass: 'mu-slide-picker-center-highlight'
      })
    ]);
  }
};
