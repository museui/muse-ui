# 分隔线

`mu-divider` 主要用于管理和分隔列表和页面布局内的内容。

## 示例

:::demo
```html
<mu-container>
  <mu-paper :z-depth="2">
    <mu-text-field placeholder="Input One" solo full-width class="demo-divider-form"></mu-text-field>
    <mu-divider></mu-divider>
    <mu-text-field placeholder="Input Two" solo full-width class="demo-divider-form"></mu-text-field>
    <mu-divider></mu-divider>
    <mu-text-field placeholder="Input Three" solo full-width class="demo-divider-form"></mu-text-field>
    <mu-divider></mu-divider>
    <mu-text-field placeholder="Input Four" solo full-width class="demo-divider-form"></mu-text-field>
    <mu-divider></mu-divider>
    <mu-text-field placeholder="Input Five" solo full-width class="demo-divider-form"></mu-text-field>
  </mu-paper>
</mu-container>
<style lang="less">
.demo-divider-form {
  padding: 0 16px;
}
</style>
```
:::

## 分隔列表

通过设置 `shallow-inset` 和 `inset` 改变分隔线的缩进距离

:::demo
```html
<mu-container>
  <mu-row gutter>
    <mu-col span="6">
      <mu-paper :z-depth="2">
        <mu-list>
          <mu-list-item>
            <mu-list-item-content>
              <mu-list-item-title>List Item 1</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-divider shallow-inset></mu-divider>
          <mu-list-item>
            <mu-list-item-content>
              <mu-list-item-title>List Item 2</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-divider shallow-inset></mu-divider>
          <mu-list-item>
            <mu-list-item-content>
              <mu-list-item-title>List Item 3</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-paper>
    </mu-col>
    <mu-col span="6">
      <mu-paper :z-depth="2">
        <mu-list>
          <mu-list-item>
            <mu-list-item-action>
              <mu-icon value="settings"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>Setting</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item>
            <mu-list-item-action>
              <mu-icon value="help_outline"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>Help</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-divider></mu-divider>
          <mu-list-item>
            <mu-list-item-action>
              <mu-icon value="power_settings_new"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>Exit</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-paper>
    </mu-col>
  </mu-row>
</mu-container>
```
:::

## Divider Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| inset | 设置为true，将 `margin-left` 设为 `72px` | Boolean | — | false |
| shallow-inset | 设置为true，将 `margin-left` 设为 `16px` | Boolean | — | false |

<style lang="less">
.demo-divider-form {
  padding: 0 16px;
}
.divider-list-wrap {
  margin: 0 auto;
}
</style>
