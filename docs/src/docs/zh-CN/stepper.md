# 步骤条

`mu-stepper` 用途步骤导航，此组件只提供视图显示，步骤逻辑需要有使用者自行控制。

## 示例

一个活动发起的示例, 默认的步骤导航，是一步完成之后才能进行下一步的， 通过改变 `active-step` 的值来控制当前步骤，使用的时候可根据 `active-step` 展示相应的页面

:::demo
```html
<div class="demo-step-container">
  <mu-stepper :active-step="activeStep">
    <mu-step>
      <mu-step-label>
        选择活动地点
      </mu-step-label>
    </mu-step>
    <mu-step>
      <mu-step-label>
        创建一个群组
      </mu-step-label>
    </mu-step>
    <mu-step>
      <mu-step-label>
        宣传活动
      </mu-step-label>
    </mu-step>
  </mu-stepper>
  <div class="demo-step-content">
    <p v-if="finished">
      都完成啦!<a href="javascript:;" @click="reset">点这里</a>可以重置
    </p>
    <template v-if="!finished">
      <p>
        {{content}}
      </p>
      <div>
        <mu-button flat class="demo-step-button" :disabled="activeStep === 0" @click="handlePrev"> 上一步 </mu-button>
        <mu-button class="demo-step-button" color="primary" @click="handleNext"> {{activeStep === 2 ? '完成' : '下一步'}} </mu-button>
      </div>
    </template>
  </div>
</div>
<script>
export default {
  data () {
    return {
      activeStep: 0
    };
  },
  computed: {
    content () {
      let message = ''
      switch (this.activeStep) {
        case 0:
          message = '选择一个活动的地点';
          break
        case 1:
          message = '创建群组，50人左右';
          break
        case 2:
          message = '多在群里发消息宣传宣传';
          break
        default:
          message = 'fuck! 又 TM 出错了！！！';
          break
      }
      return message
    },
    finished () {
      return this.activeStep > 2;
    }
  },
  methods: {
    handleNext () {
      this.activeStep++;
    },
    handlePrev () {
      this.activeStep--;
    },
    reset () {
      this.activeStep = 0;
    }
  }
}
</script>
```
:::

## 垂直

垂直的步骤导航，步骤内容需要放置在 `mu-step-content` 组件中，当 `active-step` 改变时会显示不同的内容, `mu-step-content` 只可以被用在垂直的步骤导航中

:::demo
```html
<mu-container>
  <div class="demo-vsteper-container">
    <mu-stepper :active-step="vactiveStep" orientation="vertical">
      <mu-step>
        <mu-step-label>
          选择活动地点
        </mu-step-label>
        <mu-step-content>
          <p>
            在附近选择一个活动的地点, 最好靠近地铁站公交站，已方便交通，附近设施应尽量完善，最重要的是有Wifi
          </p>
          <mu-button class="demo-step-button" @click="vhandleNext" color="primary">下一步</mu-button>
        </mu-step-content>
      </mu-step>
      <mu-step>
        <mu-step-label>
          创建一个群组
        </mu-step-label>
        <mu-step-content>
          <p>
            创建群组，50人左右，以18-25单身青年为主。。。。。
          </p>
          <mu-button class="demo-step-button" @click="vhandleNext" color="primary">下一步</mu-button>
          <mu-button flat class="demo-step-button" @click="vhandlePrev">上一步</mu-button>
        </mu-step-content>
      </mu-step>
      <mu-step>
        <mu-step-label>
          宣传活动
        </mu-step-label>
        <mu-step-content>
          <p>
            多在群里发消息宣传宣传，有事没事多在群里唠唠嗑，确定的话就ok拉
          </p>
          <mu-button class="demo-step-button" @click="vhandleNext" color="primary">完成</mu-button>
          <mu-button flat class="demo-step-button" @click="vhandlePrev">上一步</mu-button>
        </mu-step-content>
      </mu-step>
    </mu-stepper>
    <p v-if="vfinished">
      都完成啦!<a href="javascript:;" @click="vreset">点这里</a>可以重置
    </p>
  </div>
</mu-container>
<script>
export default {
  data () {
    return {
      vactiveStep: 0
    };
  },
  computed: {
    vfinished () {
      return this.vactiveStep > 2;
    }
  },
  methods: {
    vhandleNext () {
      this.vactiveStep++;
    },
    vhandlePrev () {
      this.vactiveStep--;
    },
    vreset () {
      this.vactiveStep = 0;
    }
  }
}
</script>

<style>
.demo-vsteper-container{
  max-width: 380px;
  max-height: 400px;
  margin: auto;
}

.demo-step-content {
  margin: 0  16px;
}

.demo-step-button {
  margin-top: 12px;
  margin-right: 12px;
}
</style>

```
:::

## 非线性控制

