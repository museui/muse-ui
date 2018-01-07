import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple example',
  simpleExampleDesc: 'Default',
  defineExample: 'Customized example',
  defineExampleDesc: 'Customize styles for a single time point',
  timeline: {
    props: {
      lineType: 'the type of timeline, the same value as border-style, such as solid, dotted and so on.',
      lineColor: 'the color of timeline',
      lineWidth: 'the width of timeline',
      iconWidth: 'the width of icon',
      iconColor: 'the color of icon',
      iconType: 'the line type of icon, the same value as border-style, such as solid, dotted and so on.',
      iconLine: 'the line width of icon'
    }
  },
  timelineItem: {
    props: {
      lineType: 'the type of timeline, the same value as border-style, such as solid, dotted and so on.',
      lineColor: 'the color of timeline',
      iconColor: 'the color of icon',
      iconType: 'the line type of icon, the same value as border-style, such as solid, dotted and so on.',
      iconLine: 'the line width of icon'
    },
    slots: {
      default: 'customized content, If it is used, time and des will be useless!',
      time: 'time',
      des: 'description',
      icon: 'customized icon.If it is used, iconColor, iconType and iconLine will be useless! '
    }
  }
}
