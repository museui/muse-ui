# Subtitle

The `mu-sub-header` is used to separate the parts of the list.

## Example

:::demo
```html
<mu-container>
  <mu-row>
    <mu-col span="6" offset="3">
      <mu-paper :z-depth="2">
        <mu-list>
          <mu-sub-header>Today</mu-sub-header>
          <mu-list-item avatar>
            <mu-list-item-action avatar>
              <mu-avatar>
                <img src="../../assets/images/avatar1.jpg">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>Mike Li</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <mu-icon value="chat_bubble"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
          <mu-list-item avatar>
            <mu-list-item-action avatar>
              <mu-avatar>
                <img src="../../assets/images/avatar2.jpg">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>Maco Mai</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <mu-icon value="chat_bubble"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
          <mu-list-item avatar>
            <mu-list-item-action avatar>
              <mu-avatar>
                <img src="../../assets/images/avatar3.jpg">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>Alex Qin</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <mu-icon value="chat_bubble"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
          <mu-list-item avatar>
            <mu-list-item-action avatar>
              <mu-avatar>
                <img src="../../assets/images/avatar4.jpg">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>Allen Qun</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <mu-icon value="chat_bubble"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
          <mu-list-item avatar>
            <mu-list-item-action avatar>
              <mu-avatar>
                <img src="../../assets/images/uicon.jpg">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>Myron Liu</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <mu-icon value="chat_bubble"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
        </mu-list>
        <mu-divider></mu-divider>
        <mu-list>
          <mu-sub-header>History</mu-sub-header>
          <mu-list-item avatar>
            <mu-list-item-action avatar>
              <mu-avatar>
                <img src="../../assets/images/avatar5.jpg">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>Gaia Zhou</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <mu-icon value="chat_bubble"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
          <mu-list-item avatar>
            <mu-list-item-action avatar>
              <mu-avatar>
                <img src="../../assets/images/avatar6.jpg">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>Miller Wang</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <mu-icon value="chat_bubble"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
        </mu-list>
      </mu-paper>
    </mu-col>
  </mu-row>
</mu-container>
```
:::

## Sub Header Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| inset | whether to indent inward，set to true to adjust padding-left to 72px | Boolean | — | false |

<style>
ul.mu-list {
  padding: 8px 0;
}
</style>
