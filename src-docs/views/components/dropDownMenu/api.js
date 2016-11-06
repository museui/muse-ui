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
