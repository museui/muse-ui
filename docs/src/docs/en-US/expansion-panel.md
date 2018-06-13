# 扩展面板

`mu-expansion-panel` 包含创建流和允许轻量级编辑的一个元素。

## 示例

:::demo
```html
<mu-container>
  <mu-expansion-panel>
    <div slot="header">Panel 1</div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    <mu-button slot="action" flat>Cancel</mu-button>
    <mu-button slot="action" flat color="primary">Save</mu-button>
  </mu-expansion-panel>
  <mu-expansion-panel>
    <div slot="header">Panel 2</div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
  </mu-expansion-panel>
  <mu-expansion-panel>
    <div slot="header">Panel 3</div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
  </mu-expansion-panel>
</mu-container>
```
:::

## 手风琴模式

:::demo
```html
<mu-container>
  <mu-expansion-panel :expand="panel === 'panel1'" @change="toggle('panel1')">
    <div slot="header">Panel 1</div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
  </mu-expansion-panel>
  <mu-expansion-panel :expand="panel === 'panel2'" @change="toggle('panel2')">
    <div slot="header">Panel 2</div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
  </mu-expansion-panel>
  <mu-expansion-panel :expand="panel === 'panel3'" @change="toggle('panel3')">
    <div slot="header">Panel 3</div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
  </mu-expansion-panel>
</mu-container>
<script>
export default {
  data () {
    return {
      panel: ''
    }
  },
  methods: {
    toggle (panel) {
      this.panel = panel === this.panel ? '' : panel;
    }
  }
};
</script>
```
:::


## Expansion Panel Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| expand | 是否展开，支持`.sync` 修饰符 | Boolean  | — | false |
| zDepth | 阴影深度 | Number | 0-24 | 2 |

## Expansion Panel Events

| 名称 | 介绍 | 回调参数 |
|------|------|-------|
| change | 展开/收缩面板时触发事件 | (expand) |

## Expansion Panel Slots

| 名称 | 介绍 |
|-----|------|
| header | 面板头部插槽 |
| action | 面板操作按钮插槽 |
| default | 面板内容插槽 |

<script>
export default {
  data () {
    return {
      panel: ''
    }
  },
  methods: {
    toggle (panel) {
      this.panel = panel === this.panel ? '' : panel;
    }
  }
};
</script>
