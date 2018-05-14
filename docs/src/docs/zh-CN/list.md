# 列表

`mu-list` 列表作为一个单一的连续元素来以垂直排列的方式显示多行条目。

## 示例

`mu-list` 需和 `mu-list-item` 组件配合使用，通过不同的组件来组成列表项的各个部分。下面就是一个只有图标和标题的示例：

:::demo
```html
<mu-paper :z-depth="1" class="demo-list-wrap">
  <mu-appbar color="teal">
    <mu-button icon slot="left">
      <mu-icon value="menu"></mu-icon>
    </mu-button>
    Menus
  </mu-appbar>
  <mu-list>
    <mu-list-item button :ripple="false">
      <mu-list-item-action>
        <mu-icon value="inbox"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>
          Inbox
        </mu-list-item-title>
      </mu-list-item-content>
    </mu-list-item>
    <mu-list-item button :ripple="false">
      <mu-list-item-action>
        <mu-icon value="grade"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>
          Starred
        </mu-list-item-title>
      </mu-list-item-content>
    </mu-list-item>
    <mu-list-item button :ripple="false">
      <mu-list-item-action>
        <mu-icon value="send"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>
          Sent mail
        </mu-list-item-title>
      </mu-list-item-content>
    </mu-list-item>
    <mu-list-item button :ripple="false">
      <mu-list-item-action>
        <mu-icon value="drafts"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>
          Drafts
        </mu-list-item-title>
      </mu-list-item-content>
    </mu-list-item>
  </mu-list>
  <mu-divider></mu-divider>
  <mu-list>
    <mu-list-item button :ripple="false">
      <mu-list-item-content>
        <mu-list-item-title>All mail</mu-list-item-title>
      </mu-list-item-content>
      <mu-list-item-action>
        <mu-icon value="info"></mu-icon>
      </mu-list-item-action>
    </mu-list-item>
    <mu-list-item button :ripple="false">
      <mu-list-item-content>
        <mu-list-item-title>Trash</mu-list-item-title>
      </mu-list-item-content>
      <mu-list-item-action>
        <mu-icon value="info"></mu-icon>
      </mu-list-item-action>
    </mu-list-item>
    <mu-list-item button :ripple="false">
      <mu-list-item-content>
        <mu-list-item-title>Spam</mu-list-item-title>
      </mu-list-item-content>
      <mu-list-item-action>
        <mu-icon value="info"></mu-icon>
      </mu-list-item-action>
    </mu-list-item>
    <mu-list-item button :ripple="false">
      <mu-list-item-content>
        <mu-list-item-title>Follow up</mu-list-item-title>
      </mu-list-item-content>
      <mu-list-item-action>
        <mu-icon value="info"></mu-icon>
      </mu-list-item-action>
    </mu-list-item>
  </mu-list>
</mu-paper>
<style>
.demo-list-wrap {
  width: 100%;
  max-width: 360px;
}
</style>
```
:::

## Avatar 和 Icon 的列表

当 `mu-list-item` 内容中包含 `mu-avatar` 组件时需要在 `mu-list-item` 和 `mu-list-item-action` 组件中设定 `avatar` 参数。

:::demo
```html
<mu-paper :z-depth="1" class="demo-list-wrap">
  <mu-appbar color="lightBlue400">
    <mu-button icon slot="left">
      <mu-icon value="menu"></mu-icon>
    </mu-button>
    Contacts
    <mu-button icon slot="right">
      <mu-icon value="search"></mu-icon>
    </mu-button>
  </mu-appbar>
  <mu-list>
    <mu-sub-header>Today</mu-sub-header>
    <mu-list-item avatar button :ripple="false">
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
    <mu-list-item avatar button :ripple="false">
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
    <mu-list-item avatar button :ripple="false">
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
    <mu-list-item avatar button :ripple="false">
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
    <mu-list-item avatar button :ripple="false">
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
    <mu-list-item avatar button :ripple="false">
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
    <mu-list-item avatar button :ripple="false">
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
<style>
.demo-list-wrap {
  width: 100%;
  max-width: 360px;
}
</style>
```
:::

