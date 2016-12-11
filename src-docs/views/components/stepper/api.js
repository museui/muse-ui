export default {
  stepper: {
    props: [{
      name: 'activeStep',
      type: 'Number',
      default: '0',
      desc: 'stepper.props.activeStep'
    }, {
      name: 'linear',
      type: 'Boolean',
      default: 'true',
      desc: 'stepper.props.linear'
    }, {
      name: 'orientation',
      type: 'String',
      default: 'horizontal',
      desc: 'stepper.props.orientation'
    }],
    slots: [{
      name: 'default',
      desc: 'stepper.slots.default'
    }]
  },
  step: {
    props: [{
      name: 'active',
      type: 'Boolean',
      default: 'false',
      desc: 'step.props.active'
    }, {
      name: 'completed',
      type: 'Boolean',
      default: 'false',
      desc: 'step.props.completed'
    }, {
      name: 'disabled',
      type: 'Boolean',
      default: 'false',
      desc: 'step.props.disabled'
    }, {
      name: 'index',
      type: 'Number',
      default: '0',
      desc: 'step.props.index'
    }, {
      name: 'last',
      type: 'Boolean',
      default: 'false',
      desc: 'step.props.last'
    }],
    slots: [{
      name: 'default',
      desc: 'step.slots.default'
    }]
  },
  stepLabel: {
    props: [{
      name: 'active',
      type: 'Boolean',
      default: 'false',
      desc: 'stepLabel.props.active'
    }, {
      name: 'completed',
      type: 'Boolean',
      default: 'false',
      desc: 'stepLabel.props.completed'
    }, {
      name: 'disabled',
      type: 'Boolean',
      default: 'false',
      desc: 'stepLabel.props.disabled'
    }, {
      name: 'num',
      type: 'Number',
      default: '',
      desc: 'stepLabel.props.num'
    }],
    slots: [{
      name: 'icon',
      desc: 'stepLabel.slots.icon'
    }, {
      name: 'default',
      desc: 'stepLabel.slots.default'
    }]
  },
  stepButton: {
    props: [{
      name: 'active',
      type: 'Boolean',
      default: 'false',
      desc: 'stepButton.props.active'
    }, {
      name: 'completed',
      type: 'Boolean',
      default: 'false',
      desc: 'stepButton.props.completed'
    }, {
      name: 'disabled',
      type: 'Boolean',
      default: 'false',
      desc: 'stepButton.props.disabled'
    }, {
      name: 'num',
      type: 'Number',
      default: '',
      desc: 'stepButton.props.num'
    }, {
      name: 'last',
      type: 'Boolean',
      default: 'false',
      desc: 'stepButton.props.last'
    }, {
      name: 'childrenInLabel',
      type: 'Boolean',
      default: 'true',
      desc: 'stepButton.props.childrenInLabel'
    }],
    slots: [{
      name: 'icon',
      desc: 'stepButton.slots.icon'
    }, {
      name: 'default',
      desc: 'stepButton.slots.default'
    }],
    events: [{
      name: 'click',
      desc: 'stepButton.events.click'
    }]
  },
  stepContent: {
    props: [{
      name: 'active',
      type: 'Boolean',
      default: 'false',
      desc: 'stepContent.props.active'
    }, {
      name: 'last',
      type: 'Boolean',
      default: 'false',
      desc: 'stepContent.props.last'
    }],
    slots: [{
      name: 'default',
      desc: 'stepContent.slots.default'
    }]
  }
}
