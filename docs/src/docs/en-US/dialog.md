# Dialog

`Mu-dialog` is used to prompt the user for a decision or some additional information needed to complete a task.

## Example

Click outside the dialog box, or press back, click the Close button to close the dialog box.

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

Set `overlay-close` 和 `esc-press-close` so that clicking outside the dialog box or pressing back doesn't close.

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

## Scrollable dialog box

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


## Full Screen dialog box

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

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| open | whether it is open | Boolean | — | false |
| title | dialog title，use `slot="title"` instead | String | — | — |
| width | dialog width, default is `auto`  | String,Number | — | — |
| max-width | dialog max width | String,Number | — | — |
| scrollable | whether it can scroll internally | Boolean | false | false |
| fullscreen | whether it is full screen | Boolean | false | false |
| transition | transition animation Scheme | String | slide-top/slide-bottom/slide-left/slide-right/fade/scale | scale |
| dialog-class | dialog style | String | — | — |
| overlay | whether there is a overlayer | Boolean | — | true |
| overlay-close | click whether the overlay can be closed | Boolean | — | true |
| overlay-opacity | overlay opacity | Boolean | — | 0.4 |
| overlay-color | overlay color | String | — | #000 |
| esc-press-close | press `ESC` whether the overlay can be close | Boolean | — | true |
| append-body | whether the overlay is added to the body element, internal use | Boolean | — | true |

## Dialog Events

| Name | Description | Parameters |
|------|------|-------|
| close | when you click on the overlay or press esc, trigger when you need to close the shell | (reason) reason of close  <br/> `overlay` : clicked overlay <br/> `esc` press `esc` |

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
