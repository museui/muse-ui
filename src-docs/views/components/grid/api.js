export default {
  row: {
    props: [{
      name: 'gutter',
      type: 'Boolean',
      default: 'false',
      desc: '`col` 之间是否存在间隔'
    }],
    slots: [{
      name: 'default',
      desc: '放置 `col` 组件'
    }]
  },
  col: {
    props: [{
      name: 'width',
      type: 'String',
      default: '',
      desc: '手机上的宽度, 5, 10, 15, 20, 25, 30, 33, 35, 40, 45, 50, 55, 60, 65, 66, 70, 75, 80, 85, 90, 95, 100 都是百分比设置'
    }, {
      name: 'tablet',
      type: 'String',
      default: '',
      desc: '平板上的宽度, 5, 10, 15, 20, 25, 30, 33, 35, 40, 45, 50, 55, 60, 65, 66, 70, 75, 80, 85, 90, 95, 100 都是百分比设置'
    }, {
      name: 'desktop',
      type: 'String',
      default: '',
      desc: '桌面端的宽度, 5, 10, 15, 20, 25, 30, 33, 35, 40, 45, 50, 55, 60, 65, 66, 70, 75, 80, 85, 90, 95, 100 都是百分比设置'
    }],
    slots: [{
      name: 'default',
      desc: '内容部分'
    }]
  }
}
