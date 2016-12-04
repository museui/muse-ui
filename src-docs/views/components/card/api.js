export default {
  card: {
    slots: [{
      name: 'default',
      desc: '用于放置子组件'
    }]
  },
  cardHeader: {
    props: [{
      name: 'title',
      type: 'String',
      default: '',
      desc: '标题文字'
    }, {
      name: 'titleClass',
      type: 'String,Object,Array',
      default: '',
      desc: '标题样式,同 `class` 绑定方式一致'
    }, {
      name: 'subTitle',
      type: 'String',
      default: '',
      desc: '子标题文字'
    }, {
      name: 'subTitleClass',
      type: 'String,Object,Array',
      default: '',
      desc: '子标题样式,同 `class` 绑定方式一致'
    }],
    slots: [{
      name: 'avatar',
      desc: '用于放置 avatar 组件'
    }, {
      name: 'default',
      desc: '用于放置一些其它内容'
    }]
  },
  cardMedia: {
    props: [{
      name: 'title',
      type: 'String',
      default: '',
      desc: '标题文字'
    }, {
      name: 'titleClass',
      type: 'String,Object,Array',
      default: '',
      desc: '标题样式,同 `class` 绑定方式一致'
    }, {
      name: 'subTitle',
      type: 'String',
      default: '',
      desc: '子标题文字'
    }, {
      name: 'subTitleClass',
      type: 'String,Object,Array',
      default: '',
      desc: '子标题样式,同 `class` 绑定方式一致'
    }],
    slots: [{
      name: 'default',
      desc: '放置图片等媒体元素'
    }]
  },
  cardTitle: {
    props: [{
      name: 'title',
      type: 'String',
      default: '',
      desc: '标题文字'
    }, {
      name: 'titleClass',
      type: 'String,Object,Array',
      default: '',
      desc: '标题样式,同 `class` 绑定方式一致'
    }, {
      name: 'subTitle',
      type: 'String',
      default: '',
      desc: '子标题文字'
    }, {
      name: 'subTitleClass',
      type: 'String,Object,Array',
      default: '',
      desc: '子标题样式,同 `class` 绑定方式一致'
    }]
  },
  cardText: {
    slots: [{
      name: 'default',
      desc: '用于放置大段介绍性的文字'
    }]
  },
  cardActions: {
    slots: [{
      name: 'default',
      desc: '用于放置动作按钮'
    }]
  }
}
