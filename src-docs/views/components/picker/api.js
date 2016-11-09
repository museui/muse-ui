export default {
  props: [{
    name: 'visibleItemCount',
    type: 'Number',
    default: '5',
    desc: '可见备选值的个数'
  }, {
    name: 'values',
    type: 'Array',
    default: '[]',
    desc: '已选择的值'
  }, {
    name: 'slots',
    type: 'Array',
    default: '[]',
    desc: 'slot 对象数组分发供选择的数据，slot属性如下: \n * **divider** 是否为分隔符 \n * **content** 分隔符显示文本 \n * **values** 备选值数组 \n * **width** 宽度 \n * **textAlign** 对齐方式 '
  }],
  events: [{
    name: 'change',
    desc: '当选择某一项是触发事件，参数 (value, index) : \n * **value** 被选择的值 \n * **index** 被选择项在 `slots` 中的下标'
  }]
}
