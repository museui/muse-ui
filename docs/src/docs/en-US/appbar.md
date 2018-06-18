# App Bar

The `mu-appbar` component is generally placed at the top of the page as a container for page titles, logos, menus, and action buttons.

## Example

:::demo
```html
<mu-appbar style="width: 100%;" title="Title"></mu-appbar>
```
:::

## Use with button

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


## Use with menu

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

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| color | component color | String | — | — |
| textColor | font color | String | — | — |
| title | component title, defined default slot | String | — | — |
| z-depth | shadow depth | Number | 0-24 | 4 |

## AppBar Slots

| Name | Description |
|------|------|
| left | content of component's left side |
| right | content of component's right side |
| default | the content in the middle of the component overrides the *title* property |
