export default {
  stepper: {
    props: [{
      name: 'activeStep',
      type: 'Number',
      default: '0',
      desc: '当前步骤'
    }, {
      name: 'linear',
      type: 'Boolean',
      default: 'true',
      desc: '是否为线性步骤导航，设置为 false，将不再控制 `step` 组件的 completed 和 disabled 属性'
    }, {
      name: 'orientation',
      type: 'String',
      default: 'horizontal',
      desc: 'horizontal: 水平步骤导航, vertical: 垂直的步骤导航'
    }],
    slots: [{
      name: 'default',
      desc: '用于放置 `step` 组件'
    }]
  },
  step: {
    props: [{
      name: 'active',
      type: 'Boolean',
      default: 'false',
      desc: '是否为当前步骤'
    }, {
      name: 'completed',
      type: 'Boolean',
      default: 'false',
      desc: '是否已完成'
    }, {
      name: 'disabled',
      type: 'Boolean',
      default: 'false',
      desc: '是否被禁用'
    }, {
      name: 'index',
      type: 'Number',
      default: '0',
      desc: '当前步骤下标'
    }, {
      name: 'last',
      type: 'Boolean',
      default: 'false',
      desc: '是否是最后一步'
    }],
    slots: [{
      name: 'default',
      desc: '用于放置 `stepLabel` 、 `stepButton` 、 `stepContent` 等组件'
    }]
  },
  stepLabel: {
    props: [{
      name: 'active',
      type: 'Boolean',
      default: 'false',
      desc: '是否是当前步骤'
    }, {
      name: 'completed',
      type: 'Boolean',
      default: 'false',
      desc: '是否已完成'
    }, {
      name: 'disabled',
      type: 'Boolean',
      default: 'false',
      desc: '是否被禁用'
    }, {
      name: 'num',
      type: 'Number',
      default: '',
      desc: '步骤序号'
    }],
    slots: [{
      name: 'icon',
      desc: '用于自定义左边的icon'
    }, {
      name: 'default',
      desc: '放置步骤标题文字'
    }]
  },
  stepButton: {
    props: [{
      name: 'active',
      type: 'Boolean',
      default: 'false',
      desc: '是否是当前步骤'
    }, {
      name: 'completed',
      type: 'Boolean',
      default: 'false',
      desc: '是否已完成'
    }, {
      name: 'disabled',
      type: 'Boolean',
      default: 'false',
      desc: '是否被禁用'
    }, {
      name: 'num',
      type: 'Number',
      default: '',
      desc: '步骤序号'
    }, {
      name: 'last',
      type: 'Boolean',
      default: 'false',
      desc: '是否是最后一步'
    }, {
      name: 'childrenInLabel',
      type: 'Boolean',
      default: 'true',
      desc: '子节点是否都在 `stepLabel` 组件内'
    }],
    slots: [{
      name: 'icon',
      desc: '用于自定义左边的icon'
    }, {
      name: 'default',
      desc: '放置步骤标题文字'
    }],
    events: [{
      name: 'click',
      desc: '点击事件'
    }]
  },
  stepContent: {
    props: [{
      name: 'active',
      type: 'Boolean',
      default: 'false',
      desc: '是否是当前步骤'
    }, {
      name: 'last',
      type: 'Boolean',
      default: 'false',
      desc: '是否是最后一步'
    }],
    slots: [{
      name: 'default',
      desc: '放置步骤的具体内容，此组件只能在垂直导航模式下使用'
    }]
  }
}
