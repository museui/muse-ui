import Checkbox from '../../Checkbox';

export default {
  methods: {
    toggleSelectAll (val) {
      this.isSelectAll = val;
      const selects = [];
      if (this.isSelectAll) {
        let i = 0;
        while (i < this.data.length) {
          selects.push(i++);
        }
      }
      this.$emit('update:selects', selects);
    },
    createSlotHeader () {
      return this.$scopedSlots.header({
        columns: this.column
      });
    },
    createSlotTh (column) {
      return this.$scopedSlots.th({
        ...column
      });
    },
    createDefaultTh (column) {
      return column.title;
    },
    createTh (h, column) {
      return this.$scopedSlots.th ? this.createSlotTh(column) : this.createDefaultTh(column);
    },
    createCheckboxTh (h) {
      const isEnable = this.selectable && this.selectAll;
      return h('th', {
        staticClass: 'mu-checkbox-col'
      }, [
        h(Checkbox, {
          props: {
            inputValue: this.isSelectAll,
            disabled: !isEnable
          },
          on: {
            change: this.toggleSelectAll
          }
        })
      ]);
    },
    createTHeader (h) {
      const arr = this.columns.map((column) => {
        return h('th', {
          class: [
            column.align ? `is-${column.align}` : '',
            column.class || ''
          ]
        }, this.createTh(h, column));
      });

      if (this.checkbox) arr.unshift(this.createCheckboxTh(h));
      return h('tr', {}, arr);
    },
    createHeader (h) {
      return h('div', {
        staticClass: 'mu-table-header-wrapper'
      }, [
        h('table', {
          staticClass: 'mu-table-header'
        }, [
          h('thead', {}, [
            this.$scopedSlots.header ? this.createSlotHeader() : this.createTHeader(h)
          ])
        ])
      ]);
    }
  }
};
