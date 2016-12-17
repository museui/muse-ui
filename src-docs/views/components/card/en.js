import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: '`card` needs to combined with following components `mu-card`、`mu-card-header`、`mu-card-media`、`mu-card-title`、`mu-card-text`、`mu-card-actions`.',
  card: {
    slots: {
      default: 'place the children components'
    }
  },
  cardHeader: {
    props: {
      title: 'title',
      titleClass: 'style of title, the binding way is same with `class`',
      subTitle: 'sub-title',
      subTitleClass: 'style of sub-title, the binding way is same with `class`'
    },
    slots: {
      avatar: 'used to place the `avatar` component',
      default: 'used to place other contents'
    }
  },
  cardMedia: {
    props: {
      title: 'title',
      titleClass: 'style of title, the binding way is same with `class`',
      subTitle: 'sub-title',
      subTitleClass: 'style of sub-title, the binding way is same with `class`'
    },
    slots: {
      default: 'used to place some media elements e.g: image'
    }
  },
  cardTitle: {
    props: {
      title: 'title',
      titleClass: 'style of title, the binding way is same with `class`',
      subTitle: 'sub-title',
      subTitleClass: 'style of sub-title, the binding way is same with `class`'
    }
  },
  cardText: {
    slots: {
      default: 'used to place the larger introduction text'
    }
  },
  cardActions: {
    slots: {
      default: 'used to place action button'
    }
  }
}
