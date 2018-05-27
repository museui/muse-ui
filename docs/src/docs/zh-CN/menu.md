# 菜单

`mu-menu` 组件展示一个菜单在用于激活它的元素的位置上。

## 示例

菜单的内容需要放置在 `content` 插槽中

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

## 悬停显示

`open-on-hover` 将触发菜单显示/隐藏的事件变为 `mouseenter` 和 `mouseleave`

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

## 控制显示

`open` 参数控制菜单的显示，可使用 `.sync` 进行双向绑定。

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

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| cover | 弹出菜单是否覆盖触发元素 | Boolean | — | false |
| placement | 弹出位置  | String | top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end | bottom-start |
| open | 是否打开菜单 | Boolean | — | false |
| open-on-hover | 是否在悬停时打开菜单 | Boolean | — | false |
| popover-class | 弹出菜单的样式 | String/Object/Array | — | — |

## Menu Events

| 名称 | 介绍 | 回调参数 |
|------|------|-------|
| open | 菜单打开时触发事件 | — |
| close | 菜单关闭时触发事件 | — |

## Menu Slots

| 名称 | 介绍 |
|------|------|
| content | 菜单内容插槽 |
| default | 菜单触发器插槽，只接受一个 |

<script>
export default {
  data () {
    return {
      open: false
    }
  }
};
</script>
