# Ripple

The `mu-ripple` is used to customize the click ripple effect of some elements.

## Example

:::demo
```html
<mu-ripple class="mu-ripple-demo demo-1">
  Click Me
</mu-ripple>
<mu-ripple class="mu-ripple-demo demo-2" color="yellow" :opacity="0.7">
  Click Me
</mu-ripple>
<mu-ripple class="mu-ripple-demo demo-3" color="red" :opacity="0.5">
  Click Me
</mu-ripple>
```
:::


## Import on demand

The components of the tool class are in the `lib/helpers` directory.

```javascript
import Vue from 'vue';
import Helpers from 'muse-ui/lib/Helpers';

Vue.use(Helpers);
```

## Ripple Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| tag  | render element tag name | String | — | div |
| color | ripple color | String | — | — |
| opacity | ripple opacity | Number | 0-1 | 0.3 |

<style lang="less">
.mu-ripple-demo {
  position: relative;
  width: 200px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  background-color: #fff;
  border-radius: 4px;
  &.demo-1 {
    color: #2196f3;
    border: 1px solid #2196f3;
  }
  &.demo-2 {
    background-color: #2196f3;
    color: #fff;
  }
  &.demo-3 {
    background-color: #4caf50;
    color: #fff;
  }
}

</style>
