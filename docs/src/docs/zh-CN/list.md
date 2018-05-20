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
      <mu-list-item-title>Inbox</mu-list-item-title>
    </mu-list-item>
    <mu-list-item button :ripple="false">
      <mu-list-item-action>
        <mu-icon value="grade"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>Stared</mu-list-item-title>
    </mu-list-item>
    <mu-list-item button :ripple="false">
      <mu-list-item-action>
        <mu-icon value="send"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>Sent mail</mu-list-item-title>
    </mu-list-item>
    <mu-list-item button :ripple="false">
      <mu-list-item-action>
        <mu-icon value="drafts"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>Drafts</mu-list-item-title>
    </mu-list-item>
  </mu-list>
  <mu-divider></mu-divider>
  <mu-list>
    <mu-list-item button :ripple="false">
      <mu-list-item-title>All mail</mu-list-item-title>
      <mu-list-item-action>
        <mu-icon value="info"></mu-icon>
      </mu-list-item-action>
    </mu-list-item>
    <mu-list-item button :ripple="false">
      <mu-list-item-title>Trash</mu-list-item-title>
      <mu-list-item-action>
        <mu-icon value="info"></mu-icon>
      </mu-list-item-action>
    </mu-list-item>
    <mu-list-item button :ripple="false">
      <mu-list-item-title>Spam</mu-list-item-title>
      <mu-list-item-action>
        <mu-icon value="info"></mu-icon>
      </mu-list-item-action>
    </mu-list-item>
    <mu-list-item button :ripple="false">
      <mu-list-item-title>Follow up</mu-list-item-title>
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
      <mu-list-item-action>
        <mu-avatar>
          <img src="../../assets/images/avatar1.jpg">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-title>Mike Li</mu-list-item-title>
      <mu-list-item-action>
        <mu-icon value="chat_bubble"></mu-icon>
      </mu-list-item-action>
    </mu-list-item>
    <mu-list-item avatar button :ripple="false">
      <mu-list-item-action>
        <mu-avatar>
          <img src="../../assets/images/avatar2.jpg">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-title>Maco Mai</mu-list-item-title>
      <mu-list-item-action>
        <mu-icon value="chat_bubble"></mu-icon>
      </mu-list-item-action>
    </mu-list-item>
    <mu-list-item avatar button :ripple="false">
      <mu-list-item-action>
        <mu-avatar>
          <img src="../../assets/images/avatar3.jpg">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-title>Alex Qin</mu-list-item-title>
      <mu-list-item-action>
        <mu-icon value="chat_bubble"></mu-icon>
      </mu-list-item-action>
    </mu-list-item>
    <mu-list-item avatar button :ripple="false">
      <mu-list-item-action>
        <mu-avatar>
          <img src="../../assets/images/avatar4.jpg">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-title>Allen Qun</mu-list-item-title>
      <mu-list-item-action>
        <mu-icon value="chat_bubble"></mu-icon>
      </mu-list-item-action>
    </mu-list-item>
    <mu-list-item avatar button :ripple="false">
      <mu-list-item-action>
        <mu-avatar>
          <img src="../../assets/images/uicon.jpg">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-title>Myron Liu</mu-list-item-title>
      <mu-list-item-action>
        <mu-icon value="chat_bubble"></mu-icon>
      </mu-list-item-action>
    </mu-list-item>
  </mu-list>
  <mu-divider></mu-divider>
  <mu-list>
    <mu-sub-header>History</mu-sub-header>
    <mu-list-item avatar button :ripple="false">
      <mu-list-item-action>
        <mu-avatar>
          <img src="../../assets/images/avatar5.jpg">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-title>Gaia Zhou</mu-list-item-title>
      <mu-list-item-action>
        <mu-icon value="chat_bubble"></mu-icon>
      </mu-list-item-action>
    </mu-list-item>
    <mu-list-item avatar button :ripple="false">
      <mu-list-item-action>
        <mu-avatar>
          <img src="../../assets/images/avatar6.jpg">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-title>Miller Wang</mu-list-item-title>
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
      <mu-list-item-title>Mike Li</mu-list-item-title>
      <mu-list-item-action>
        <mu-avatar>
          <img src="../../assets/images/avatar1.jpg">
        </mu-avatar>
      </mu-list-item-action>
    </mu-list-item>
    <mu-list-item avatar button :ripple="false">
      <mu-list-item-action></mu-list-item-action>
      <mu-list-item-title>Maco Mai</mu-list-item-title>
      <mu-list-item-action>
        <mu-avatar>
          <img src="../../assets/images/avatar2.jpg">
        </mu-avatar>
      </mu-list-item-action>
    </mu-list-item>
    <mu-list-item avatar button :ripple="false">
      <mu-list-item-action></mu-list-item-action>
      <mu-list-item-title>Alex Qin</mu-list-item-title>
      <mu-list-item-action>
        <mu-avatar>
          <img src="../../assets/images/avatar3.jpg">
        </mu-avatar>
      </mu-list-item-action>
    </mu-list-item>
    <mu-list-item avatar button :ripple="false">
      <mu-list-item-action></mu-list-item-action>
      <mu-list-item-title>Allen Qun</mu-list-item-title>
      <mu-list-item-action>
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
      <mu-list-item-action>
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
      <mu-list-item-action>
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
      <mu-list-item-action>
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
      <mu-list-item-action>
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
      <mu-list-item-action>
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
<style>
.demo-list-wrap {
  width: 100%;
  max-width: 360px;
  overflow: hidden;
}
</style>
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
    <mu-list-item avatar :ripple="false" button>
      <mu-list-item-action>
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
    <mu-divider></mu-divider>
    <mu-list-item avatar :ripple="false" button>
      <mu-list-item-action>
        <mu-avatar>
          <img src="../../assets/images/avatar2.jpg">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>Alex Qin</mu-list-item-title>
        <mu-list-item-sub-title>
          <span style="color: rgba(0, 0, 0, .87)">看电影啊</span><br/>
          我们去看电影，最近有部烂片上映，又有吐槽的了
        </mu-list-item-sub-title>
      </mu-list-item-content>
    </mu-list-item>
    <mu-divider></mu-divider>
    <mu-list-item avatar :ripple="false" button>
      <mu-list-item-action>
        <mu-avatar>
          <img src="../../assets/images/avatar3.jpg">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>LOL</mu-list-item-title>
        <mu-list-item-sub-title>
          <span style="color: rgba(0, 0, 0, .87)">去打游戏啊</span><br/>
          周末一起 LOL
        </mu-list-item-sub-title>
      </mu-list-item-content>
    </mu-list-item>
    <mu-divider></mu-divider>
    <mu-list-item avatar :ripple="false" button>
      <mu-list-item-action>
        <mu-avatar>
          <img src="../../assets/images/uicon.jpg">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>LOL</mu-list-item-title>
        <mu-list-item-sub-title>
          <span style="color: rgba(0, 0, 0, .87)">哇去</span><br/>
          实在编不下去，这就是个demo
        </mu-list-item-sub-title>
      </mu-list-item-content>
    </mu-list-item>
  </mu-list>
