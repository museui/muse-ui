# Card

The `mu-card` card is a piece of paper containing a specific set of data. The dataset contains a variety of related information, such as photos, texts, and links on a single subject. Cards are often the gateway to more detailed and complex information. The card has a fixed width and variable height. The maximum height is limited to content that can adapt to a single view on the platform, but it can be temporarily expanded if needed (for example, to display a comment bar). The card will not flip to reveal the information behind it.


## Example

:::demo
```html
<mu-container>
<mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
  <mu-card-header title="Myron Avatar" sub-title="sub title">
    <mu-avatar slot="avatar">
      <img src="../../assets/images/uicon.jpg">
    </mu-avatar>
  </mu-card-header>
  <mu-card-media title="Image Title" sub-title="Image Sub Title">
    <img src="../../assets/images/sun.jpg">
  </mu-card-media>
  <mu-card-title title="Content Title" sub-title="Content Title"></mu-card-title>
  <mu-card-text>
    散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
    调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
    似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
    找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
  </mu-card-text>
  <mu-card-actions>
    <mu-button flat>Action 1</mu-button>
    <mu-button flat>Action 2</mu-button>
  </mu-card-actions>
</mu-card>
</mu-container>
```
:::

## Card Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| raised | deepen the shadow | Boolean | — | — |

## Card Header Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| title | title | String | — | — |
| sub-title | subtitle | String | — | — |

## Card Header Slots

| Name | Description |
|------|------|
| avatar | avatar slot |
| default | — |

## Card Media Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| title | title | String | — | — |
| sub-title | subtitle | String | — | — |

## Card Title Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| title | title | String | — | — |
| sub-title | subtitle | String | — | — |
