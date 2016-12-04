export default {
  props: [{
    name: 'autoWidth',
    type: 'Boolean',
    default: 'false',
    desc: '是否自动计算菜单宽度'
  }, {
    name: 'maxHeight',
    type: 'Number',
    default: '',
    desc: '菜单最大高度'
  }, {
    name: 'multiple',
    type: 'Boolean',
    default: 'false',
    desc: '是否可以多选'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: '设置为 `true`， 将不可使用'
  }, {
    name: 'openImmediately',
    type: 'Boolean',
    default: 'false',
    desc: '是否在初始化的时候打开菜单'
  }, {
    name: 'anchorOrigin',
    type: 'Object',
    default: '{vertical: \'top\', horizontal: \'left\'}',
    desc: '锚点的位置'
  }, {
    name: 'scroller',
    type: 'Element',
    default: 'window',
    desc: '滚动的元素，会监听它的 `scroll` 事件, 在滚动时会不断更新弹出框的位置'
  }, {
    name: 'labelClass',
    type: 'String,Object,Array',
    default: '',
    desc: '文字样式，同 `class` 绑定方式一致'
  }, {
    name: 'iconClass',
    type: 'String,Object,Array',
    default: '',
    desc: '图标样式，同 `class` 绑定方式一致'
  }, {
    name: 'menuClass',
    type: 'String,Object,Array',
    default: '',
    desc: '菜单样式，同 `class` 绑定方式一致'
  }, {
    name: 'menuListClass',
    type: 'String,Object,Array',
    default: '',
    desc: '菜单列表部分样式，同 `class` 绑定方式一致'
  }, {
    name: 'underlineClass',
    type: 'String,Object,Array',
    default: '',
    desc: '底部横线样式，同 `class` 绑定方式一致'
  }],
  slots: [{
    name: 'default',
    desc: '用来放置`menuItem` 、 `subHeader` 、 `divider` 等组件'
  }],
  events: [{
    name: 'change',
    desc: '当value改变时触发事件，会传入新的 `value`'
  }, {
    name: 'open',
    desc: '菜单打开时事件'
  }, {
    name: 'close',
    desc: '菜单关闭时事件'
  }]
}
