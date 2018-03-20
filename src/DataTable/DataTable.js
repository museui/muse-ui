import header from './mixins/header';
import body from './mixins/body';
import colgroup from './mixins/colgroup';
import { getWidth } from '../utils';

export default {
  name: 'mu-data-table',
  mixins: [header, body, colgroup],
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
    sort: {
      type: Object
    },
    checkbox: Boolean,
    stripe: Boolean,
    border: Boolean,
    fit: {
      type: Boolean,
      default: true
    },
    hover: {
      type: Boolean,
      default: true
    }
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
