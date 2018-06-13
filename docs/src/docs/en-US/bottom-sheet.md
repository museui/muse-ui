# 底部表单

`mu-bottom-sheet` 是一个从屏幕底部边缘向上滑出的一个面板，使用这种方式向用户呈现一组功能。呈现了简单、清晰、无需额外解释的一组操作。

## 示例

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
```
:::

## Bottom Sheet Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| open | 是否打开 | Boolean | — | false |
| overlay | 是否有遮盖层 | Boolean | — | true |
| overlay-close | 点击遮盖层是否可以关闭 | Boolean | — | true |
| overlay-opacity | 遮盖层的透明度 | Boolean | — | 0.4 |
| overlay-color | 遮盖层的颜色 | String | — | #000 |
| esc-press-close | 按下 `esc` 键是否可以关闭 | Boolean | — | true |
| append-body | 弹出层是否添加到 body 元素后, 内部使用 | Boolean | — | true |

## Bottom Sheet Events

| 名称 | 介绍 | 回调参数 |
|------|------|-------|
| close | 当点击遮盖层或者按 esc 键，需要关闭弹层时触发 | (reason) reason 关闭的原因  <br/> `overlay` : 点击了遮盖层 <br/> `esc` 按下 esc 键 |

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
