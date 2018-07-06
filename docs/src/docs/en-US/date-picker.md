# Date picker

The `mu-date-picker` is used to select date.

## Example

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

## Select month and year

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

## No Date selected

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

## Different language environments

Format the display of different languages by customizing `date-time-format`.

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
| color | date picker color | String | — | — |
| display-color | time display area background color | String | - | - |
| date | select date, support `sync` modifier | Date | — | new Date() |
| type | selection type | String | date/year/month | date |
| date-time-format | date format object, used to change the display of different language environments | Object | — | — |
| first-day-of-week | which day as the beginning of the one week | Number | 0-6 | 0 |
| max-date | maximum selectable date | Date | — | — |
| min-date | minimum selectable date | Date | — | — |
| landscape | whether horizontal screen display | Boolean | — | false |
| no-display | whether the time display section does not exist | Boolean | — | false |
| should-disable-date | function to determine whether a date is not available | Function | — | — |

## Date Picker Events

| Attribute | Description | Parameters |
|------|-----|--------|
| change | trigger when selection date changes | (date) |

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
