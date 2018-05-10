# 时间输入框

`mu-date-input` 用于选择日期。将 `mu-text-field`、`mu-date-picker` 和 `mu-time-picker` 组合在一起形成一个新的组件。

## 示例

:::demo
```html
<mu-container>
  <mu-row gutter>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input label="选择日期" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input label="横屏显示" label-float full-width landscape></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input label="隐藏日期展示" label-float full-width no-display></mu-date-input>
    </mu-col>
  </mu-row>
</mu-container>
```
:::

## 不同的显示方式

改变 `container` 属性改变不同的弹出方式，目前有 `popover`, `dialog`, `bottomSheet` 三种方式

:::demo
```html
<mu-container>
  <mu-row gutter>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input label="popover 显示" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input label="对话框显示" container="dialog" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input label="底部弹出显示" container="bottomSheet" label-float full-width></mu-date-input>
    </mu-col>
  </mu-row>
</mu-container>
```
:::

## 不同的选择模式

:::demo
```html
<mu-container>
  <mu-row gutter>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input label="Select Date" type="date" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input label="Select Time" type="time" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input label="Select Year" type="year" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input label="Select Month" type="month" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input label="Select Date Time" type="dateTime" label-float full-width landscape></mu-date-input>
    </mu-col>
  </mu-row>
</mu-container>
```
:::
