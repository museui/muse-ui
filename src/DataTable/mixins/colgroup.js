import resize from '../../internal/directives/resize';
export default {
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
      const minWidth = 80;
      const checkboxColWidth = 75;
      let tableElWidth = this.$el.offsetWidth;
      const widthArr = this.columns.filter((column) => column.width).map((column) => Number(column.width));
      widthArr.forEach((width) => tableElWidth -= width);
      let otherWidth = Math.floor(tableElWidth / (this.columns.length - widthArr.length));
      if (otherWidth < minWidth) otherWidth = minWidth;
      this.cols = this.columns.map((column) => {
        return column.width ? column.width : this.fit ? otherWidth : minWidth;
      })
      if (this.checkbox) this.cols.unshift(checkboxColWidth);

      if (!this.fit) {
        let tableWidth = 0;
        this.cols.forEach((width) => tableWidth += Number(width));
        this.tableWidth = tableWidth + 'px';
      } else {
        this.tableWidth = '';
      }
    },
    createColGroup(h) {
      return h('colgroup', {
        directives: [{
          name: 'resize',
          value: this.setCols
        }]
      }, this.cols.map((width) => {
        return h('col', {
          attrs: {
            width
          }
        });
      }))
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
