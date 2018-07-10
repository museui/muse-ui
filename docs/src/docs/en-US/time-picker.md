# TimePicker

The `mu-time-picker` for time selection.

:::demo
```html
<mu-container>
  <mu-flex>
    Display time:
    <mu-switch class="demo-picker-form" v-model="display"></mu-switch>
  </mu-flex>
  <mu-flex>
    Horizontal screen display:
    <mu-checkbox class="demo-picker-form" v-model="landscape" label="landscape"></mu-checkbox>
  </mu-flex>
  <mu-flex>
    Time type:
    <mu-radio class="demo-picker-form" v-model="type" value="ampm" label="ampm"></mu-radio>
    <mu-radio class="demo-picker-form" v-model="type" value="24hr" label="24hr"></mu-radio>
  </mu-flex>
  <mu-flex>
    Selection mode:
    <mu-radio class="demo-picker-form" v-model="viewType" value="clock" label="clock"></mu-radio>
    <mu-radio class="demo-picker-form" v-model="viewType" value="list" label="list"></mu-radio>
  </mu-flex>
  <mu-flex justify-content="between" align-items="end" wrap="wrap">
    <mu-paper :z-depth="1">
      <mu-time-picker :no-display="!display" :view-type="viewType" :time.sync="time" :format="type" :landscape="landscape"></mu-time-picker>
    </mu-paper>
  </mu-flex>
</mu-container>
<script>
export default {
  data () {
    return {
      time: undefined,
      landscape: false,
      display: true,
      type: 'ampm',
      viewType: 'clock'
    };
  }
}
</script>
<style>
.demo-picker-form {
  margin: 0 16px 16px;
}
</style>
```
:::

## Time Picker

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| color | time picker color | String | — | — |
| display-color | time display area background color | String | - | - |
| time | selected time, support `.sync` modifier | Date | — | new Date() |
| format | date mode | String | ampm/24hr | ampm |
| view-type | time selection mode | String | clock/list| clock |
| no-display | whether the time display section does not exist  | Boolean | — | false |
| landscape | whether horizontal screen display | Function | — | — |

## Date Picker Events

| Event Name | Description | Parameters |
|------|-----|--------|
| change | trigger event when the selected date changes | (time, mode, finished) |


<script>
export default {
  data () {
    return {
      time: undefined,
      landscape: false,
      display: true,
      type: 'ampm',
      viewType: 'clock'
    };
  }
}
</script>

<style>
.demo-picker-form {
  margin: 0 16px 16px;
}
</style>
