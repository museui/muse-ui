# Time input Box

The `mu-date-input` is used to select date. Combine `mu-text-field`、`mu-date-picker` and `mu-time-picker` together to form a new component.

## Example

:::demo
```html
<mu-container>
  <mu-row gutter>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input v-model="value1" label="select date" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input v-model="value2" label="horizontal screen display" label-float full-width landscape></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input v-model="value3" label="hide date display" label-float full-width no-display></mu-date-input>
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

## Different display ways

Change the `container` property to change the different pop-up modes, there are now `popover`, `dialog` and `bottomSheet` three ways

:::demo
```html
<mu-container>
  <mu-row gutter>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" icon="today" v-model="value4" label="popover display" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value5" label="dialog display" container="dialog" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value6" label="bottomSheet display" container="bottomSheet" label-float full-width></mu-date-input>
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

## Different select modes

:::demo
```html
<mu-container>
  <mu-row gutter>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value7" label="select date" type="date" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" landscape v-model="value8" label="select time" type="time" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value9" label="select year" type="year" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value10" label="select month" type="month" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value11" label="select dateTime" type="dateTime" label-float full-width landscape></mu-date-input>
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


## Select control

Format text, display mode changes, and disable selection of dates.

:::demo
```html
<mu-container>
  <mu-row gutter>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" type="time" v-model="value12" label="display ok/cancel button" actions label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value13" label="format display" format="YYYY 年 MM 月 DD 日" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value14" label="not display date" no-display label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value15" label="can only select the current month"  :max-date="maxDate" :min-date="minDate" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value16" label="can only select working days"  :should-disable-date="disableWeekends" label-float full-width></mu-date-input>
    </mu-col>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value17" label="Can only select even date"  :should-disable-date="allowedDates" label-float full-width></mu-date-input>
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

## Different language environments

Format the display of different languages by customizing `date-time-format`.

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
    <p>mu-date-input supports all native properties and events for input tags.</p>
    <p style="margin-bottom: 0">mu-date-input parsing and formatting depends on the <a style="color: inherit;" target="_blank" href="https://github.com/iamkun/dayjs/blob/master/docs/en/API-reference.md">dayjs</a></p>
  </div>
</mu-alert>

## Date Input props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| container | popup mode | String | popover/dialog/bottomSheet  | popover |
| type | selection type | String | date/time/year/month/dateTime | date |
| clock-type | time picker display type | String | ampm/24hr | ampm |
| view-type | time selection mode | String | clock/list| clock |
| format | format displayed in the input box | String | — | yyyy—MM-dd  |
| actions | whether to display the ok/cancel button at the bottom | Boolean | — | false |
| ok-label | ok button text | String | — | ok |
| cancel-label | cancel button text | String | — | cancel |
| value | used for `v-model` bindings | Date, String | — | — |
| value-format | the format of the bound value. If not specified, the binding value is a Date object. | String | - |
| color | input box color | String | — | — |
| display-color | time display area background color | String | - | - |
| icon | the icon to the left of the input box | String | — | — |
| label | label text | String | — | — |
| label-float | whether the label floats | Boolean | — | false |
| error-text | Error reminder text, if this parameter has a value, then the input box will be converted to the wrong state, the display effect will change | String | — | — |
| help-text | help text | String | — | — |
| full-width | whether the width is set to 100%, default 256px | Boolean | — | false |
| disabled |  whether the input box is not available | Boolean | — | false |
| action-icon | the icon to the right of the input box | String | — | — |
| action-click | function executed after icon click | Function | — | — |

| solo | change the style, and then hide the underline and label of the input box after setting | Boolean | — | false |
| underline-color | underline color  | String | - | - |
| prefix | input box prefix content | String | — | — |
| suffix | input box tail content | String | — | — |
| date-time-format | date format object, used to change the display of different language environments | Object | — | — |
| first-day-of-week | which day as the beginning of the one week | Number | 0-6 | 0 |
| max-date | maximum selectable date | Date | — | — |
| min-date | minimum selectable date | Date | — | — |
| landscape | whether horizontal screen display | Boolean | — | false |
| no-display | whether the time display section does not exist  | Boolean | — | false |
| should-disable-date | function to determine whether a date is not available | Function | — | — |

## Date Input Events

| Attribute | Description | Parameters |
|-----|------|-----|
| change | trigger when the value change | (value) |

## Date Input Slots

| Name | Description |
|-----|------|
| prepend | input box front content |
| append | input box post content |
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
