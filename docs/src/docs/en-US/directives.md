# Directives

Muse-UI provides `v-click-outside` 、 `v-resize` 、 `v-scroll` 、 `v-elevation` three directives.


## ClickOutside

:::demo
```html
<div class="demo-content-block" @click="message='click here....'" v-click-outside="clickoutside">{{message}}</div>
<script>
export default {
  data () {
    return {
      message: 'click! click! click!'
    };
  },
  methods: {
    clickoutside () {
      this.message = 'click outside'
    }
  }
}
</script>

<style>
.demo-content-block {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

```
:::

## Resize

:::demo
```html
<div class="demo-content-block" v-resize="resize">
  <p style="margin-right: 16px;">Window Size:</p>
  <p>width: {{width}}px  height: {{height}}px</p>
</div>
<script>
export default {
  data () {
    return {
      width: 0,
      height: 0
    };
  },
  mounted () {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  },
  methods: {
    resize () {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    }
  }
}
</script>

<style>
.demo-content-block {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

```
:::

## Scroll

:::demo
```html
<div class="demo-content-block" v-scroll="scroll">
  <p style="margin-right: 16px;">ScrollTop:</p>
  <p>{{scrollTop}}</p>
</div>
<script>
export default {
  data () {
    return {
      scrollTop: 0
    }
  },
  mounted () {
    this.scrollTop = window.scrollY;
  }
}
</script>

<style>
.demo-content-block {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

```
:::

## Elevation

:::demo
```html
<mu-container>
  <mu-flex wrap="wrap" justify-content="between" align-items="center">
    <mu-slider :max="24" v-model="elevation" :step="1" style="width: 400px;"></mu-slider>
    <div v-elevation="elevation" style="width: 300px; height: 200px; background-color: #fff;"></div>
  </mu-flex>
</mu-container>
<script>
export default {
  data () {
    return {
      elevation: 4
    }
  }
}
</script>
```
:::


## Import on demand

The components of the tool class are in the `lib/helpers` directory

```javascript
import Vue from 'vue';
import Helpers from 'muse-ui/lib/Helpers';

Vue.use(Helpers);
```

<script>
export default {
  data () {
    return {
      message: 'click! click! click!',
      width: 0,
      height: 0,
      scrollTop: 0,
      elevation: 4
    };
  },
  mounted () {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.scrollTop = window.scrollY;
  },
  methods: {
    clickoutside () {
      this.message = 'click outside'
    },
    resize () {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
    scroll () {
      this.scrollTop = window.scrollY;
    }
  }
}
</script>

<style>
.demo-content-block {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

