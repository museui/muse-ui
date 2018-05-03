<style>
.icon-container {
  display: flex;
  width: 300px;
  justify-content: space-around;
}
.icon-container .mu-icon {
  margin-bottom: 12px;
}
.icon-flex-wrap .mu-button {
  margin: 6px 8px;
}
</style>
# 图标

`Muse-UI` 推荐使用 Google 的 Material 字体图标库，有关所有可用图标的列表，请访问官方的[Material Icons](https://material.io/icons/)页面。

## 使用示例

使用 `value` 属性定义 icon, `size` 属性定义大小.

::: demo
```html
<div>
  <div class="icon-container">
    <mu-icon value="home"></mu-icon>
    <mu-icon value="flight_takeoff" color="red"></mu-icon>
    <mu-icon value="cloud_download" color="orange"></mu-icon>
    <mu-icon value="info" color="blue"></mu-icon>
  </div>
  <div class="icon-container">
    <mu-icon size="36" value="home"></mu-icon>
    <mu-icon size="36" value="flight_takeoff" color="red"></mu-icon>
    <mu-icon size="36" value="cloud_download" color="orange"></mu-icon>
    <mu-icon size="36" value="info" color="blue"></mu-icon>
  </div>
  <div class="icon-container">
    <mu-icon size="48" value="home"></mu-icon>
    <mu-icon size="48" value="flight_takeoff" color="red"></mu-icon>
    <mu-icon size="48" value="cloud_download" color="orange"></mu-icon>
    <mu-icon size="48" value="info" color="blue"></mu-icon>
  </div>
  <div class="icon-container">
    <mu-icon size="56" value="home"></mu-icon>
    <mu-icon size="56" value="flight_takeoff" color="red"></mu-icon>
    <mu-icon size="56" value="cloud_download" color="orange"></mu-icon>
    <mu-icon size="56" value="info" color="blue"></mu-icon>
  </div>
</div>
<style>
.icon-container {
  display: flex;
  width: 300px;
  justify-content: space-around;
}
.icon-container .mu-icon {
  margin-bottom: 12px;
}
</style>
```
:::

## 配合按钮使用

通过 `left` 和 `right` 来设置图标在此位置时的样式

:::demo
```html
<mu-flex justify-content="center" align-items="center" wrap="wrap" class="icon-flex-wrap">
  <mu-button color="primary">
    ACCEPT
    <mu-icon value="check_circle" right></mu-icon>
  </mu-button>
  <mu-button color="red">
    DECLINE
    <mu-icon value="block" right></mu-icon>
  </mu-button>
  <mu-button color="darkBlack">
    <mu-icon value="remove_circle" left></mu-icon>CANCEL
  </mu-button>
  <mu-button color="orange">
    <mu-icon value="arrow_back" left></mu-icon>BACK
  </mu-button>
  <mu-button color="purple">
    <mu-icon value="build"></mu-icon>
  </mu-button>
  <mu-button color="indigo">
    <mu-icon value="backup"></mu-icon>
  </mu-button>
  <mu-button color="blue" icon>
    <mu-icon value="thumb_up"></mu-icon>
  </mu-button>
  <mu-button color="red" icon>
    <mu-icon value="thumb_down"></mu-icon>
  </mu-button>
</mu-flex>
<style>
.icon-flex-wrap .mu-button {
  margin: 6px 8px;
}
</style>
```
:::

## 对于其它图标库的支持

使用其它图标库时，需要增加 `:` 前缀

:::demo
```html
<mu-flex align-items="center" justify-content="around" style="width: 400px;">
  <mu-icon size="36" value=":mudocs-icon-custom-github"></mu-icon>
  <mu-icon size="36" value=":mudocs-icon-communication-phone" color="red"></mu-icon>
  <mu-icon size="36" value=":mudocs-icon-communication-voicemail" color="orange"></mu-icon>
  <mu-icon size="36" value=":mudocs-icon-action-grade" color="blue"></mu-icon>
  <mu-icon size="36" value=":mudocs-icon-action-home" color="amber"></mu-icon>
  <mu-icon size="36" value=":mudocs-icon-custom-pie" color="green"></mu-icon>
</mu-flex>
```
:::

## Icon Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| value | 图标名称 | String | — | — |
| size | 图标大小 | String,Number | — | 24 |
| left | 图标在左边 | Boolean | — | false |
| right | 图标在右边 | Boolean | — | false |
| color | 图标的颜色 | String | — | — |
