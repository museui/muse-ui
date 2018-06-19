# Prompt box

`Mu-alert` components are used to pass information to users, it can define different colors and icons.


## Basic example

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

## Display Icon and delete icon

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

## Transition animation customization

Use the transition property to customize the transition animation

:::demo
```html
<div class="alert-demo-wrapper">
  <mu-button color="primary" style="margin-bottom: 16px;" @click="toggleAlert()">TOGGLE</mu-button>
  <mu-alert color="warning" @delete="alert1 = false" delete v-if="alert1" transition="mu-scale-transition">
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

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| color | component color | String | — | — |
| delete | determine whether it's to display deleting icons | Boolean | — | — |
| transition | setting the transition animation to display and hide the component | String | — | — |
| mode | setting the mode of the transtion animation | String | out-in/in-out | — |

## Alert Events

| Name | Description | Parameters |
|------|------|------|
| delete | triggers when the delete icon clicked | — |

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
