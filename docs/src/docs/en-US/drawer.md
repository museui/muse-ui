## Drawer navigation

`Mu-drawer` pop-up dialog box from the side.

## Example

:::demo
```html
<mu-container>
  <mu-flex justify-content="center" align-items="center">
    <mu-switch style="margin-left: 16px" v-model="docked" label="docked"></mu-switch>
    <mu-radio style="margin-left: 16px" v-model="position" value="left" label="left"></mu-radio>
    <mu-radio style="margin-left: 16px" v-model="position" value="right" label="right"></mu-radio>
    <mu-button color="primary" style="margin-left: 16px" @click="open = !open">
      toggle
    </mu-button>
  </mu-flex>
  <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
    <mu-list>
      <mu-list-item button>
        <mu-list-item-title>Menu Item 1</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-title>Menu Item 2</mu-list-item-title>
      </mu-list-item>
      <mu-list-item  @click="open = false" button>
        <mu-list-item-title>Close</mu-list-item-title>
      </mu-list-item>
    </mu-list>
  </mu-drawer>
<mu-container>
<script>
export default {
  data () {
    return {
      docked: false,
      open: false,
      position: 'left'
    }
  }
}
</script>
```
:::

## Drawer Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| open `.sync` | whether to open | Boolean | — | false |
| right | whether to slide from the right | Boolean | — | false |
| docked | whether the drawer is fixed or not, set to `true`, will not show masking layer, nor trigger `close` event | Boolean | — | false |
| width | drawer width | String/Number | — | — |
| z-depth | shadow depth | Number | 0 — 24 | 16 |

<script>
export default {
  data () {
    return {
      docked: false,
      open: false,
      position: 'left'
    }
  }
}
</script>