## 联系人列表

:::demo
```html
<mu-paper :z-depth="1" class="demo-list-wrap">
  <mu-appbar color="secondary">
    <mu-button icon slot="left">
      <mu-icon value="menu"></mu-icon>
    </mu-button>
    Contacts
    <mu-button icon slot="right">
      <mu-icon value="search"></mu-icon>
    </mu-button>
  </mu-appbar>
  <mu-list>
    <mu-list-item avatar button :ripple="false">
      <mu-list-item-action>
        <mu-icon value="star" color="pink"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>Mike Li</mu-list-item-title>
      </mu-list-item-content>
      <mu-list-item-action avatar>
        <mu-avatar>
          <img src="../../assets/images/avatar1.jpg">
        </mu-avatar>
      </mu-list-item-action>
    </mu-list-item>
    <mu-list-item avatar button :ripple="false">
      <mu-list-item-action></mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>Maco Mai</mu-list-item-title>
      </mu-list-item-content>
      <mu-list-item-action avatar>
        <mu-avatar>
          <img src="../../assets/images/avatar2.jpg">
        </mu-avatar>
      </mu-list-item-action>
    </mu-list-item>
    <mu-list-item avatar button :ripple="false">
      <mu-list-item-action></mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>Alex Qin</mu-list-item-title>
      </mu-list-item-content>
      <mu-list-item-action avatar>
        <mu-avatar>
          <img src="../../assets/images/avatar3.jpg">
        </mu-avatar>
      </mu-list-item-action>
    </mu-list-item>
    <mu-list-item avatar button :ripple="false">
      <mu-list-item-action></mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>Allen Qun</mu-list-item-title>
      </mu-list-item-content>
      <mu-list-item-action avatar>
        <mu-avatar>
          <img src="../../assets/images/avatar4.jpg">
        </mu-avatar>
      </mu-list-item-action>
    </mu-list-item>
  </mu-list>
</mu-paper>
<style>
.demo-list-wrap {
  width: 100%;
  max-width: 360px;
}
</style>
```
:::

## 两行内容和副标题

`textline` 参数用于改变列表项的高度，有 `two-line` 和 `three-line` 可选。

:::demo
```html
<mu-paper :z-depth="1" class="demo-list-wrap">
  <mu-appbar color="lightBlue">
    <mu-button icon slot="left">
      <mu-icon value="menu"></mu-icon>
    </mu-button>
    Files
    <mu-button icon slot="right">
      <mu-icon value="view_quilt"></mu-icon>
    </mu-button>
  </mu-appbar>
  <mu-list textline="two-line">
    <mu-sub-header inset>Folders</mu-sub-header>
    <mu-list-item avatar button :ripple="false">
      <mu-list-item-action avatar>
        <mu-avatar>
          <mu-icon value="folder"></mu-icon>
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>Photos</mu-list-item-title>
        <mu-list-item-sub-title>Jan 9, 2014</mu-list-item-sub-title>
      </mu-list-item-content>
      <mu-list-item-action>
        <mu-button icon>
          <mu-icon value="info"></mu-icon>
        </mu-button>
      </mu-list-item-action>
    </mu-list-item>
    <mu-list-item avatar button :ripple="false">
      <mu-list-item-action avatar>
        <mu-avatar>
          <mu-icon value="folder"></mu-icon>
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>Recipes</mu-list-item-title>
        <mu-list-item-sub-title>Jan 17, 2014</mu-list-item-sub-title>
      </mu-list-item-content>
      <mu-list-item-action>
        <mu-button icon>
          <mu-icon value="info"></mu-icon>
        </mu-button>
      </mu-list-item-action>
    </mu-list-item>
    <mu-list-item avatar button :ripple="false">
      <mu-list-item-action avatar>
        <mu-avatar>
          <mu-icon value="folder"></mu-icon>
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>Work</mu-list-item-title>
        <mu-list-item-sub-title>Jan 28, 2014</mu-list-item-sub-title>
      </mu-list-item-content>
      <mu-list-item-action>
        <mu-button icon>
          <mu-icon value="info"></mu-icon>
        </mu-button>
      </mu-list-item-action>
    </mu-list-item>
  </mu-list>
  <mu-divider inset></mu-divider>
  <mu-list textline="two-line">
    <mu-sub-header inset>Files</mu-sub-header>
    <mu-list-item avatar button :ripple="false">
      <mu-list-item-action avatar>
        <mu-avatar color="blue">
          <mu-icon value="assignment"></mu-icon>
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>Vacation itinerary</mu-list-item-title>
        <mu-list-item-sub-title>Jan 20, 2014</mu-list-item-sub-title>
      </mu-list-item-content>
      <mu-list-item-action>
        <mu-button icon>
          <mu-icon value="info"></mu-icon>
        </mu-button>
      </mu-list-item-action>
    </mu-list-item>
    <mu-list-item avatar button :ripple="false">
      <mu-list-item-action avatar>
        <mu-avatar color="yellow600">
          <mu-icon value="insert_chart"></mu-icon>
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>Kitchen remodel</mu-list-item-title>
        <mu-list-item-sub-title>Jan 10, 2014</mu-list-item-sub-title>
      </mu-list-item-content>
      <mu-list-item-action>
        <mu-button icon>
          <mu-icon value="info"></mu-icon>
        </mu-button>
      </mu-list-item-action>
    </mu-list-item>
  </mu-list>
</mu-paper>
```
:::

