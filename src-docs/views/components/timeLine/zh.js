import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: '所有使用默认值',
  defineExample: '自定义',
  defineExampleDesc: '对单个时间点进行样式自定义',
  timeline: {
    props: {
      lineType: '时间轴的线条类型，与border-style具有同样的值，例如solid、dotted等',
      lineColor: '时间轴的线条颜色',
      lineWidth: '时间轴的线条宽度',
      iconWidth: '时间点的宽度，即直径',
      iconColor: '时间点的颜色',
      iconType: '时间点的线条类型，与border-style具有同样的值，例如solid、dotted等',
      iconLine: '时间点的线条宽度'
    }
  },
  timelineItem: {
    props: {
      lineType: '时间轴的线条类型，与border-style具有同样的值，例如solid、dotted等',
      lineColor: '时间轴的线条颜色',
      iconColor: '时间点的颜色',
      iconType: '时间点的线条类型，与border-style具有同样的值，例如solid、dotted等',
      iconLine: '时间点的线条宽度'
    },
    slots: {
      default: '自定义内容,使用后time与des将无效',
      time: '时间',
      des: '内容',
      icon: '自定义图标，使用后icon对应的iconWidth、iconColor、iconType、iconLine将失效'
    }
  }
}
