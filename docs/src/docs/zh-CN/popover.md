# 弹出框

`mu-popover` 用于弹出显示，它封装在 `mu-menu` 组件内部。

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

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| cover | 弹出是否覆盖触发元素 | Boolean | — | false |
| lazy | 是否在打开时才渲染元素 | Boolean | — | — |
| placement | 弹出位置  | String | top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end | bottom-start |
| open | 是否打开 | Boolean | — | false |
| trigger | 触发元素 | Element | — | — |

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
