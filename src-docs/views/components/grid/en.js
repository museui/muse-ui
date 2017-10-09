import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: '`width` means the width of mobile, `tablet` means the width of tablet, `desktop` means the width of PC',
  row: {
    props: {
      gutter: 'whether the `col`s have space between them'
    },
    slots: {
      default: 'is used to place the `col` component'
    }
  },
  col: {
    props: {
      width: 'width of mobile, 5, 10, 15, 20, 25, 30, 33, 35, 40, 45, 50, 55, 60, 65, 66, 70, 75, 80, 85, 90, 95, 100, all of them are percentage',
      tablet: 'width of tablet, 5, 10, 15, 20, 25, 30, 33, 35, 40, 45, 50, 55, 60, 65, 66, 70, 75, 80, 85, 90, 95, 100, all of them are percentage',
      desktop: 'width of PC, 5, 10, 15, 20, 25, 30, 33, 35, 40, 45, 50, 55, 60, 65, 66, 70, 75, 80, 85, 90, 95, 100, all of them are percentage'
    },
    slots: {
      default: 'content part'
    }
  }
}
