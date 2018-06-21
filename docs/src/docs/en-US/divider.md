# Divider

`Mu-divider` is primarily used to manage and separate content within lists and page layouts.

## Example

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

## Separate list

Change the indentation distance of the divider by setting `shallow-inset` and `inset`

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

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| inset | set to true，set `margin-left` to `72px` | Boolean | — | false |
| shallow-inset | set to true，set `margin-left` to `16px` | Boolean | — | false |

<style lang="less">
.demo-divider-form {
  padding: 0 16px;
}
.divider-list-wrap {
  margin: 0 auto;
}
</style>