</mu-paper>
<style>
.demo-list-wrap {
  width: 100%;
  max-width: 360px;
  overflow: hidden;
}
</style>
```
:::

## 后置文字与图表

:::demo
```html
<mu-paper :z-depth="1" class="demo-list-wrap">
  <mu-appbar color="pink">
    <mu-button icon slot="left">
      <mu-icon value="menu"></mu-icon>
    </mu-button>
    Inbox
    <mu-button icon slot="right">
      <mu-icon value="search"></mu-icon>
    </mu-button>
  </mu-appbar>
  <mu-list textline="two-line">
    <mu-list-item avatar :ripple="false" button>
      <mu-list-item-content>
        <mu-list-item-title>Ali Connors</mu-list-item-title>
        <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">Brunch this weekend?</mu-list-item-sub-title>
        <mu-list-item-sub-title>
          I'll be in your neighborhood doing errands this weekend. Do you want to hang out?
        </mu-list-item-sub-title>
      </mu-list-item-content>
      <mu-list-item-action >
        <mu-list-item-after-text>15 min</mu-list-item-after-text>
        <mu-checkbox color="yellow700" v-model="selects" value="value1" uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
      </mu-list-item-action>
    </mu-list-item>
    <mu-divider></mu-divider>
    <mu-list-item avatar :ripple="false" button>
      <mu-list-item-content>
        <mu-list-item-title>me, Scrott, Jennifer</mu-list-item-title>
        <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">Summer BBQ</mu-list-item-sub-title>
        <mu-list-item-sub-title>
          Wish I could come, but I'm out of town this weekend.
        </mu-list-item-sub-title>
      </mu-list-item-content>
      <mu-list-item-action >
        <mu-list-item-after-text>2 hr</mu-list-item-after-text>
        <mu-checkbox color="yellow700" v-model="selects" value="value2"  uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
      </mu-list-item-action>
    </mu-list-item>
    <mu-divider></mu-divider>
     <mu-list-item avatar :ripple="false" button>
      <mu-list-item-content>
        <mu-list-item-title>Sandra Adams</mu-list-item-title>
        <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">Oui oui</mu-list-item-sub-title>
        <mu-list-item-sub-title>
          Do you have Paris recommendations? Have you ever been?
        </mu-list-item-sub-title>
      </mu-list-item-content>
      <mu-list-item-action >
        <mu-list-item-after-text>6 hr</mu-list-item-after-text>
        <mu-checkbox color="yellow700" v-model="selects" value="value3"  uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
      </mu-list-item-action>
    </mu-list-item>
    <mu-divider></mu-divider>
     <mu-list-item avatar :ripple="false" button>
      <mu-list-item-content>
        <mu-list-item-title>Trevor Hansen</mu-list-item-title>
        <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">Birthday gift</mu-list-item-sub-title>
        <mu-list-item-sub-title>
          Have any ideas about what we should get Heidi for her
        </mu-list-item-sub-title>
      </mu-list-item-content>
      <mu-list-item-action>
        <mu-list-item-after-text>12 hr</mu-list-item-after-text>
        <mu-checkbox color="yellow700" v-model="selects" value="value4"  uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
      </mu-list-item-action>
    </mu-list-item>
    <mu-divider></mu-divider>
     <mu-list-item avatar :ripple="false" button>
      <mu-list-item-content>
        <mu-list-item-title>Britta Holt</mu-list-item-title>
        <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">Recipe to try</mu-list-item-sub-title>
        <mu-list-item-sub-title>
          We should eat this: Grate, Squash, Corn, and tomatillo Tacos.
        </mu-list-item-sub-title>
      </mu-list-item-content>
      <mu-list-item-action >
        <mu-list-item-after-text>18hr</mu-list-item-after-text>
        <mu-checkbox color="yellow700" v-model="selects" value="value5"  uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
      </mu-list-item-action>
    </mu-list-item>
  </mu-list>
