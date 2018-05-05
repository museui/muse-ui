# 徽章

`mu-badge` 可以配合图标、按钮、列表等组件使用，用于标记一些数字和文字。

## 示例

`content` 属性定义内容，设置 `color` 属性来改变颜色

::: demo
```html
<mu-container>
  <mu-list class="badge-list-wrap">
    <mu-list-item>
      <mu-list-item-content>
        <mu-list-item-title>Menu Item 1</mu-list-item-title>
      </mu-list-item-content>
      </mu-list-item-action>
        <mu-badge content="12"></mu-badge>
      </mu-list-item-action>
    </mu-list-item>
    <mu-list-item>
      <mu-list-item-content>
        <mu-list-item-title>Menu Item 2</mu-list-item-title>
      </mu-list-item-content>
      </mu-list-item-action>
        <mu-badge content="old" color="primary"></mu-badge>
      </mu-list-item-action>
    </mu-list-item>
    <mu-list-item>
      <mu-list-item-content>
        <mu-list-item-title>Menu Item 3</mu-list-item-title>
      </mu-list-item-content>
      </mu-list-item-action>
        <mu-badge content="news" color="secondary"></mu-badge>
      </mu-list-item-action>
    </mu-list-item>
  </mu-list>
</mu-container>
<style lang="less">
.badge-list-wrap {
  width: 100%;
  max-width: 360px;
  background-color: #fff;
  margin: 0 auto;
}
</style>
```
:::

## 搭配图标和按钮

:::demo
```html
<mu-container>
  <mu-flex justify-content="center">
    <mu-badge content="12" circle color="secondary"  class="demo-icon-badge">
      <mu-icon value="folder"></mu-icon>
    </mu-badge>
    <mu-badge content="12" circle color="secondary">
      <mu-button icon>
        <mu-icon value="notifications"></mu-icon>
      </mu-button>
    </mu-badge>
    <mu-badge class="demo-badge-content" color="transparent">
      <mu-icon value="folder" color="blue"></mu-icon>
      <mu-icon value="cloud_upload" color="red" slot="content"></mu-icon>
    </mu-badge>
    <mu-badge class="demo-badge-content" color="transparent">
      Copyright
      <span style="font-size: 20px; color: red;" slot="content">&copy;</span>
    </mu-badge>
  </mu-flex>
</mu-container>
```
:::

## Badge Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| color | 徽章的颜色 | String | — | — |
| content | 徽章的内容 | String | — | — |
| circle | 徽章是否为圆形 | Boolean | — | false |
| badge-class | 徽章的类名 | String | — | — |

## Badge Slots

| 名称 | 介绍 |
|------|------|
| content | 徽章的内容 |
| default | — |

<style lang="less">
.badge-list-wrap {
  width: 100%;
  max-width: 360px;
  background-color: #fff;
  margin: 0 auto;
}
.demo-icon-badge {
  padding: 12px;
  margin-right: 16px;
}
.demo-badge-content {
  padding: 12px;
  margin-left: 16px;
  margin-right: 16px;

}
</style>
