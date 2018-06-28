# Progress bar

The `mu-linear-progress` and `mu-circular-progress` are used to show the user the data loading progress.

## Example

:::demo
```html
<mu-container>
  <mu-flex class="demo-linear-progress">
    <mu-linear-progress></mu-linear-progress>
  </mu-flex>
  <mu-flex class="demo-linear-progress">
    <mu-linear-progress color="secondary"></mu-linear-progress>
  </mu-flex>
  <mu-flex class="demo-linear-progress">
    <mu-linear-progress :value="linear" mode="determinate" color="green"></mu-linear-progress>
  </mu-flex>
</mu-container>
<script>
export default {
  data () {
    return {
      linear: 10
    }
  },
  created () {
    this.timer = setInterval(() => {
      this.linear += 10;
      if (this.linear > 100) this.linear = 0;
    }, 1000)
  },
  beforeDestroy () {
    if (this.timer) clearInterval(this.timer);
  }
}
</script>

<style>
.demo-linear-progress {
  margin: 16px 0;
}
</style>
```
:::

## Different colors and sizes

:::demo
```html
<mu-container>
  <mu-flex class="demo-linear-progress">
    <mu-linear-progress mode="determinate" :value="30"></mu-linear-progress>
  </mu-flex>
  <mu-flex class="demo-linear-progress">
    <mu-linear-progress mode="determinate" :value="60" :size="10" color="secondary"></mu-linear-progress>
  </mu-flex>
  <mu-flex class="demo-linear-progress">
    <mu-linear-progress mode="determinate" :value="90"  :size="15" color="green"></mu-linear-progress>
  </mu-flex>
</mu-container>
<style>
.demo-linear-progress {
  margin: 16px 0;
}
</style>
```
:::

## Circular progress bar

:::demo
```html
<mu-circular-progress class="demo-circular-progress" :size="36"></mu-circular-progress>
<mu-circular-progress class="demo-circular-progress" color="secondary" :stroke-width="5" :size="48"></mu-circular-progress>
<mu-circular-progress class="demo-circular-progress" color="warning" :stroke-width="7" :size="56"></mu-circular-progress>
```
:::

## Fixed value ring

:::demo
```html
<mu-circular-progress class="demo-circular-progress" mode="determinate" :value="40" :size="56"></mu-circular-progress>
<mu-circular-progress class="demo-circular-progress" mode="determinate" :value="60" color="secondary" :stroke-width="5" :size="72"></mu-circular-progress>
<mu-circular-progress class="demo-circular-progress" mode="determinate" :value="80" color="warning" :stroke-width="7" :size="96"></mu-circular-progress>
```
:::

## Linear Progress Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| mode | display mode, indeterminate uncertain progress mode, then value, min, max is invalid, determinate need to change the value to change the progress of the display | String | 
| max | maximum value | Number | — | 100 |
| min | minimum value | Number | — | 0 |
| value | progress display value | Number | — | — |
| size | progress bar height | Number | — | — |
| color | color | String | — | — |

## Circular Progress Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| mode | display mode, indeterminate uncertain progress mode, then value, min, max is invalid, determinate need to change the value to change the progress of the display | String | indeterminate/determinate | indeterminate |
| max | maximum value | Number | — | 100 |
| min | minimum value | Number | — | 0 |
| value | progress display value | Number | — | — |
| size | ring size | Number | — | — |
| stroke-width | ring width | Number | — | — |
| color | color | String | — | — |

<script>
export default {
  data () {
    return {
      linear: 10
    }
  },
  created () {
    this.timer = setInterval(() => {
      this.linear += 10;
      if (this.linear > 100) this.linear = 0;
    }, 1000)
  },
  beforeDestroy () {
    if (this.timer) clearInterval(this.timer);
  }
}
</script>

<style>
.demo-linear-progress {
  margin: 16px 0;
}
.demo-circular-progress {
  margin: 0 16px;
}
</style>
