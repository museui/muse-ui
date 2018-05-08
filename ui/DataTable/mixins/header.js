import Checkbox from '../../Checkbox';
import Tooltip from '../../Tooltip';

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
    handleSortChange (column) {
      const sort = {
        ...this.sort
      };

      if (this.sort && this.sort.name === column.name) {
        sort.order = sort.order === 'desc' ? 'asc' : 'desc';
      } else {
        sort.name = column.name;
        sort.order = 'desc';
      }

      this.$emit('update:sort', sort);
      this.$emit('sort-change', sort);
    },
    createSlotHeader () {
      return this.$scopedSlots.header({
        columns: this.columns
      });
    },
    createSlotTh (column) {
      return this.$scopedSlots.th({
        ...column
      });
    },
    createDefaultTh (h, column) {
      return [
        column.sortable ? h('svg', {
          staticClass: 'mu-table-sort-icon',
          attrs: {
            viewBox: '0 0 24 24'
          }
        }, [
          h('path', {
            attrs: {
              d: 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z'
            }
          })
        ]) : undefined,
        column.title
      ];
    },
    createTh (h, column) {
      return this.$scopedSlots.th ? this.createSlotTh(column) : this.createDefaultTh(h, column);
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
        const th = h('th', {
          class: [
            column.align ? `is-${column.align}` : '',
            column.class || '',
            column.sortable ? 'is-sortable' : '',
            column.sortable && this.sort && this.sort.name === column.name ? 'is-sorting' : '',
            column.sortable && this.sort && this.sort.name === column.name && this.sort.order === 'asc' ? 'sort-asc' : ''
          ],
          on: {
            click: () => column.sortable && this.handleSortChange(column)
          }
        }, this.createTh(h, column));

        return column.tooltip ? h(Tooltip, {
          props: {
            content: column.tooltip
          }
        }, [th]) : th;
      });

      if (this.checkbox) arr.unshift(this.createCheckboxTh(h));
      return h('tr', {}, arr);
    },
    createHeader (h) {
      return h('div', {
        staticClass: 'mu-table-header-wrapper',
        ref: 'header',
        directives: [{
          name: 'mousewheel',
          value: this.handleHeaderFooterMousewheel
        }]
      }, [
        h('table', {
          staticClass: 'mu-table-header',
          style: {
            width: this.tableWidth
          }
        }, [
          this.createColGroup(h),
          h('thead', {}, [
            this.$scopedSlots.header ? this.createSlotHeader() : this.createTHeader(h)
          ])
        ])
      ]);
    }
  }
};
