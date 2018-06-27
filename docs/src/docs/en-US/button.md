# Button

The `mu-button` button component can be customized with a different color or icon to replace the standard html button.

## Example

:::demo
```html
<mu-container class="button-wrapper">
  <mu-button color="primary">Primary</mu-button>
  <mu-button color="secondary">Secondary</mu-button>
  <mu-button color="success">Success</mu-button>
  <mu-button color="warning">Warning</mu-button>
  <mu-button color="info">Info</mu-button>
  <mu-button color="error">Error</mu-button>
  <mu-button disabled>disabled</mu-button>
<mu-container>
<style lang="less">
.button-wrapper {
  text-align: center;
  .mu-button{
    margin: 8px;
  }
}
</style>
```
:::

## Flat

Used for common functionality and reduced tiering on the screen to make it more readable.

:::demo
```html
<mu-container class="button-wrapper">
  <mu-button flat>Normal</mu-button>
  <mu-button flat color="primary">Primary</mu-button>
  <mu-button flat color="secondary">Secondary</mu-button>
  <mu-button flat color="success">Success</mu-button>
  <mu-button flat color="warning">Warning</mu-button>
  <mu-button flat disabled>disabled</mu-button>
<mu-container>
<style lang="less">
.button-wrapper {
  text-align: center;
  .mu-button{
    margin: 8px;
  }
}
</style>
```
:::

## Icon

The icon can be used as the main content of the button, or it can be displayed with text.

:::demo
```html
<mu-container>
  <div class="button-wrapper">
    <mu-button icon color="primary">
      <mu-icon value="grade"></mu-icon>
    </mu-button>
    <mu-button icon color="secondary">
      <mu-icon value="android"></mu-icon>
    </mu-button>
    <mu-button icon>
      <i class="mudocs-icon-custom-github"></i>
    </mu-button>
    <mu-button icon color="red">
      <mu-icon value="thumb_up"></mu-icon>
    </mu-button>
  </div>
  <div class="button-wrapper">
    <mu-button flat color="primary">
      <mu-icon left value="grade"></mu-icon>
      Star
    </mu-button>
    <mu-button flat color="secondary">
      <mu-icon left value="android"></mu-icon>
      Android
    </mu-button>
    <mu-button flat>
      github
      <mu-icon :size="24" right value=":mudocs-icon-custom-github"></mu-icon>
    </mu-button>
    <mu-button flat color="red">
      thumb
      <mu-icon right value="thumb_up"></mu-icon>
    </mu-button>
  </div>
  <div class="button-wrapper">
    <mu-button color="primary">
      <mu-icon left value="grade"></mu-icon>
      Star
    </mu-button>
    <mu-button color="secondary">
      <mu-icon left value="android"></mu-icon>
      Android
    </mu-button>
    <mu-button>
      delete
      <mu-icon right value="delete"></mu-icon>
    </mu-button>
    <mu-button color="red">
      Send
      <mu-icon right value="send"></mu-icon>
    </mu-button>
  </div>
<mu-container>
<style lang="less">
.button-wrapper {
  text-align: center;
  .mu-button{
    margin: 8px;
    vertical-align: top;
  }
}
</style>
```
:::

## Floating

The floating button is rounded and usually contains an icon.

::: demo
```html
<mu-container class="button-wrapper">
  <mu-button fab small color="primary">
    <mu-icon value="grade"></mu-icon>
  </mu-button>
  <mu-button fab small color="pink">
    <mu-icon value="android"></mu-icon>
  </mu-button>
  <mu-button fab color="indigo">
    <mu-icon value="remove"></mu-icon>
  </mu-button>
  <mu-button fab color="teal">
    <mu-icon value="add"></mu-icon>
  </mu-button>
  <mu-button large fab color="red">
    <mu-icon value="edit"></mu-icon>
  </mu-button>
  <mu-button large fab color="purple">
    <mu-icon value="thumb_up"></mu-icon>
  </mu-button>
<mu-container>
  <style lang="less">
.button-wrapper {
  text-align: center;
  .mu-button{
    margin: 8px;
    vertical-align: middle;
  }
  a.mu-button {
    text-decoration: none;
  }
}
</style>
```
:::

