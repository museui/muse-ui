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
      <mu-date-input v-model="value4" label="popover 显示" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input v-model="value5" label="对话框显示" container="dialog" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input v-model="value6" label="底部弹出显示" container="bottomSheet" label-float full-width></mu-date-input>
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
      <mu-date-input v-model="value7" label="选择日期" type="date" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input v-model="value8" label="选择时间" type="time" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input v-model="value9" label="选择年份" type="year" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input v-model="value10" label="选择月份" type="month" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input v-model="value11" label="选择日期和时间" type="dateTime" label-float full-width landscape></mu-date-input>
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
      <mu-date-input v-model="value12" label="显示确定/取消按钮" actions label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input v-model="value13" label="格式化显示: yyyy 年 MM 月 dd 日" format="yyyy 年 MM 月 dd 日" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input v-model="value14" label="不展示日期" no-display label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input v-model="value15" label="只能选择当前月份"  :max-date="maxDate" :min-date="minDate" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input v-model="value16" label="只能选工作日"  :should-disable-date="disableWeekends" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input v-model="value17" label="只能选择偶数日期"  :should-disable-date="allowedDates" label-float full-width></mu-date-input>
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

通过自定义 dateTimeFormat 来格式化不同语言的显示

:::demo
```html
<mu-container>
  <mu-row gutter>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input v-model="value18" label="English" label-float full-width :date-time-format="enDateFormat"></mu-date-input>
    </mu-col>
  </mu-row>
</mu-container>
<script>
const dayAbbreviation = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']l
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
