# Menu

The `mu-menu` component shows a menu at the location of the element used to activate it.

## Example

The contents of the menu need to be placed in the `content` slot.

:::demo
```html
<mu-menu cover>
  <mu-button color="primary">dropdown</mu-button>
  <mu-list slot="content">
    <mu-list-item button>
      <mu-list-item-title>Refresh</mu-list-item-title>
    </mu-list-item>
    <mu-list-item button>
      <mu-list-item-title>Send feedback</mu-list-item-title>
    </mu-list-item>
    <mu-list-item button>
      <mu-list-item-title>Settings</mu-list-item-title>
    </mu-list-item>
    <mu-list-item button>
      <mu-list-item-title>Help</mu-list-item-title>
    </mu-list-item>
    <mu-list-item button>
      <mu-list-item-title>Sign out</mu-list-item-title>
    </mu-list-item>
  </mu-list>
</mu-menu>
```
:::

## Hover display

The `open-on-hover` changes the events that triggers the menu display/hide into `mouseenter` and `mouseleave`.

:::demo
```html
<mu-menu placement="top-start" open-on-hover>
    <mu-button color="primary">Open On Hover</mu-button>
    <mu-list slot="content">
      <mu-list-item button>
        <mu-list-item-title>Refresh</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-title>Send feedback</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-title>Settings</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-title>Help</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-title>Sign out</mu-list-item-title>
      </mu-list-item>
    </mu-list>
</mu-menu>
```
:::

## Control display

The `open` parameter controls the display of the menu, using `.sync` for two-way binding.

:::demo
```html
<mu-menu cover placement="bottom-end" :open.sync="open">
    <mu-button icon>
      <mu-icon value="more_vert"></mu-icon>
    </mu-button>
    <mu-list slot="content">
      <mu-list-item button>
        <mu-list-item-title>Refresh</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-title>Send feedback</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-title>Settings</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-title>Help</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-title>Sign out</mu-list-item-title>
      </mu-list-item>
    </mu-list>
</mu-menu>
<mu-button style="margin-left: 8px;" @click="open = !open">Toggle</mu-button>
<script>
export default {
  data () {
    return {
      open: false
    }
  }
};
</script>
```
:::

## Menu Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| cover | whether the popup menu overrides the trigger element | Boolean | — | false |
| placement | popup position  | String | top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end | bottom-start |
| open | whether to open menu | Boolean | — | false |
| open-on-hover | whether to open a menu while hovering | Boolean | — | false |
| popover-class | pop-up menu style | String/Object/Array | — | — |

## Menu Events

| Name | Description | Parameters |
|------|------|-------|
| open | trigger event when menu opens | — |
| close | trigger event when menu close | — |

## Menu Slots

| Name | Description |
|------|------|
| content | menu content slot |
| default | menu trigger slot, accept only one |

<script>
export default {
  data () {
    return {
      open: false
    }
  }
};
</script>
