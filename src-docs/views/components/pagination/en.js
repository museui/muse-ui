import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  moreExample: 'more pagination example',
  pageSizeExample: 'change the size of page example',
  props: {
    current: 'current page',
    total: 'total data',
    pageSize: 'page size, perfer to use the pageSizeOptions when the pageSizeOptions is also configured',
    defaultPageSize: 'default size of page',
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
