# Popup box

The `mu-popover` is used to display the popup box, which is encapsulated inside the `mu-menu` component.

:::demo
```html
<mu-button ref="button" @click="open = !open">Dropdown</mu-button>
<mu-popover cover :open.sync="open" :trigger="trigger">
   <mu-list>
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
</mu-popover>
<script>
export default {
  data () {
    return {
      open: false,
      trigger: null
    }
  },
  mounted () {
    this.trigger = this.$refs.button.$el;
  }
}
</script>
```
:::

## Popover Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| cover | popup whether to overwrite the trigger element | Boolean | — | false |
| lazy | whether to render elements when open | Boolean | — | — |
| placement | popup position  | String | top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end | bottom-start |
| open | whether to open | Boolean | — | false |
| trigger | trigger element | Element | — | — |

<script>
export default {
  data () {
    return {
      open: false,
      trigger: null
    }
  },
  mounted () {
    this.trigger = this.$refs.button.$el;
  }
}
</script>
