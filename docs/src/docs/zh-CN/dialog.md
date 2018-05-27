# 对话框

`mu-dialog` 用于提示用户作一些决定，或者是完成某个任务时需要的一些其它额外的信息。

## 示例

点击对话框之外，或者按下后退，点击关闭按钮即可关闭对话框。

:::demo
```html
<mu-container>
  <mu-flex justify-content="center">
    <mu-button @click="openSimpleDialog">Open Dialog</mu-button>
  </mu-flex>
  <mu-dialog title="Dialog" width="360" :open.sync="openSimple">
    this is simple Dialog
    <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">Close</mu-button>
  </mu-dialog>
<mu-container>
<script>
export default {
  data () {
    return {
      openSimple: false
    };
  },
  methods: {
    openSimpleDialog () {
      this.openSimple = true;
    },
    closeSimpleDialog () {
      this.openSimple = false;
    }
  }
};
</script>
```
:::

## Alerts

设置 `overlay-close` 和 `esc-press-close` 使点击对话框外部或按下后退不会关闭。

:::demo
```html
<mu-container>
  <mu-flex justify-content="center">
    <mu-button @click="openAlertDialog">Open Dialog</mu-button>
  </mu-flex>
  <mu-dialog title="Use Google's location service?" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="openAlert">
    Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
    <mu-button slot="actions" flat color="primary" @click="closeAlertDialog">Disagree</mu-button>
    <mu-button slot="actions" flat color="primary" @click="closeAlertDialog">Agree</mu-button>
  </mu-dialog>
<mu-container>
<script>
export default {
  data () {
    return {
      openAlert: false
    };
  },
  methods: {
    openAlertDialog () {
      this.openAlert = true;
    },
    closeAlertDialog () {
      this.openAlert = false;
    }
  }
};
</script>
```
:::

## 可滚动的对话框

:::demo
```html
<mu-container>
  <mu-flex justify-content="center">
    <mu-button @click="openScrollDialog">Open Scroll Dialog</mu-button>
  </mu-flex>
  <mu-dialog title="Phone Ringtone" width="360" scrollable :open.sync="openScroll">
    <mu-list>
      <mu-list-item :key="option" v-for="option in options">
        <mu-list-item-content>
          <mu-radio  :label="option" :value="option" v-model="ringtone"></mu-radio>
        </mu-list-item-content>
      </mu-list-item>
    </mu-list>
    <mu-button slot="actions" flat color="primary" @click="closeScrollDialog">ok</mu-button>
  </mu-dialog>
<mu-container>
<script>
export default {
  data () {
    return {
      openScroll: false,
      ringtone: 'None',
      options: [
        'None',
        'Atria',
        'Callisto',
        'Dione',
        'Ganymede',
        'Hangouts Call',
        'Luna',
        'Oberon',
        'Phobos',
        'Pyxis',
        'Sedna',
        'Titania',
        'Triton',
        'Umbriel'
    ]
    };
  },
  methods: {
    openScrollDialog () {
      this.openScroll = true;
    },
    closeScrollDialog () {
      this.openScroll = false;
    }
  }
};
</script>
```
:::


## 全屏对话框

:::demo
```html
<mu-container>
  <mu-flex justify-content="center">
    <mu-button @click="openFullscreenDialog">Open Scroll Dialog</mu-button>
  </mu-flex>
  <mu-dialog width="360" transition="slide-bottom" fullscreen :open.sync="openFullscreen">
    <mu-appbar color="primary" title="Fullscreen Diaolog">
      <mu-button slot="left" icon @click="closeFullscreenDialog">
        <mu-icon value="close"></mu-icon>
      </mu-button>
      <mu-button slot="right" flat  @click="closeFullscreenDialog">
        Done
      </mu-button>
    </mu-appbar>
    <div style="padding: 24px;">
      this is a fullscreen dialog
    </div>
  </mu-dialog>
<mu-container>
<script>
export default {
  data () {
    return {
      openFullscreen: false
    };
  },
  methods: {
    openFullscreenDialog () {
      this.openFullscreen = true;
    },
    closeFullscreenDialog () {
      this.openFullscreen = false;
    }
  }
};
</script>
```
:::


## Dialog Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| open | 是否打开 | Boolean | — | false |
| title | dialog 标题，可用 `slot="title"` 代替 | String | — | — |
| width | dialog 宽度，默认是 `auto`  | String,Number | — | — |
| max-width | dialog 最大宽度 | String,Number | — | — |
| scrollable | 是否可以内部滚动 | Boolean | false | false |
| fullscreen | 是否是全屏 | Boolean | false | false |
| transition | 过渡动画方案 | String | slide-top/slide-bottom/slide-left/slide-right/fade/scale | scale |
| dialog-class | dialog 样式 | String | — | — |
| overlay | 是否有遮盖层 | Boolean | — | true |
| overlay-close | 点击遮盖层是否可以关闭 | Boolean | — | true |
| overlay-opacity | 遮盖层的透明度 | Boolean | — | 0.4 |
| overlay-color | 遮盖层的颜色 | String | — | #000 |
| esc-press-close | 按下 `esc` 键是否可以关闭 | Boolean | — | true |
| append-body | 弹出层是否添加到 body 元素后, 内部使用 | Boolean | — | true |

## Dialog Events

| 名称 | 介绍 | 回调参数 |
|------|------|-------|
| close | 当点击遮盖层或者按 esc 键，需要关闭弹层时触发 | (reason) reason 关闭的原因  <br/> `overlay` : 点击了遮盖层 <br/> `esc` 按下 esc 键 |

<script>
export default {
  data () {
    return {
      openSimple: false,
      openAlert: false,
      openScroll: false,
      openFullscreen: false,
      ringtone: 'None',
      options: [
        'None',
        'Atria',
        'Callisto',
        'Dione',
        'Ganymede',
        'Hangouts Call',
        'Luna',
        'Oberon',
        'Phobos',
        'Pyxis',
        'Sedna',
        'Titania',
        'Triton',
        'Umbriel'
    ]
    };
  },
  methods: {
    openSimpleDialog () {
      this.openSimple = true;
    },
    closeSimpleDialog () {
      this.openSimple = false;
    },
    openAlertDialog () {
      this.openAlert = true;
    },
    closeAlertDialog () {
      this.openAlert = false;
    },
    openScrollDialog () {
      this.openScroll = true;
    },
    closeScrollDialog () {
      this.openScroll = false;
    },
    openFullscreenDialog () {
      this.openFullscreen = true;
    },
    closeFullscreenDialog () {
      this.openFullscreen = false;
    }
  }
};
</script>
