# Badge

`Mu-badge` can be used with some components such as icons, buttons, lists to mark some number and text.

## Example

`Content` property define content, set `color` property to change color.

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

## Use with icons and buttons

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
```
:::

## Badge Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| color | badge color | String | — | — |
| content | badge content | String | — | — |
| circle | the badge whether is round | Boolean | — | false |
| badge-class | badge class | String | — | — |

## Badge Slots

| Name | Description |
|------|------|
| content | badge content |
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
