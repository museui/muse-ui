import Checkbox from '../../Checkbox';

export default {
  data () {
    return {
      hoverIndex: -1,
      isSelectAll: false
    };
  },
  methods: {
    isSelected (index) {
      return this.selects.indexOf(index) !== -1;
    },
    toggleSelect (index) {
      const selects = [...this.selects];
      const selectIndex = selects.indexOf(index);
      if (selectIndex !== -1) {
        selects.splice(selectIndex, 1);
      } else {
        selects.push(index);
      }
      selects.sort((a, b) => a - b);
      this.$emit('update:selects', selects);
      this.isSelectAll = selects.length >= this.data.length;
    },
    createEmpty (h) {
      return [
        this.$slots.empty
          ? this.$slots.empty
          : h('div', { staticClass: 'mu-table-empty' }, this.noDataText)
      ];
    },
    createSlotContent (row, index) {
      return this.$scopedSlots.default({
        row,
        $index: index
      });
    },
    createCheckboxTd (h, index) {
      return h('td', {
        staticClass: 'mu-checkbox-col'
      }, [
        h(Checkbox, {
          props: {
            inputValue: this.isSelected(index),
            disabled: !this.selectable
          }
        })
      ]);
    },
    createContent (h) {
      return this.data.map((row, index) => {
        const arr = this.$scopedSlots.default
          ? this.createSlotContent(row, index)
          : this.columns.map((column) => {
            return h('td', {}, row[column.name]);
          }) || [];

        if (this.checkbox) arr.unshift(this.createCheckboxTd(h, index));
        return h('tr', {
          class: {
            'is-hover': this.hover && this.hoverIndex === index,
            'is-stripe': this.stripe && index % 2 !== 0,
            'is-selected': this.isSelected(index)
          },
          on: {
            mouseenter: () => (this.hoverIndex = index),
            mouseleave: () => (this.hoverIndex = -1),
            click: () => this.toggleSelect(index)
          }
        }, arr);
      });
    },
    createBody (h) {
      return h('div', {
        staticClass: 'mu-table-body-wrapper'
      }, [
        h('table', {
          staticClass: 'mu-table-body',
          style: {
            width: this.tableWidth
          }
        }, [
          this.createColGroup(h),
          h('tbody', {}, this.data && this.data.length > 0
            ? this.createContent(h) : this.createEmpty(h))
        ])
      ]);
    }
  }
};