## Different size

Button can be set in defferent size，`small`、`normal`、`large`。

:::demo
```html
<mu-container class="button-wrapper">
  <mu-flex justify-content="center" align-items="center">
    <mu-button small color="primary">small</mu-button>
    <mu-button color="success">normal</mu-button>
    <mu-button large color="red">large</mu-button>
  </mu-flex>
  <mu-flex justify-content="center" align-items="center">
    <mu-button fab small color="primary">
       <mu-icon value="grade"></mu-icon>
    </mu-button>
    <mu-button fab color="success">
      <mu-icon value="edit"></mu-icon>
    </mu-button>
    <mu-button fab large color="red">
      <mu-icon value="thumb_up"></mu-icon>
    </mu-button>
  </mu-flex>
</mu-container>
<style lang="less">
.button-wrapper {
  text-align: center;
  .mu-button{
    margin: 8px;
    vertical-align: middle;
  }
  a.mu-button {
    text-decoration: none;
  }
}
</style>
```
:::

## Fillet button and block button

:::demo
```html
<mu-container class="button-wrapper">
  <mu-flex justify-content="center" align-items="center">
    <mu-button round color="success">Round button</mu-button>
  </mu-flex>
  <mu-flex justify-content="center" align-items="center">
    <mu-button full-width color="primary">full width button</mu-button>
  </mu-flex>
</mu-container>
<style lang="less">
.button-wrapper {
  text-align: center;
  .mu-button{
    margin: 8px;
    vertical-align: middle;
  }
  a.mu-button {
    text-decoration: none;
  }
}
</style>
```
:::

## Button props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| color | button color | String | — | - |
| textColor | text color | String | — | — |
| ripple | whether there is ripple effect | Boolean | — | true |
| fab | floating button | Boolean | — | false |
| flat | flat button | Boolean | — | false |
| icon | icon button | Boolean | — | false |
| small | small button | Boolean | — | false |
| large | large button | Boolean | — | false |
| round | fillet button | Boolean | — | false |
| full-width | block button | Boolean | — | false |
| disabled | disable button | Boolean | — | false |
| type | button type, equals the type property of the button label | String | - | button |
| keyboard-focused | keybroad event to get focus | Boolean | — | false |
| href | Equivalent to the href attribute of the a tag. After setting, it will be rendered as a tag. The default is to use the button tag. | String | — | — |
| to | Indicates the link to the target route. After setup, the component will be rendered as `router-link`, and when clicked, the value of `to` will be immediately passed to `router.push()`, so the value can be a string or an object that describes the target location. | String/Object | - | - |
| tag | When you want the `<router-link>` to be rendered as a tag, such as `<li>`. So we use the `tag prop` class to specify which tag, and it will still listen to clicks and trigger navigation. | String |  - | - |
| active-class | Sets the CSS class name to use when the link is activated. The default value can be configured globally via the construction option `linkactiveclass` of the route. | String |  - | - |
| event | declares an event that can be used to trigger a navigation. Can be a string or an array that contains a string | String/Array | — | click |
| exact |  The "Activate" default class name is based on the **inclusive match** (all contains matches). For example, if the current path starts with `/a`, then `<router-link to=""/a"">` CSS class name will also be set. | Boolean | — | — |
| exact-active-class | Configure the class that should be activated when the link is exactly matched. Note The default values can also be configured globally through the routing constructor option Linkexactactiveclass. | String | — | router-link-exact-active |
| append | When the `append` property is set, the base path is added before the current (relative) path. For example, we navigate from `/a` to a relative path b, if no append is configured, the path is `/b`, and if it is `/a/b` | Boolean | — | false |
| replace | Setting the `replace` property, when clicked, will call `router.replace()` instead of `router.push()`, so the navigation will not leave the history record. | Boolean | — | false |

<style lang="less">
.button-wrapper {
  text-align: center;
  .mu-button{
    margin: 8px;
    vertical-align: middle;
  }
  a.mu-button {
    text-decoration: none;
  }
}
</style>
