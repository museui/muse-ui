# Snackbar

The `mu-snackbar` is a lightweight feedback mechanism for operations, often in the form of a small popup box.

## Example

:::demo
```html
<mu-container>
  <mu-row>
    <mu-col class="demo-snackbar-radio" :key="p" v-for="p in positions" span="6" md="4">
      <mu-radio v-model="normal.position" :value="p" :label="p"></mu-radio>
    </mu-col>
  </mu-row>
  <mu-flex wrap="wrap">
    <mu-text-field v-model="normal.message" label="Message" label-float></mu-text-field>
    <mu-text-field v-model.number="normal.timeout" label="Timeout" type="number" label-float></mu-text-field>
  </mu-flex>
  <mu-button full-width color="primary" @click="openNormalSnackbar">show Snackbar</mu-button>
  <mu-snackbar :position="normal.position" :open.sync="normal.open">
    {{normal.message}}
    <mu-button flat slot="action" color="secondary" @click="normal.open = false">Close</mu-button>
  </mu-snackbar>
</mu-container>
<script>
export default {
  data () {
    return {
      positions: ['top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-end'],
      normal: {
        position: 'bottom',
        message: 'Hello World, Snackbar !',
        open: false,
        timeout: 3000
      }
    };
  },
  methods: {
    openNormalSnackbar () {
      if (this.normal.timer) clearTimeout(this.normal.timer);
      this.normal.open = true;
      this.normal.timer = setTimeout(() => {
        this.normal.open = false;
      }, this.normal.timeout);
    }
  }
};
</script>
<style>
.demo-snackbar-radio {
  margin: 8px 0;
}
</style>

```
:::

## Different colors and icons

You can choose different colors of `mu-snackbar` to display different types of prompt information.

:::demo
```html
<mu-container>
  <mu-row>
    <mu-col class="demo-snackbar-radio" :key="c" v-for="c in colors" span="6" md="3">
      <mu-radio v-model="color.color" :color="color.color" :value="c" :label="c"></mu-radio>
    </mu-col>
  </mu-row>
  <mu-flex wrap="wrap">
    <mu-text-field v-model="color.message" label="Message" label-float></mu-text-field>
    <mu-text-field v-model.number="color.timeout" label="Timeout" type="number" label-float></mu-text-field>
  </mu-flex>
  <mu-button full-width color="primary" @click="openColorSnackbar">show Snackbar</mu-button>
  <mu-snackbar :color="color.color" :open.sync="color.open">
    <mu-icon left :value="icon"></mu-icon>
    {{color.message}}
    <mu-button flat slot="action" color="#fff" @click="color.open = false">Close</mu-button>
  </mu-snackbar>
</mu-container>
<script>
export default {
  data () {
    return {
      colors: ['success', 'info', 'error', 'warning'],
      color: {
        color: 'success',
        message: 'Hello World, Snackbar !',
        open: false,
        timeout: 3000
      }
    };
  },
  computed: {
    icon () {
      return {
        success: 'check_circle',
        info: 'info',
        warning: 'priority_high',
        error: 'warning'
      }[this.color.color]
    }
  },
  methods: {
    openColorSnackbar () {
      if (this.color.timer) clearTimeout(this.color.timer);
      this.color.open = true;
      this.color.timer = setTimeout(() => {
        this.color.open = false;
      }, this.color.timeout);
    }
  }
};
</script>
<style>
.demo-snackbar-radio {
  margin: 8px 0;
}
</style>

```
:::

## Snackbar Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| color | color | String | — | — |
| text-color | text color | String | — | — |
| message | message | String | — | — |
| position | popup position | String | top-start / top / top-end / bottom-start / bottom / bottom-end | bottom |
| open | whether to open | Boolean | — | false |

## Snackbar Slots

| Attribute | Description |
|------|-----|
| action | slot to place action button |
| default | place text messages and icons |

<script>
export default {
  data () {
    return {
      positions: ['top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-end'],
      colors: ['success', 'info', 'error', 'warning'],
      normal: {
        position: 'bottom',
        message: 'Hello World, Snackbar !',
        open: false,
        timeout: 3000
      },
      color: {
        color: 'success',
        message: 'Hello World, Snackbar !',
        open: false,
        timeout: 3000
      }
    };
  },
  computed: {
    icon () {
      return {
        success: 'check_circle',
        info: 'info',
        warning: 'priority_high',
        error: 'warning'
      }[this.color.color]
    }
  },
  methods: {
    openNormalSnackbar () {
      if (this.normal.timer) clearTimeout(this.normal.timer);
      this.normal.open = true;
      this.normal.timer = setTimeout(() => {
        this.normal.open = false;
      }, this.normal.timeout);
    },
    openColorSnackbar () {
      if (this.color.timer) clearTimeout(this.color.timer);
      this.color.open = true;
      this.color.timer = setTimeout(() => {
        this.color.open = false;
      }, this.color.timeout);
    }
  }
};
</script>
<style>
.demo-snackbar-radio {
  margin: 8px 0;
}
</style>
