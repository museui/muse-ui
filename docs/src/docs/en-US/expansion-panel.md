# Expansion panel

`Mu-expansion-panel` contains an element that creates a stream and allows lightweight editing.

## Example

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

## Accordion mode

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

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| expand | whether to expand，support the `.sync` modifiter | Boolean  | — | false |
| zDepth | shadow depth | Number | 0-24 | 2 |

## Expansion Panel Events

| Name | Description | Parameters |
|------|------|-------|
| change | trigger event when expanding/shrinking panel | (expand) |

## Expansion Panel Slots

| Name | Description |
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
