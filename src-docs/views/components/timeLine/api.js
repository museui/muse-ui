export default {
  timeline: {
    props: [{
      name: 'lineType',
      type: 'String',
      default: 'solid',
      desc: 'timeline.props.lineType'
    },
    {
      name: 'lineColor',
      type: 'String',
      default: '#e8e8e8',
      desc: 'timeline.props.lineColor'
    },
    {
      name: 'lineWidth',
      type: 'Number',
      default: '2',
      desc: 'timeline.props.lineWidth'
    },
    {
      name: 'iconWidth',
      type: 'Number',
      default: '15',
      desc: 'timeline.props.iconWidth'
    },
    {
      name: 'iconColor',
      type: 'String',
      default: '#7e57c2',
      desc: 'timeline.props.iconColor'
    },
    {
      name: 'iconType',
      type: 'String',
      default: 'solid',
      desc: 'timeline.props.iconType'
    },
    {
      name: 'iconLine',
      type: 'Number',
      default: '2',
      desc: 'timeline.props.iconLine'
    }]
  },
  timelineItem: {
    props: [{
      name: 'lineType',
      type: 'String',
      default: '/',
      desc: 'timeline.props.lineType'
    },
    {
      name: 'lineColor',
      type: 'String',
      default: '/',
      desc: 'timeline.props.lineColor'
    },
    {
      name: 'iconColor',
      type: 'String',
      default: '/',
      desc: 'timeline.props.iconColor'
    },
    {
      name: 'iconType',
      type: 'String',
      default: '/',
      desc: 'timeline.props.iconType'
    },
    {
      name: 'iconLine',
      type: 'Number',
      default: '/',
      desc: 'timeline.props.iconLine'
    }],
    slots: [{
      name: 'default',
      desc: 'timelineItem.slots.default'
    },
    {
      name: 'time',
      desc: 'timelineItem.slots.time'
    },
    {
      name: 'des',
      desc: 'timelineItem.slots.des'
    },
    {
      name: 'icon',
      desc: 'timelineItem.slots.icon'
    }]
  }
}