## 三行内容

:::demo
```html
<mu-paper :z-depth="1" class="demo-list-wrap">
  <mu-appbar color="cyan">
    <mu-button icon slot="left">
      <mu-icon value="menu"></mu-icon>
    </mu-button>
    Inbox
    <mu-button icon slot="right">
      <mu-icon value="search"></mu-icon>
    </mu-button>
  </mu-appbar>
  <mu-list textline="three-line">
    <mu-sub-header>今天</mu-sub-header>
    <mu-list-item avatar>
      <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
        <mu-menu-item title="回复" />
        <mu-menu-item title="标记" />
        <mu-menu-item title="删除" />
      </mu-icon-menu>
      <mu-list-item-action avatar>
        <mu-avatar>
          <img src="../../assets/images/avatar1.jpg">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>这个周末一起吃饭么?</mu-list-item-title>
        <mu-list-item-sub-title>
          <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
        </mu-list-item-sub-title>
      </mu-list-item-content>
    </mu-list-item>
    <mu-divider inset/>
    <mu-list-item title="Alex Qin">
      <mu-avatar src="/images/avatar2.jpg" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">看电影啊</span> <br/>
        我们去看电影，最近有部烂片上映，又有吐槽的了
      </span>
      <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
        <mu-menu-item title="回复" />
        <mu-menu-item title="标记" />
        <mu-menu-item title="删除" />
      </mu-icon-menu>
    </mu-list-item>
    <mu-divider inset/>
    <mu-list-item title="LOL">
      <mu-avatar src="/images/avatar3.jpg" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">去打游戏啊</span><br/>
        周末一起 LOL
      </span>
      <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
        <mu-menu-item title="回复" />
        <mu-menu-item title="标记" />
        <mu-menu-item title="删除" />
      </mu-icon-menu>
    </mu-list-item>
    <mu-divider inset/>
    <mu-list-item title="Myron Liu">
      <mu-avatar src="/images/uicon.jpg" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">哇去</span><br/> 实在编不下去，这就是个demo
      </span>
      <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
        <mu-menu-item title="回复" />
        <mu-menu-item title="标记" />
        <mu-menu-item title="删除" />
      </mu-icon-menu>
    </mu-list-item>
  </mu-list>
</mu-paper>
```
:::

<style>
.demo-list-wrap {
  width: 100%;
  max-width: 360px;
  overflow: hidden;
}

ul.mu-list {
  padding: 8px 0;
  margin-bottom: 0;
}
</style>
