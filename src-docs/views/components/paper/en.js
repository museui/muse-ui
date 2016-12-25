import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  simpleExampleDesc: 'control the shadow depth by `zDepth` parameter',
  circleExample: 'circle paper example',
  props: {
    circle: 'circle or not',
    rounded: 'rounded or not',
    zDepth: '1-6, depth of shadow'
  },
  slots: {
    default: 'content'
  }
}
