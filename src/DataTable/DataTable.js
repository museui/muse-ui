import header from './mixins/header';
import body from './mixins/body';
import { getWidth } from '../utils';

export default {
  name: 'mu-data-table',
  mixins: [header, body],
  props: {
    data: Array,
    columns: Array,
    noDataText: {
      type: String,
      default: '暂无数据'
    },
    height: [String, Number],
    maxHeight: [String, Number],
    selectAll: Boolean,
    selectable: Boolean,
    selects: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    stripe: Boolean,
    border: Boolean,
    hover: Boolean
  },
  render (h) {
    return h('div', {
      staticClass: 'mu-table',
      class: {
        'mu-table-border': this.border
      },
      style: {
        'max-height': getWidth(this.maxHeight),
        'height': getWidth(this.height)
      }
    }, [
      this.createHeader(h),
      this.createBody(h)
    ]);
  }
};
