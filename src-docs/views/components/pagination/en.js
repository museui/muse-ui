import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  moreExample: 'more pagination example',
  pageSizeExample: 'change the size of page example',
  props: {
    current: 'current page',
    total: 'total data, this value should not be 0',
    pageSize: 'page size, perfer to use the pageSizeOption when the pageSizeOption is also configured and the showSizeChanger is true',
    defaultPageSize: 'default size of page, only active when pageSize is undefine and the showSizeChanger is false',
    showSizeChanger: 'whether it should be show the `pageSize` selection box',
    pageSizeOption: 'specified the page size(list style)'
  },
  slots: {
    default: 'is used to place pagination component'
  },
  events: {
    pageChange: 'when the page is changed , this event will emitted with the new current page',
    pageSizeChange: 'when the page size is changed , this event will emitted with the new  page size'
  }
}
