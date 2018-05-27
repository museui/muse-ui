## 抽屉导航

`mu-drawer` 从侧边弹出的对话框。

## 示例

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
      <mu-list-item button>
        <mu-list-item-title @click="open = false">Close</mu-list-item-title>
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

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| open `.sync` | 是否打开 | Boolean | — | false |
| right | 是否从右侧滑出 | Boolean | — | false |
| docked | 是否固定 drawer， 设为 `true`， 将不会显示遮盖层，也不会触发 `close` 事件 | Boolean | — | false |
| width | drawer 宽度 | String/Number | — | — |
| z-depth | 阴影的深度 | Number | 0 — 5 | 2 |

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
