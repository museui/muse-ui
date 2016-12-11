import description from './README.md'

export default {
  description,
  simpleExample: '使用示例',
  simpleExampleDesc: '一个简单的选择省市的例子，利用 picker 可以轻松实现',
  props: {
    visibleItemCount: '可见备选值的个数',
    values: '已选择的值',
    slots: 'slot 对象数组分发供选择的数据，slot属性如下: \n * **divider** 是否为分隔符 \n * **content** 分隔符显示文本 \n * **values** 备选值数组 \n * **width** 宽度 \n * **textAlign** 对齐方式 '
  },
  events: {
    change: '当选择某一项是触发事件，参数 (value, index) : \n * **value** 被选择的值 \n * **index** 被选择项在 `slots` 中的下标'
  }
}
