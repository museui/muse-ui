import description from './README.md'

export default {
  description,
  simpleExample: '使用示例',
  flexbox: {
    props: {
      gutter: '各 `flexboxItem` 间的间隔',
      orient: '`flexboxItem`排列方向 \n * horizontal: 水平方向排列; \n * vertical: 垂直方向排列 ',
      justify: '主轴的对齐方式 flex-start, flex-end, center, space-between, space-around',
      align: '交叉轴对齐方式 flex-start, flex-end, center, baseline, stretch',
      wrap: '是否可以换行， wrap 允许换行， nowrap 不允许换行'
    },
    slots: {
      default: '用于放置 `flexboxItem` 组件'
    }
  },
  flexboxItem: {
    props: {
      grow: '相当于flexbox布局的 `flex-grow` 属性',
      shrink: '相当于flexbox布局的 `flex-shrink` 属性',
      basis: '相当于flexbox布局的 `flex-basis` 属性',
      order: '相当于flexbox布局的 `order` 属性，用于排序'
    },
    slots: {
      default: '用于放置具体内容'
    }
  }
}
