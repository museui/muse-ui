import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Simple Example',
  flexbox: {
    props: {
      gutter: 'distance between each `flexboxItem`',
      orient: 'direction of `flexboxItem` \n * horizontal: arrange by horizontal; \n * vertical: arrange by vertical',
      justify: 'align method of main axis: flex-start, flex-end, center, space-between, space-around',
      align: 'align method of cross axis: flex-start, flex-end, center, baseline, stretch',
      wrap: 'wrap or not, warp: allow, nowrap: disallow'
    },
    slots: {
      default: 'is used to place the `flexboxItem` components'
    }
  },
  flexboxItem: {
    props: {
      grow: 'is same with the `flex-grow` attribute of flex layout',
      shrink: 'is same with the `flex-shrink` attribute of flex layout',
      basis: 'is same with the `flex-basis` attribute of flex layout',
      order: 'is same with the `order` attribute of flex layout'
    },
    slots: {
      default: 'is used to place the specific content'
    }
  }
}