`linear` 设置为 false 时，不用完成上一步骤也可以查看下步骤的内容，`mu-step-label` 需要被替换为 `mu-step-button` 并监听点击事件显示改步骤内容

:::demo
```html
<div class="demo-step-container">
  <mu-stepper :active-step="lactiveStep" :linear="false">
    <mu-step :completed="finishs.indexOf(0) !== -1">
      <mu-step-button @click="changeStep(0)">
        选择活动地点
      </mu-step-button>
    </mu-step>
    <mu-step :completed="finishs.indexOf(1) !== -1">
      <mu-step-button @click="changeStep(1)">
        创建一个群组
      </mu-step-button>
    </mu-step>
    <mu-step :completed="finishs.indexOf(2) !== -1">
      <mu-step-button @click="changeStep(2)">
        宣传活动
      </mu-step-button>
    </mu-step>
  </mu-stepper>
  <div class="demo-step-content">
      <mu-button @click="finishs.length === 3 ? (finishs = []) : finish()" color="primary">{{finishs.length === 3 ? 'reset' : 'finish'}}</mu-button>
  </div>
</div>
<script>
export default {
  data () {
    return {
      lactiveStep: 0,
      finishs: []
    };
  },
  methods: {
    changeStep (index) {
      this.lactiveStep = index
    },
    finish () {
      if (this.finishs.indexOf(this.lactiveStep) === -1) this.finishs.push(this.lactiveStep);
    }
  }
}
</script>

<style>
.demo-vsteper-container{
  max-width: 380px;
  max-height: 400px;
  margin: auto;
}

.demo-step-container {
  width: 100%;
  max-width: 700px;
  margin: auto;
}

.demo-step-content {
  margin: 0  16px;
}

.demo-step-button {
  margin-top: 12px;
  margin-right: 12px;
}
</style>
```
:::

## 自定义图标

:::demo
```html
<div class="demo-step-container">
  <mu-stepper :activeStep="0" :linear="false">
    <mu-step>
      <mu-step-label>
        选择活动地点
      </mu-step-label>
    </mu-step>
    <mu-step>
      <mu-step-label class="demo-step-label-warning">
        <mu-icon slot="icon" value="warning" color="red"></mu-icon>
        创建一个群组
      </mu-step-label>
    </mu-step>
    <mu-step>
      <mu-step-label>
        宣传活动
      </mu-step-label>
    </mu-step>
  </mu-stepper>
</div>
```
:::

## Stepper Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| active-step | 当前步骤 | Number | — | 0 |
| linear | 是否为线性步骤导航，设置为 false，将不再控制 `step` 组件的 completed 和 disabled 属性 | Boolean | — | true |
| orientation | horizontal: 水平步骤导航, vertical: 垂直的步骤导航 | String | — | horizontal |

## Step Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| completed | 是否已完成 | Boolean | — | false |
| disabled | 是否被禁用 | Boolean | — | false |



<script>
export default {
  data () {
    return {
      activeStep: 0,
      vactiveStep: 0,
      lactiveStep: 0,
      finishs: []
    };
  },
  computed: {
    content () {
      let message = ''
      switch (this.activeStep) {
        case 0:
          message = '选择一个活动的地点';
          break
        case 1:
          message = '创建群组，50人左右';
          break
        case 2:
          message = '多在群里发消息宣传宣传';
          break
        default:
          message = 'fuck! 又 TM 出错了！！！';
          break
      }
      return message
    },
    lcontent () {
      let message = ''
      switch (this.lactiveStep) {
        case 0:
          message = '选择一个活动的地点';
          break
        case 1:
          message = '创建群组，50人左右';
          break
        case 2:
          message = '多在群里发消息宣传宣传';
          break
        default:
          message = 'fuck! 又 TM 出错了！！！';
          break
      }
      return message
    },
    finished () {
      return this.activeStep > 2;
    },
    vfinished () {
      return this.vactiveStep > 2;
    }
  },
  methods: {
    handleNext () {
      this.activeStep++;
    },
    handlePrev () {
      this.activeStep--;
    },
    reset () {
      this.activeStep = 0;
    },
    vhandleNext () {
      this.vactiveStep++;
    },
    vhandlePrev () {
      this.vactiveStep--;
    },
    vreset () {
      this.vactiveStep = 0;
    },
    changeStep (index) {
      this.lactiveStep = index
    },
    finish () {
      if (this.finishs.indexOf(this.lactiveStep) === -1) this.finishs.push(this.lactiveStep);
    }
  }
}
</script>

<style>
.demo-vsteper-container{
  max-width: 380px;
  max-height: 400px;
  margin: auto;
}

.demo-step-container {
  width: 100%;
  max-width: 700px;
  margin: auto;
}

.demo-step-content {
  margin: 0  16px;
}

.demo-step-button {
  margin-top: 12px;
  margin-right: 12px;
}
</style>
