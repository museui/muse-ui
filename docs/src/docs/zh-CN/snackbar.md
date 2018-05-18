# 小吃吧

`mu-snackbar` 是一种针对操作的轻量级反馈机制，常以一个小的弹出框的形式。

## 示例

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

## 不同颜色和图标

可以选择不同的颜色的 `mu-snackbar`，以便于展示不同类型的提示信息。

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

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| color | 颜色 | String | — | — |
| text-color | 文本颜色 | String | — | — |
| message | 信息文本 | String | — | — |
| position | 弹出的位置 | String | top-start / top / top-end / bottom-start / bottom / bottom-end | bottom |
| open | 是否打开 | Boolean | — | false |

## Snackbar Slots

| 名称 | 介绍 |
|------|-----|
| action | 放置操作按钮的插槽 |
| default | 放置文本信息和图标 |

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
