import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  complexExample: 'Complex Example',
  complexExampleDesc: 'define the space of each `gridTile` by `rows` and `cols`, to change the positon of title by `titlePosition`, to change the positon of `action` by `actionPosition`',
  inlineExample: 'inline example',
  inlineExampleDesc: 'making the grid list to showing in one line by external `class`',
  gridList: {
    props: {
      cellHeight: 'the width of each grid',
      cols: 'the number of columns each row',
      padding: 'the `padding` of each grid'
    },
    slots: {
      default: 'is used to place the children componens `gridTile` or `subHeader` '
    }
  },
  gridTile: {
    props: {
      cols: 'columns count, we use this parameter to calculate the width',
      rows: 'columns count, we use this parameter to calculate the height',
      title: 'title, also you can set the title text by setting the `slot` which named title',
      subTitle: 'sub title, also you can set the title text by setting the `slot` which named subTitle',
      titlePosition: 'positon of title, can be `top` or `bottom`',
      titleBarClass: 'style of title',
      actionPosition: 'positon of action button, can be right or left'
    },
    slots: {
      title: 'is used to place the title',
      subTitle: 'is used to place the subTitle',
      action: 'is used to place the action button, such as `iconButton`',
      default: 'is used to place image element and so on'
    }
  }
}
