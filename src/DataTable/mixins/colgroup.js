import resize from '../../internal/directives/resize';
export default {
  props: {
    minColWidth: {
      type: Number,
      default: 128
    },
    checkboxColWidth: {
      type: Number,
      default: 75
    }
  },
  data () {
    return {
      cols: [],
      tableWidth: ''
    };
  },
  mounted () {
    this.setCols();
  },
  methods: {
    setCols () {
      let tableElWidth = this.$el.offsetWidth;
      const widthArr = this.columns.filter((column) => column.width).map((column) => Number(column.width));
      widthArr.forEach((width) => (tableElWidth -= width));
      if (this.checkbox) tableElWidth -= this.checkboxColWidth;

      let otherWidth = Math.floor(tableElWidth / (this.columns.length - widthArr.length));

      if (otherWidth < this.minColWidth) otherWidth = this.minColWidth;
      this.cols = this.columns.map((column) => {
        return column.width ? column.width : this.fit ? otherWidth : this.minColWidth;
      });
      if (this.checkbox) this.cols.unshift(this.checkboxColWidth);
      let tableWidth = 0;
      this.cols.forEach((width) => (tableWidth += Number(width)));
      this.tableWidth = tableWidth + 'px';
    },
    createColGroup (h) {
      return h('colgroup', {
      }, this.cols.map((width) => {
        return h('col', {
          attrs: {
            width
          }
        });
      }));
    }
  },
  watch: {
    columns () {
      this.setCols();
    }
  },
  directives: {
    resize
  }
};
