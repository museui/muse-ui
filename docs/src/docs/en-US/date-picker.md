# 日期选择器

`mu-date-picker` 用于选择日期。

## 示例

:::demo
```html
<mu-container>
  <mu-flex justify-content="between" align-items="end" wrap="wrap">
    <mu-paper :z-depth="1" class="demo-date-picker">
      <mu-date-picker :date.sync="date"></mu-date-picker>
    </mu-paper>
    <mu-paper :z-depth="1" class="demo-date-picker">
      <mu-date-picker landscape :date.sync="date"></mu-date-picker>
    </mu-paper>
  </mu-flex>
</mu-container>
<script>
export default {
  data () {
    return {
      date: undefined
    };
  }
}
</script>
<style>
.demo-date-picker {
  margin: 8px;
}
</style>
```
:::

## 选择月份和年份

:::demo
```html
<mu-container>
  <mu-flex wrap="wrap">
    <mu-paper :z-depth="1" class="demo-date-picker">
      <mu-date-picker type="month" :date.sync="date1"></mu-date-picker>
    </mu-paper>
    <mu-paper :z-depth="1" class="demo-date-picker">
      <mu-date-picker type="year" :date.sync="date2"></mu-date-picker>
    </mu-paper>
  </mu-flex>
</mu-container>
<script>
export default {
  data () {
    return {
      date1: undefined,
      date2: undefined
    };
  }
}
</script>
<style>
.demo-date-picker {
  margin: 8px;
}
</style>
```
:::

## 不可选择日期

:::demo
```html
<mu-container>
  <mu-flex wrap="wrap">
    <mu-paper :z-depth="1" class="demo-date-picker">
      <mu-date-picker :should-disable-date="allowedDates" :date.sync="date3"></mu-date-picker>
    </mu-paper>
  </mu-flex>
</mu-container>
<script>
export default {
  data () {
    return {
      date3: undefined
    };
  }
}
</script>
<style>
.demo-date-picker {
  margin: 8px;
}
</style>
```
:::

##  不同语言环境

通过自定义 `date-time-format` 来格式化不同语言的显示

:::demo
```html
<mu-container>
  <mu-flex wrap="wrap">
    <mu-paper :z-depth="1" class="demo-date-picker">
      <mu-date-picker :date-time-format="enDateFormat" :date.sync="date4"></mu-date-picker>
    </mu-paper>
  </mu-flex>
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
      date4: undefined,
      enDateFormat
    }
  }
};
</script>
<style>
.demo-date-picker {
  margin: 8px;
}
</style>
```
:::

## Date Picker Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| color | 日期选择器颜色 | String | — | — |
| display-color | 时间显示区域背景色 | String | - | - |
| date | 选择日期，支持 `.sync` 修饰符 | Date | — | new Date() |
| type | 选择的类型 | String | date/year/month | date |
| date-time-format | 日期格式化对象，用于改变不同的语言环境显示 | Object | — | — |
| first-day-of-week | 哪一天作为一个星期的开始 | Number | 0-6 | 0 |
| max-date | 最大可选择日期 | Date | — | — |
| min-date | 最小可选择日期 | Date | — | — |
| landscape | 是否横屏显示 | Boolean | — | false |
| no-display | 是否不存在日期显示部分 | Boolean | — | false |
| should-disable-date | 判断日期是否不可用的函数 | Function | — | — |

## Date Picker Events

| 名称 | 介绍 | 回调参数 |
|------|-----|--------|
| change | 当选择日期改变时触发事件 | (date) |

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
      date: undefined,
      date1: undefined,
      date2: undefined,
      date3: undefined,
      date4: undefined,
      enDateFormat
    };
  },
  methods: {
    allowedDates (date) {
      return date.getDate() % 2 === 0
    }
  }
}
</script>
<style>
.demo-date-picker {
  margin: 8px;
}
</style>