</mu-paper>
<script>
export default {
  data () {
    return {
      selects: []
    }
  }
}
</script>
<style>
.demo-list-wrap {
  width: 100%;
  max-width: 360px;
  overflow: hidden;
}
</style>
```
:::

## 配合表单组件使用

:::demo
```html
<mu-paper :z-depth="1" class="demo-list-wrap">
  <mu-appbar color="purple">
    <mu-button icon slot="left">
      <mu-icon value="menu"></mu-icon>
    </mu-button>
    Setting
  </mu-appbar>
  <mu-list textline="two-line">
    <mu-list-item>
      <mu-list-item-content>
        <mu-list-item-title>通知与信息设置</mu-list-item-title>
        <mu-list-item-sub-title>总是中断</mu-list-item-sub-title>
      </mu-list-item-content>
    </mu-list-item>
  </mu-list>
  <mu-divider></mu-divider>
  <mu-list>
      <mu-sub-header>声音开启设置</mu-sub-header>
      <mu-list-item button :ripple="false" @click="events = !events">
        <mu-list-item-title>
          事件和提醒
        </mu-list-item-title>
        <mu-list-item-action>
          <mu-switch v-model="events" readonly></mu-switch>
        </mu-list-item-action>
      </mu-list-item>
      <mu-list-item button :ripple="false" @click="calls = !calls">
        <mu-list-item-title>
          电话
        </mu-list-item-title>
        <mu-list-item-action>
          <mu-switch v-model="calls" readonly></mu-switch>
        </mu-list-item-action>
      </mu-list-item>
      <mu-list-item button :ripple="false" @click="messages = !messages">
        <mu-list-item-title>
          信息
        </mu-list-item-title>
        <mu-list-item-action>
          <mu-switch v-model="messages" readonly></mu-switch>
        </mu-list-item-action>
      </mu-list-item>
    </mu-list>
  <mu-list>
    <mu-sub-header>通知设置</mu-sub-header>
    <mu-list-item button :ripple="false" @click="notifications = !notifications">
      <mu-list-item-action>
        <mu-checkbox v-model="notifications" readonly></mu-checkbox>
      </mu-list-item-action>
      <mu-list-item-title>
        通知
      </mu-list-item-title>
    </mu-list-item>
    <mu-list-item button :ripple="false" @click="sounds = !sounds">
      <mu-list-item-action>
        <mu-checkbox v-model="sounds" readonly></mu-checkbox>
      </mu-list-item-action>
      <mu-list-item-title>
        声音
      </mu-list-item-title>
    </mu-list-item>
    <mu-list-item button :ripple="false" @click="videoSounds = !videoSounds">
      <mu-list-item-action>
        <mu-checkbox v-model="videoSounds" readonly></mu-checkbox>
      </mu-list-item-action>
      <mu-list-item-title>
        视频的声音
      </mu-list-item-title>
    </mu-list-item>
  </mu-list>
