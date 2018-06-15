# 时间输入框

`mu-date-input` 用于选择日期。将 `mu-text-field`、`mu-date-picker` 和 `mu-time-picker` 组合在一起形成一个新的组件。

## 示例

:::demo
```html
<mu-container>
  <mu-row gutter>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input v-model="value1" label="选择日期" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input v-model="value2" label="横屏显示" label-float full-width landscape></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input v-model="value3" label="隐藏日期展示" label-float full-width no-display></mu-date-input>
    </mu-col>
  </mu-row>
</mu-container>
<script>
export default {
  data () {
    return {
      value1: undefined,
      value2: undefined,
      value3: undefined
    };
  }
};
</script>
```
:::

## 不同的显示方式

改变 `container` 属性改变不同的弹出方式，目前有 `popover`, `dialog`, `bottomSheet` 三种方式

:::demo
```html
<mu-container>
  <mu-row gutter>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" icon="today" v-model="value4" label="popover 显示" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value5" label="对话框显示" container="dialog" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value6" label="底部弹出显示" container="bottomSheet" label-float full-width></mu-date-input>
    </mu-col>
  </mu-row>
</mu-container>
<script>
export default {
  data () {
    return {
      value4: undefined,
      value5: undefined,
      value6: undefined
    };
  }
};
</script>
```
:::

## 不同的选择模式

:::demo
```html
<mu-container>
  <mu-row gutter>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value7" label="选择日期" type="date" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" landscape v-model="value8" label="选择时间" type="time" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value9" label="选择年份" type="year" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value10" label="选择月份" type="month" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value11" label="选择日期和时间" type="dateTime" label-float full-width landscape></mu-date-input>
    </mu-col>
  </mu-row>
</mu-container>
<script>
export default {
  data () {
    return {
      value7: undefined,
      value8: undefined,
      value9: undefined,
      value10: undefined,
      value11: undefined
    };
  }
};
</script>
```
:::


## 选择控制

格式化文本，显示模式更改，禁用一些日期的选择。

:::demo
```html
<mu-container>
  <mu-row gutter>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" type="time" v-model="value12" label="显示确定/取消按钮" actions label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value13" label="格式化显示" format="YYYY 年 MM 月 DD 日" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value14" label="不展示日期" no-display label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value15" label="只能选择当前月份"  :max-date="maxDate" :min-date="minDate" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value16" label="只能选工作日"  :should-disable-date="disableWeekends" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value17" label="只能选择偶数日期"  :should-disable-date="allowedDates" label-float full-width></mu-date-input>
    </mu-col>
  </mu-row>
</mu-container>
<script>
export default {
  data () {
    const minDate = new Date();
    const maxDate = new Date();
    minDate.setDate(1);
    maxDate.setMonth(maxDate.getMonth() + 1);
    maxDate.setDate(0);
    return {
      value12: null,
      value13: null,
      value14: null,
      value15: null,
      value16: null,
      value17: null,
      minDate,
      maxDate
    }
  },
  methods: {
    disableWeekends (date) {
      return date.getDay() === 0 || date.getDay() === 6
    },
    allowedDates (date) {
      return date.getDate() % 2 === 0
    }
  }
};
</script>
```
:::

## 不同语言环境

通过自定义 `date-time-format` 来格式化不同语言的显示

:::demo
```html
<mu-container>
  <mu-row gutter>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input icon="today" v-model="value18" label="English" label-float full-width :date-time-format="enDateFormat"></mu-date-input>
    </mu-col>
  </mu-row>
</mu-container>
<script>
const dayAbbreviation = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'Dec'];
const monthLongList = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

const enDateFormat = {
  formatDisplay (date) {
    return `${dayList[date.getDay()]}, ${monthList[date.getMonth()]} ${date.getDate()}`;
  },
  formatMonth (date) {
    return `${monthLongList[date.getMonth()]} ${date.getFullYear()}`;
  },
  getWeekDayArray (firstDayOfWeek) {
    let beforeArray = [];
    let afterArray = [];
    for (let i = 0; i < dayAbbreviation.length; i++) {
      if (i < firstDayOfWeek) {
        afterArray.push(dayAbbreviation[i]);
      } else {
        beforeArray.push(dayAbbreviation[i]);
      }
    }
    return beforeArray.concat(afterArray);
  },
  getMonthList () {
    return monthList;
  }
};

export default {
  data () {
    return {
      value18: undefined,
      enDateFormat
    }
  }
};
</script>
```
:::

