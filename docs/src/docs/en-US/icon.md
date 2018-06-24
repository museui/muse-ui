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
# Icon

`Muse-ui` recommends using Google's Material font icon Library, and for a list of all available icons, please visit the official [Material Icons] (https://material.io/icons/) page.

## Example

Use the `value` attribute to define the icon, and the `Size` property defines the size.

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

## Use with button

Use `left` and `right` to set the style of the icon at this location.

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

## Support for other icon libraries

Additional `:` prefix required when using other icon libraries.

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

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| value | icon name | String | — | — |
| size | icon size | String,Number | — | 24 |
| left | icon on the left | Boolean | — | false |
| right | icon on the right | Boolean | — | false |
| color | icon color | String | — | — |
