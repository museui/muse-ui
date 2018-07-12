# Button sheet

 `Mu-bottom-sheet` is a panel that slides up from the bottom edge of the screen, rendering a set of features to the user in this way. Presents a set of operations that are simple, clear, and require no additional explanation.

## Example

:::demo
```html
<mu-container>
  <mu-flex justify-content="center">
    <mu-button @click="openBotttomSheet">OPEN Bottom Sheet</mu-button>
  </mu-flex>
  <mu-bottom-sheet :open.sync="open">
    <mu-list @item-click="closeBottomSheet">
      <mu-sub-header>Select One</mu-sub-header>
      <mu-list-item button>
        <mu-list-item-action>
          <mu-icon value="grade" color="orange"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>Star</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-action>
          <mu-icon value="inbox" color="blue"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>Inbox</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-action>
          <mu-icon value="chat" color="green"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>Chat</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-action>
          <mu-icon value="email" color="cyan"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>Email</mu-list-item-title>
      </mu-list-item>
    </mu-list>
  </mu-bottom-sheet>
</mu-container>
<script>
export default {
  data () {
    return {
      open: false
    }
  },
  methods: {
    closeBottomSheet () {
      this.open = false;
    },
    openBotttomSheet () {
      this.open = true;
    }
  }
}
</script>
```
:::

## Bottom Sheet Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| open | whether is open | Boolean | — | false |
| overlay | whether there is a overlayer | Boolean | — | true |
| overlay-close | click whether the overlayer can be closed | Boolean | — | true |
| overlay-opacity | overlayer opacity | Boolean | — | 0.4 |
| overlay-color | overlayer color | String | — | #000 |
| esc-press-close | whether to close when pressing the `ESC` key | Boolean | — | true |
| append-body | whether the popup layer is added to the body element and used internally | Boolean | — | true |

## Bottom Sheet Events

| Name | Description | Parameters |
|------|------|-------|
| close | when you click on the overlayer or press esc, trigger when you need to close the shell | (reason) reason for closing  <br/> `overlay` : Click on the overayer <br/> `esc` press the `esc` key |

<script>
export default {
  data () {
    return {
      open: false
    }
  },
  methods: {
    closeBottomSheet () {
      this.open = false;
    },
    openBotttomSheet () {
      this.open = true;
    }
  }
}
</script>