<mu-alert color="info">
  <div>
    <p>mu-date-input 支持 input 标签所有的原生属性和事件。</p>
    <p style="margin-bottom: 0">mu-date-input 日期解析和格式化依赖于 <a style="color: inherit;" target="_blank" href="https://github.com/iamkun/dayjs/blob/master/docs/en/API-reference.md">dayjs</a></p>
  </div>
</mu-alert>

## Date Input props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| container | 弹出方式 | String | popover/dialog/bottomSheet  | popover |
| type | 选择的类型 | String | date/time/year/month/dateTime | date |
| clock-type | 时间选择器显示类型 | String | ampm/24hr | ampm |
| view-type | 时间选择模式 | String | clock/list| clock |
| format | 显示在输入框中的格式 | String | — | yyyy—MM-dd  |
| actions | 是否显示底部的确定/取消按钮 | Boolean | — | false |
| ok-label | 确定按钮的文本 | String | — | 确定 |
| cancel-label | 取消按钮的文本 | String | — | 取消 |
| value | 用于 `v-model` 绑定 | Date, String | — | — |
| value-format | 绑定值的格式。不指定则绑定值为 Date 对象 | String | - |
| color | 输入框颜色 | String | — | — |
| display-color | 时间显示区域背景色 | String | - | - |
| icon | 输入框左边的图标 | String | — | — |
| label | 标签文本 | String | — | — |
| label-float | 标签是否浮动 | Boolean | — | false |
| error-text | 错误提醒文字，如果此参数有值，那么输入框会转为错误的状态, 显示效果将会更改 | String | — | — |
| help-text | 帮助文字 | String | — | — |
| full-width | 是否将宽度设置为 100%, 默认 256px | Boolean | — | false |
| disabled | 输入框是否不可用 | Boolean | — | false |
| action-icon | 输入框右边的图标 | String | — | — |
| action-click | 图标点击之后执行的函数 | Function | — | — |
| solo | 改变样式，设置之后会隐藏输入框的下划线和标签 | Boolean | — | false |
| underline-color | 下划线的颜色  | String | - | - |
| prefix | 输入框前缀内容 | String | — | — |
| suffix | 输入框尾部内容 | String | — | — |
| date-time-format | 日期格式化对象，用于改变不同的语言环境显示 | Object | — | — |
| first-day-of-week | 哪一天作为一个星期的开始 | Number | 0-6 | 0 |
| max-date | 最大可选择日期 | Date | — | — |
| min-date | 最小可选择日期 | Date | — | — |
| landscape | 是否横屏显示 | Boolean | — | false |
| no-display | 是否不存在时间显示部分 | Boolean | — | false |
| should-disable-date | 判断日期是否不可用的函数 | Function | — | — |

## Date Input Events

| 名称 | 介绍 | 参数 |
|-----|------|-----|
| change | 值改变时触发 | (value) |

## Date Input Slots

| 名称 | 介绍 |
|-----|------|
| prepend | 输入框前置内容 |
| append | 输入框后置内容 |
| default | - |

<script>
const dayAbbreviation = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'Dec']
const monthLongList = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']

const enDateFormat = {
  formatDisplay (date) {
    return `${dayList[date.getDay()]}, ${monthList[date.getMonth()]} ${date.getDate()}`
  },
  formatMonth (date) {
    return `${monthLongList[date.getMonth()]} ${date.getFullYear()}`
  },
  getWeekDayArray (firstDayOfWeek) {
    let beforeArray = []
    let afterArray = []
    for (let i = 0; i < dayAbbreviation.length; i++) {
      if (i < firstDayOfWeek) {
        afterArray.push(dayAbbreviation[i])
      } else {
        beforeArray.push(dayAbbreviation[i])
      }
    }
    return beforeArray.concat(afterArray)
  },
  getMonthList () {
    return monthList;
  }
}
export default {
  data () {
    const minDate = new Date();
    const maxDate = new Date();
    minDate.setDate(1);
    maxDate.setMonth(maxDate.getMonth() + 1);
    maxDate.setDate(0);
    return {
      value1: undefined,
      value2: undefined,
      value3: undefined,
      value4: undefined,
      value5: undefined,
      value6: undefined,
      value7: undefined,
      value8: undefined,
      value9: undefined,
      value10: undefined,
      value11: undefined,
      value12: undefined,
      value13: undefined,
      value14: undefined,
      value15: undefined,
      value16: undefined,
      value17: undefined,
      value18: undefined,
      minDate,
      maxDate,
      enDateFormat
    }
  },
  methods: {
    disableWeekends (date) {
      return date.getDay() === 0 || date.getDay() === 6
    },
    allowedDates (date) {
      return date.getDate() % 2 === 0
    }
  }
};
</script>
