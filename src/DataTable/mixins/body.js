import Checkbox from '../../Checkbox';
import { ExpandTransition } from '../../internal/transitions';

export default {
  props: {
    expandRowIndex: {
      type: Number,
      default: -1
    },
    autoExpand: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      hoverIndex: -1,
      expandIndex: this.expandRowIndex,
      isSelectAll: false
    };
  },
  methods: {
    handleScroll (e) {
      const scrollLeft = e.target.scrollLeft;
      const theader = this.$refs.header;
      const tfooter = this.$refs.tfooter;
      if (theader) theader.scrollLeft = scrollLeft;
      if (tfooter) tfooter.scrollLeft = scrollLeft;
    },
    isSelected (index) {
      return this.selects.indexOf(index) !== -1;
    },
    toggleSelect (index) {
      if (!this.selectable) return;
      const selects = [...this.selects];
      const selectIndex = selects.indexOf(index);
      if (selectIndex !== -1) {
        selects.splice(selectIndex, 1);
      } else {
        selects.push(index);
      }
      selects.sort((a, b) => a - b);
      this.$emit('update:selects', selects);
      this.$emit('select-change', index, selects);
    },
    toggleExpand (index) {
      this.expandIndex = this.expandIndex === index ? -1 : index;
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
          },
          on: {
            change: () => this.toggleSelect(index),
            click: (e) => {
              e.stopPropagation();
            }
          }
        })
      ]);
    },
    createContent (h) {
      const contents = [];
      for (let index = 0; index < this.data.length; index++) {
        const row = this.data[index];
        const arr = this.$scopedSlots.default
          ? this.createSlotContent(row, index)
          : this.columns.map((column) => {
            const text = column.formatter && typeof column.formatter === 'function'
              ? column.formatter(row[column.name], row)
              : row[column.name];
            return h('td', {
              class: [
                column.align || column.cellAlign ? `is-${column.cellAlign || column.align}` : ''
              ]
            }, text);
          }) || [];
        if (this.checkbox) arr.unshift(this.createCheckboxTd(h, index));

        const rowClassName = typeof this.rowClassName === 'function' ? this.rowClassName(index, row) : this.rowClassName;
        contents.push(
          h('tr', {
            staticClass: rowClassName,
            class: {
              'is-hover': this.hover && this.hoverIndex === index,
              'is-stripe': this.stripe && index % 2 !== 0,
              'is-selected': this.isSelected(index)
            },
            style: typeof this.rowStyle === 'function' ? this.rowStyle(index, row) : this.rowStyle,
            on: {
              mouseenter: (e) => {
                this.hoverIndex = index;
                this.$emit('row-mouseenter', index, row, e);
              },
              mouseleave: (e) => {
                this.hoverIndex = -1;
                this.$emit('row-mouseleave', index, row, e);
              },
              contextmenu: (e) => {
                this.$emit('row-contextmenu', index, row, e);
              },
              click: (e) => {
                if (!this.checkbox) this.toggleSelect(index);
                if (this.autoExpand) this.toggleExpand(index);
                this.$emit('row-click', index, row, e);
              },
              dblclick: (e) => this.$emit('row-dblclick', index, row, e)
            },
            key: row[this.rowKey]
          }, arr)
        );

        if (this.$scopedSlots.expand) {
          contents.push(
            h('tr', {
              staticClass: 'mu-table-expand-row'
            }, [
              h('td', {
                attrs: {
                  colspan: this.columns.length + (this.checkbox ? 1 : 0)
                },
                class: {
                  'is-expand': this.expandIndex === index
                }
              }, this.expandIndex === index ? [
                h(ExpandTransition, {}, this.$scopedSlots.expand({
                  row,
                  $index: index
                }))
              ] : undefined)
            ])
          );
        }
      }
      return contents;
    },
    createBody (h) {
      return this.data && this.data.length > 0 ? h('div', {
        staticClass: 'mu-table-body-wrapper',
        on: {
          scroll: this.handleScroll
        },
        ref: 'body'
      }, [
        h('table', {
          staticClass: 'mu-table-body',
          style: {
            width: this.tableWidth
          }
        }, [
          this.createColGroup(h),
          h('tbody', {}, this.createContent(h))
        ])
      ]) : this.createEmpty(h);
    }
  },
  watch: {
    selects (val) {
      this.isSelectAll = val && val.length >= this.data.length;
    },
    expandRowIndex (val) {
      if (this.expandIndex === val) return;
      this.expandIndex = val;
    },
    expandIndex (val) {
      this.$emit('update:expandRowIndex', val);
      this.$emit('change-expand', val);
    }
  }
};
