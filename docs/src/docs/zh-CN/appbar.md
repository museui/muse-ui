# 顶部导航条

`mu-appbar` 组件，一般放置在页面顶部，作为页面标题、logo、菜单和操作按钮的容器。

## 示例

:::demo
```html
<mu-appbar style="width: 100%;" title="Title"></mu-appbar>
```
:::

## 配合按钮使用

:::demo
```html
<mu-appbar style="width: 100%;" color="primary">
  <mu-button icon slot="left">
    <mu-icon value="menu"></mu-icon>
  </mu-button>
  Title

  <mu-button flat slot="right">LOGIN</mu-button>
</mu-appbar>
```
:::


## 配合菜单使用

:::demo
```html
<mu-appbar style="width: 100%;" color="primary">
  <mu-button icon slot="left">
    <mu-icon value="menu"></mu-icon>
  </mu-button>
  Title
  <mu-menu slot="right">
    <mu-button flat>MENU</mu-button>
    <mu-list slot="content">
      <mu-list-item button>
        <mu-list-item-content>
          <mu-list-item-title>Menu Item 1</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-content>
          <mu-list-item-title>Menu Item 2</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
    </mu-list>
  </mu-menu>
</mu-appbar>
```
:::

## AppBar Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| color | 组件的颜色 | String | — | — |
| textColor | 文本的颜色 | String | — | — |
| title | 组件的标题，定义了 default slot | String | — | — |
| z-depth | 阴影深度 | Number | 0-24 | 4 |

## AppBar Slots

| 名称 | 介绍 |
|------|------|
| left | 组件左边的内容 |
| right | 组件右边的内容 |
| default | 组件中间的内容，会覆盖掉 *title* 属性 |
