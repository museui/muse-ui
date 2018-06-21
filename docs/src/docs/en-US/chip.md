# Chip

`Mu-chip` is a small block that renders complex entities, such as contacts or events for a calendar. It can contain a picture, a short string (a string that may be intercepted if necessary), or some other concise information about an entity object.

## Example

:::demo
```html
<mu-container class="demo-chip-wrapper">
  <mu-chip class="demo-chip">
    default chip
  </mu-chip>
  <mu-chip class="demo-chip" @delete="handleClose" delete>
    delete chip
  </mu-chip>
  <mu-chip class="demo-chip" color="red">
    <mu-avatar :size="32">
      <img src="../../assets/images/uicon.jpg">
    </mu-avatar>
    avatar chip
  </mu-chip>
  <mu-chip class="demo-chip" color="green" @delete="handleClose" delete>
    <mu-avatar :size="32">
      <img src="../../assets/images/uicon.jpg">
    </mu-avatar>
    avatar delete chip
  </mu-chip>
  <mu-chip class="demo-chip" color="teal" @delete="handleClose" delete>
    <mu-avatar :size="32" color="blue">
      <mu-icon value="face"></mu-icon>
    </mu-avatar>
    icon avatar chip
  </mu-chip>

  <mu-chip class="demo-chip" color="blue300" @delete="handleClose" delete>
    <mu-avatar text-color="blue300" color="indigo900" :size="32">MB</mu-avatar> custom chip
  </mu-chip>
</mu-container>
<script>
export default {
  methods: {
    handleClose () {
      window.alert('You clicked the delete button.')
    }
  }
}
</script>
<style lang="less">
.demo-chip-wrapper {
  text-align: center;
}
.demo-chip {
  margin: 8px;
  vertical-align: middle;
}
</style>
```
:::

## Chips Array

:::demo
```html
<mu-container  class="demo-chip-wrapper">
  <mu-chip class="demo-chip" v-for="chip, index in chips" :key="chip" :color="chip" @delete="remove(index)" delete>{{chip}}</mu-chip>
  <mu-button color="primary" v-if="chips.length === 0" @click="reset">reset</mu-button>
</mu-container>
<script>
const initChips = ['primary', 'secondary', 'success', 'warning', 'info', 'error'];
export default {
  data () {
    return {
      chips: [...initChips]
    }
  },
  methods: {
    remove (index) {
      this.chips.splice(index, 1);
    },
    reset () {
      this.chips = [...initChips];
    }
  }
}
</script>
<style lang="less">
.demo-chip-wrapper {
  text-align: center;
}
.demo-chip {
  margin: 8px;
  vertical-align: middle;
}
</style>
```
:::


## Chip Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| color | chip color | String | — | — |
| text-color | chip font color | String | — | — |
| selected | selected state | Boolean | — | false |
| delete | display delete icon | Boolean | — | false |

## Chip Events

| Name | Description | Parameters |
|------|------|-------|
| delete | trigger event when clicking delete icon | — |

<script>
const initChips = ['primary', 'secondary', 'success', 'warning', 'info', 'error'];
export default {
  data () {
    return {
      chips: [...initChips]
    }
  },
  methods: {
    handleClose () {
      window.alert('You clicked delete button')
    },
    remove (index) {
      this.chips.splice(index, 1);
    },
    reset () {
      this.chips = [...initChips];
    }
  }
}
</script>
<style lang="less">
.demo-chip-wrapper {
  text-align: center;
}
.demo-chip {
  margin: 8px;
  vertical-align: middle;
}
</style>
