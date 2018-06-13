# 过渡动画

Muse-UI 内应用在部分组件的过渡动画，你也可以直接使用。在使用之前请阅读 [transition 组件文档](https://cn.vuejs.org/v2/api/#transition)。


## Fade 淡入淡出

:::demo
```html
<mu-container>
  <mu-button @click="show1 = !show1">Click Me</mu-button>
  <mu-flex class="mu-transition-row">
    <mu-fade-transition>
    <div class="mu-transition-box mu-primary-color mu-inverse" v-show="show1">mu-fade-transition</div>
    </mu-fade-transition>
  </mu-flex>
</mu-container>
<script>
export default {
  data () {
    return {
      show1: true
    };
  }
};
</script>
<style>
.mu-transition-row {
  margin-top: 16px;
  height: 100px;
}
.mu-transition-box {
  min-width: 200px;
  height: 100px;
  margin-right: 16px;
  border-radius: 4px;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```
:::

## Slide 滑入滑出

:::demo
```html
<mu-container>
  <mu-button @click="show2 = !show2">Click Me</mu-button>
  <mu-flex class="mu-transition-row">
    <mu-slide-top-transition>
      <div class="mu-transition-box mu-primary-color mu-inverse" v-show="show2">mu-slide-top-transition</div>
    </mu-slide-top-transition>
    <mu-slide-bottom-transition>
      <div class="mu-transition-box mu-primary-color mu-inverse" v-show="show2">mu-slide-bottom-transition</div>
    </mu-slide-bottom-transition>
  </mu-flex>
  <mu-flex class="mu-transition-row">
    <mu-slide-left-transition>
      <div class="mu-transition-box mu-primary-color mu-inverse" v-show="show2">mu-slide-left-transition</div>
    </mu-slide-left-transition>
    <mu-slide-right-transition>
      <div class="mu-transition-box mu-primary-color mu-inverse" v-show="show2">mu-slide-right-transition</div>
    </mu-slide-right-transition>
  </mu-flex>
</mu-container>
<script>
export default {
  data () {
    return {
      show2: true
    };
  }
};
</script>
<style>
.mu-transition-row {
  margin-top: 16px;
  height: 100px;
}
.mu-transition-box {
  min-width: 200px;
  height: 100px;
  margin-right: 16px;
  border-radius: 4px;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```
:::

## Expand 展开折叠

:::demo
```html
<mu-container>
  <mu-button @click="show3 = !show3">Click Me</mu-button>
  <mu-flex class="mu-transition-row">
    <mu-expand-transition>
      <div v-show="show3">
        <div class="mu-transition-box mu-primary-color mu-inverse" >mu-expand-transition</div>
        <div class="mu-transition-box mu-primary-color mu-inverse" >mu-expand-transition</div>
      </div>
    </mu-expand-transition>
  </mu-flex>
</mu-container>
<script>
export default {
  data () {
    return {
      show3: true
    };
  }
};
</script>
<style>
.mu-transition-row {
  margin-top: 16px;
  min-height: 100px;
}
.mu-transition-box {
  min-width: 200px;
  height: 100px;
  margin-right: 16px;
  border-radius: 4px;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```
:::

## Scale 缩放

:::demo
```html
<mu-container>
  <mu-button @click="show4 = !show4">Click Me</mu-button>
  <mu-flex class="mu-transition-row">
    <mu-scale-transition>
    <div class="mu-transition-box mu-primary-color mu-inverse" v-show="show4">mu-scale-transition</div>
    </mu-scale-transition>
  </mu-flex>
</mu-container>
<script>
export default {
  data () {
    return {
      show4: true
    };
  }
};
</script>
<style>
.mu-transition-row {
  margin-top: 16px;
  height: 100px;
}
.mu-transition-box {
  min-width: 200px;
  height: 100px;
  margin-right: 16px;
  border-radius: 4px;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```
:::

## 按需引入

工具类的组件在 `lib/Helpers` 目录下

```javascript
import Vue from 'vue';
import Helpers from 'muse-ui/lib/Helpers';

Vue.use(Helpers);
```

<script>
export default {
  data () {
    return {
      show1: true,
      show2: true,
      show3: true,
      show4: true
    };
  }
};
</script>
<style>
.mu-transition-row {
  margin-top: 16px;
  min-height: 100px;
}
.mu-transition-box {
  min-width: 200px;
  height: 100px;
  margin-right: 16px;
  border-radius: 4px;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
