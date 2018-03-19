export default {
  data () {
    return {
      hoverIndex: -1
    };
  },
  methods: {
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
    createContent (h) {
      return this.data.map((row, index) => {
        const arr = this.$scopedSlots.default
          ? this.createSlotContent(row, index)
          : this.columns.map((column) => {
            return h('td', {}, row[column.name]);
          }) || [];

        return h('tr', {
          class: {
            'is-hover': this.hover && this.hoverIndex === index,
            'is-stripe': this.stripe && index % 2 !== 0
          },
          on: {
            mouseenter: () => (this.hoverIndex = index),
            mouseleave: () => (this.hoverIndex = -1)
          }
        }, arr);
      });
    },
    createBody (h) {
      return h('div', {
        staticClass: 'mu-table-body-wrapper'
      }, [
        h('table', {
          staticClass: 'mu-table-body'
        }, [
          h('tbody', {}, this.data && this.data.length > 0
            ? this.createContent(h) : this.createEmpty(h))
        ])
      ]);
    }
  }
};
