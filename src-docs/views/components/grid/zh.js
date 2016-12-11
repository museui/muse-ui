import description from './README.md'

export default {
  description,
  simpleExample: '使用示例',
  simpleExampleDesc: '`width` 在手机上的宽度, `tablet` 平板上的宽度, `desktop` pc端上的宽度',
  row: {
    props: {
      gutter: '`col` 之间是否存在间隔'
    },
    slots: {
      default: '放置 `col` 组件'
    }
  },
  col: {
    props: {
      width: '手机上的宽度, 5, 10, 15, 20, 25, 30, 33, 35, 40, 45, 50, 55, 60, 65, 66, 70, 75, 80, 85, 90, 95, 100 都是百分比设置',
      tablet: '平板上的宽度, 5, 10, 15, 20, 25, 30, 33, 35, 40, 45, 50, 55, 60, 65, 66, 70, 75, 80, 85, 90, 95, 100 都是百分比设置',
      desktop: '桌面端的宽度, 5, 10, 15, 20, 25, 30, 33, 35, 40, 45, 50, 55, 60, 65, 66, 70, 75, 80, 85, 90, 95, 100 都是百分比设置'
    },
    slots: {
      default: '内容部分'
    }
  }
}
