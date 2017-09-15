import description from './README.md'

export default {
  description,
  simpleExample: '简单的使用',
  simpleExampleDesc: '所有使用默认值',
  defineExample: '配合图标使用',
  defineExampleDesc: '配合图标使用，当然你也可以自使用自定义内容',
  breadcrumb: {
    props: {
      separator: '自定义分隔符',
      href: '链接，最后一个Item不填写href'
    }
  },
  breadcrumbItem: {
    props: {
      separator: '自定义分隔符',
      href: '链接，最后一个Item不应被赋值'
    },
    slots: {
      default: '自定义内容'
    }
  }
}