</mu-paper>
<script>
export default {
  data () {
    return {
      events: false,
      calls: false,
      messages: false,
      notifications: false,
      sounds: false,
      videoSounds: false
    }
  }
}
</script>
<style>
.demo-list-wrap {
  width: 100%;
  max-width: 360px;
  overflow: hidden;
}
</style>
```
:::



## 嵌套列表

:::demo
```html
<mu-paper :z-depth="1" class="demo-list-wrap">
  <mu-appbar color="primary">
    <mu-button icon slot="left">
      <mu-icon value="menu"></mu-icon>
    </mu-button>
    Inbox
  </mu-appbar>
   <mu-list toggle-nested>
    <mu-list-item button :ripple="false" nested :open="open === 'send'" @toggle-nested="open = arguments[0] ? 'send' : ''">
      <mu-list-item-action>
        <mu-icon value="send"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>Sent mail</mu-list-item-title>
      <mu-list-item-action>
        <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
      </mu-list-item-action>
      <mu-list-item button :ripple="false" slot="nested">
        <mu-list-item-title>List Item 1</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false" slot="nested">
        <mu-list-item-title>List Item 2</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false" slot="nested">
        <mu-list-item-title>List Item 3</mu-list-item-title>
      </mu-list-item>
    </mu-list-item>
    <mu-list-item button :ripple="false" nested :open="open === 'drafts'" @toggle-nested="open = arguments[0] ? 'drafts' : ''">
      <mu-list-item-action>
        <mu-icon value="drafts"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>Drafts</mu-list-item-title>
      <mu-list-item-action>
        <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
      </mu-list-item-action>
      <mu-list-item button :ripple="false" slot="nested">
        <mu-list-item-title>List Item 1</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false" slot="nested">
        <mu-list-item-title>List Item 2</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false" slot="nested">
        <mu-list-item-title>List Item 3</mu-list-item-title>
      </mu-list-item>
    </mu-list-item>
    <mu-list-item button :ripple="false" nested :open="open === 'inbox'" @toggle-nested="open = arguments[0] ? 'inbox' : ''">
      <mu-list-item-action>
        <mu-icon value="inbox"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>Inbox</mu-list-item-title>
      <mu-list-item-action>
        <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
      </mu-list-item-action>
      <mu-list-item button :ripple="false" slot="nested">
        <mu-list-item-title>List Item 1</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false" slot="nested">
        <mu-list-item-title>List Item 2</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false" slot="nested">
        <mu-list-item-title>List Item 3</mu-list-item-title>
      </mu-list-item>
    </mu-list-item>
    <mu-list-item button :ripple="false" nested :open="open === 'stared'" @toggle-nested="open = arguments[0] ? 'stared' : ''">
      <mu-list-item-action>
        <mu-icon value="grade"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>Stared</mu-list-item-title>
      <mu-list-item-action>
        <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
      </mu-list-item-action>
      <mu-list-item button :ripple="false" slot="nested">
        <mu-list-item-title>List Item 1</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false" slot="nested">
        <mu-list-item-title>List Item 2</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false" slot="nested">
        <mu-list-item-title>List Item 3</mu-list-item-title>
      </mu-list-item>
    </mu-list-item>
  </mu-list>
