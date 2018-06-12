# 提示框

`mu-alert` 组件用来向用户传递信息，它可以定义不同的颜色和图标。


## 基础示例

:::demo
```html
<div class="alert-demo-wrapper">
  <mu-alert color="success">
    this is success alert
  </mu-alert>
  <mu-alert color="warning">
    this is warning alert
  </mu-alert>
  <mu-alert color="info" >
    this is info alert
  </mu-alert>
  <mu-alert color="error" >
    this is error alert
  </mu-alert>
</div>
<style lang="less">
.alert-demo-wrapper {
  width: 100%;
  > .mu-alert {
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
```
:::

## 显示 Icon 和 delete 图标

::: demo
```html
<div class="alert-demo-wrapper">
  <mu-alert color="success">
    <mu-icon left value="check_circle"></mu-icon> this is success alert
  </mu-alert>
  <mu-alert color="warning">
    <mu-icon left value="priority_high"></mu-icon> this is warning alert
  </mu-alert>
  <mu-alert color="info" >
    <mu-icon left value="info"></mu-icon> this is info alert
  </mu-alert>
  <mu-alert color="error" delete v-if="alert" @delete="closeAlert()">
    <mu-icon left value="warning"></mu-icon> this is error alert
  </mu-alert>
  <mu-button color="primary" v-if="!alert" @click="showAlert()">SHOW ALERT</mu-button>
</div>
<script>
export default {
  data () {
    return {
      alert: true
    };
  },
  methods: {
    showAlert () {
      this.alert = true;
    },
    closeAlert () {
      this.alert = false;
    }
  }
}
</script>
<style lang="less">
.alert-demo-wrapper {
  width: 100%;
  > .mu-alert {
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  > .mu-button {
    margin: 0 auto;
    display: block;
  }
}
</style>
```
:::

## 过渡动画定制

通过 `transition` 属性定制过渡动画。

:::demo
```html
<div class="alert-demo-wrapper">
  <mu-button color="primary" style="margin-bottom: 16px;" @click="toggleAlert()">TOGGLE</mu-button>
  <mu-alert color="warning" delete v-if="alert1" transition="mu-scale-transition">
    <mu-icon left value="warning"></mu-icon> this is warning alert
  </mu-alert>
</div>
<script>
export default {
  data () {
    return {
      alert1: true
    };
  },
  methods: {
    toggleAlert () {
      this.alert1 = !this.alert1;
    }
  }
}
</script>
<style lang="less">
.alert-demo-wrapper {
  width: 100%;
  > .mu-alert {
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  > .mu-button {
    margin: 0 auto;
    display: block;
  }
}

.mu-scale-transition-enter-active,
.mu-scale-transition-leave-active {
  transition: transform .45s cubic-bezier(0.23, 1, 0.32, 1), opacity .45s cubic-bezier(0.23, 1, 0.32, 1);
  backface-visibility: hidden;
}

.mu-scale-transition-enter,
.mu-scale-transition-leave-active {
  transform: scale(0);
  opacity: 0;
}
</style>

```
:::

## Alert Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| color | 组件颜色 | String | — | — |
| delete | 是否显示删除图标 | Boolean | — | — |
| show | 组件是否显示, 使用 `.sync` 修饰符双向绑定 | Boolean | — | true |
| transition | 设置组件显示和隐藏的过渡动画 | String | — | — |
| mode | 设置过渡动画的模式 | String | out-in/in-out | — |

## Alert Events

| 名称 | 介绍 | 回调参数|
|------|------|------|
| delete | 当删除图标被点击时触发 | — |

<script>
export default {
  data () {
    return {
      alert: true,
      alert1: true
    };
  },
  methods: {
    showAlert () {
      this.alert = true;
    },
    closeAlert () {
      this.alert = false;
    },
    toggleAlert () {
      this.alert1 = !this.alert1;
    }
  }
}
</script>

<style lang="less">
.alert-demo-wrapper {
  width: 100%;
  > .mu-alert {
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  > .mu-button {
    margin: 0 auto;
    display: block;
  }
}

.mu-scale-transition-enter-active,
.mu-scale-transition-leave-active {
  transition: transform .45s cubic-bezier(0.23, 1, 0.32, 1), opacity .45s cubic-bezier(0.23, 1, 0.32, 1);
  backface-visibility: hidden;
}

.mu-scale-transition-enter,
.mu-scale-transition-leave-active {
  transform: scale(0);
  opacity: 0;
}
</style>
