import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple example',
  simpleExampleDesc: 'Default',
  defineExample: 'integrate with icon',
  defineExampleDesc: 'integrate with icon, you also use customized content!',
  breadcrumb: {
    props: {
      separator: ' Customized separator'
    }
  },
  breadcrumbItem: {
    props: {
      href: 'link, the last item shouldn\'t be set'
    },
    slots: {
      default: 'customized content'
    }
  }
}
