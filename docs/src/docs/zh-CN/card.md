# 卡片

`mu-card` 卡片是包含一组特定数据集的纸片，数据集含有各种相关信息，例如，关于单一主题的照片，文本，和链接。卡片通常是通往更详细复杂信息的入口。卡片有固定的宽度和可变的高度。最大高度限制于可适应平台上单一视图的内容，但如果需要它可以临时扩展（例如，显示评论栏）。卡片不会翻转以展示其背后的信息。


## 示例

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

## Card Header Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| title | 标题 | String | — | — |
| sub-title | 子标题 | String | — | — |

## Card Header Slots

| 名称 | 介绍 |
|------|------|
| avatar | 头像部位的插槽 |
| default | — |

## Card Media Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| title | 标题 | String | — | — |
| sub-title | 子标题 | String | — | — |

## Card Title Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| title | 标题 | String | — | — |
| sub-title | 子标题 | String | — | — |