</mu-paper>
<style>
.demo-list-wrap {
  width: 100%;
  max-width: 360px;
  overflow: hidden;
}
</style>
```
:::

## List Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| textline | 行数，用于改变列表项的高度 | String | two-line/three-line | — |
| dense | 是否是密集型列表，会调整列表项的高度 | Boolean | — | — |
| nested-indent | 嵌套列表是否有缩进距离 | Boolean | — | true |
| toggle-nested | 是否可以切换显示/隐藏嵌套列表 | Boolean | — | — |
| toggle-nested-type | 切换显示类型 | String | expand/popover | — |
| value | 需要和子组件 `mu-list-item` 配合使用时生效 | — | — | — |

## List Events

| 名称  | 介绍  | 回调参数 |
|-------|------|--------|
| change | 当列表项被点击，`value` 需要被改变时触发事件 | (value) |

## List Item Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| button | 列表项是否可点击 | Boolean | — | — |
| avatar | 是否包含 `mu-avatar` 组件，会相应调整列表项高度 | Boolean | — | — |
| nested | 是否允许嵌套列表 | Boolean | — | — |
| nested-list-class | 嵌套列表的样式 | Boolean | — | — |
| open | 嵌套列表是否显示 | Boolean | — | true |
| value | 当 `value` 和 `mu-list` 组件的 `value` 值相等时，组件呈现被选择状态 | — | — | — |
| ripple | 是否有波纹效果 | Boolean | — | true |
| href | 相当于 a 标签的 href属性，设置之后会渲染成 a 标签，默认是使用button标签 | String | — | — |
| to | 表示目标路由的链接。设置之后组件会被渲染成`router-link`, 当被点击后，内部会立刻把 `to` 的值传到 `router.push()`，所以这个值可以是一个字符串或者是描述目标位置的对象。 | String/Object | - | - |
| tag | 有时候想要 `<router-link>` 渲染成某种标签，例如 `<li>`。 于是我们使用 `tag prop` 类指定何种标签，同样它还是会监听点击，触发导航。 | String |  - | - |
| active-class | 设置 链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 `linkActiveClass` 来全局配置。 | String |  - | - |
| event | 声明可以用来触发导航的事件。可以是一个字符串或是一个包含字符串的数组 | String/Array | — | click |
| exact | "是否激活" 默认类名的依据是 **inclusive match** （全包含匹配）。 举个例子，如果当前的路径是 `/a` 开头的，那么 `<router-link to="/a">` 也会被设置 CSS 类名。| Boolean | — | — |
| exact-active-class | 配置当链接被精确匹配的时候应该激活的 class。注意默认值也是可以通过路由构造函数选项 linkExactActiveClass 进行全局配置的。 | String | — | router-link-exact-active |
| append | 设置 `append` 属性后，则在当前（相对）路径前添加基路径。例如，我们从 `/a` 导航到一个相对路径 b，如果没有配置 append，则路径为 /b，如果配了，则为 /a/b | Boolean | — | false |
| replace | 设置 `replace` 属性的话，当点击时，会调用 `router.replace()` 而不是 `router.push()`，于是导航后不会留下 history 记录。 | Boolean | — | false |


<script>
export default {
  data () {
    return {
      selects: [],
      events: false,
      calls: false,
      messages: false,
      notifications: false,
      sounds: false,
      videoSounds: false,
      open: 'send'
    }
  }
}
</script>

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
