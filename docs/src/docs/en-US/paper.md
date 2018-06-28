# Paper

The `mu-paper` is a container with shadow effects.

## Example

Set `z-depth` to adjust the depth of the shadow.

:::demo
```html
<mu-container>
  <mu-paper class="demo-paper" :z-depth="1"></mu-paper>
  <mu-paper class="demo-paper" :z-depth="2"></mu-paper>
  <mu-paper class="demo-paper" :z-depth="3"></mu-paper>
  <mu-paper class="demo-paper" :z-depth="4"></mu-paper>
  <mu-paper class="demo-paper" :z-depth="5"></mu-paper>
</mu-container>
```
:::


## Circular

:::demo
```html
<mu-container>
  <mu-paper class="demo-paper" circle :z-depth="1"></mu-paper>
  <mu-paper class="demo-paper" circle :z-depth="2"></mu-paper>
  <mu-paper class="demo-paper" circle :z-depth="3"></mu-paper>
  <mu-paper class="demo-paper" circle :z-depth="4"></mu-paper>
  <mu-paper class="demo-paper" circle :z-depth="5"></mu-paper>
</mu-container>
```
:::

## Paper Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| z-depth | the degree of shadow of the paper | Number | 0—24 | — |
| round | rounded paper | Boolean | — | false |
| circle | circular paper | Boolean | — | false |

<style lang="css">
.demo-paper {
  display: inline-block;
  height: 100px;
  width: 100px;
  margin: 20px;
  text-align: center;
}
</style>
