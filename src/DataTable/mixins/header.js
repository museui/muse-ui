export default {
  methods: {
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
    createTHeader (h) {
      return h('tr', {}, this.columns.map((column) => {
        return h('th', {
          class: [
            column.align ? `is-${column.align}` : '',
            column.class || ''
          ]
        }, this.createTh(h, column));
      }));
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
