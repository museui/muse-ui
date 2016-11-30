/**
 * material-ui dateUtils.js
 * https://github.com/callemall/material-ui/blob/master/src/DatePicker/dateUtils.js
 */
let localConfig = {
  dayAbbreviation: ['日', '一', '二', '三', '四', '五', '六'],
  dayList: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  monthList: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  monthLongList: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
}

export const dateTimeFormat = {
  formatDisplay (date) {
    var day = date.getDate()
    return `${localConfig.monthList[date.getMonth()]}-${day > 9 ? day : '0' + day} ${localConfig.dayList[date.getDay()]}`
  },
  formatMonth (date) {
    return `${date.getFullYear()} ${localConfig.monthLongList[date.getMonth()]}`
  },
  getWeekDayArray (firstDayOfWeek) {
    let beforeArray = []
    let afterArray = []
    const dayAbbreviation = localConfig.dayAbbreviation
    for (let i = 0; i < dayAbbreviation.length; i++) {
      if (i < firstDayOfWeek) {
        afterArray.push(dayAbbreviation[i])
      } else {
        beforeArray.push(dayAbbreviation[i])
      }
    }
    return beforeArray.concat(afterArray)
  }
}

export function getDaysInMonth (d) {
  const resultDate = getFirstDayOfMonth(d)

  resultDate.setMonth(resultDate.getMonth() + 1)
  resultDate.setDate(resultDate.getDate() - 1)

  return resultDate.getDate()
}

export function getFirstDayOfMonth (d) {
  return new Date(d.getFullYear(), d.getMonth(), 1)
}

export function getWeekArray (d, firstDayOfWeek) {
  const dayArray = []
  const daysInMonth = getDaysInMonth(d)
  const weekArray = []
  let week = []

  for (let i = 1; i <= daysInMonth; i++) {
    dayArray.push(new Date(d.getFullYear(), d.getMonth(), i))
  }

  const addWeek = (week) => {
    const emptyDays = 7 - week.length
    for (let i = 0; i < emptyDays; ++i) {
      week[weekArray.length ? 'push' : 'unshift'](null)
    }
    weekArray.push(week)
  }

  dayArray.forEach((day) => {
    if (week.length > 0 && day.getDay() === firstDayOfWeek) {
      addWeek(week)
      week = []
    }
    week.push(day)
    if (dayArray.indexOf(day) === dayArray.length - 1) {
      addWeek(week)
    }
  })

  return weekArray
}

export function addDays (d, days) {
  const newDate = cloneDate(d)
  newDate.setDate(d.getDate() + days)
  return newDate
}

export function addMonths (d, months) {
  const newDate = cloneDate(d)
  newDate.setMonth(d.getMonth() + months)
  return newDate
}

export function addYears (d, years) {
  const newDate = cloneDate(d)
  newDate.setFullYear(d.getFullYear() + years)
  return newDate
}

export function cloneDate (d) {
  return new Date(d.getTime())
}

export function cloneAsDate (d) {
  const clonedDate = cloneDate(d)
  clonedDate.setHours(0, 0, 0, 0)
  return clonedDate
}

export function isBeforeDate (d1, d2) {
  const date1 = cloneAsDate(d1)
  const date2 = cloneAsDate(d2)

  return (date1.getTime() < date2.getTime())
}

export function isAfterDate (d1, d2) {
  const date1 = cloneAsDate(d1)
  const date2 = cloneAsDate(d2)

  return (date1.getTime() > date2.getTime())
}

export function isBetweenDates (dateToCheck, startDate, endDate) {
  return (!(isBeforeDate(dateToCheck, startDate)) &&
          !(isAfterDate(dateToCheck, endDate)))
}

export function isEqualDate (d1, d2) {
  return d1 && d2 &&
    (d1.getFullYear() === d2.getFullYear()) &&
    (d1.getMonth() === d2.getMonth()) &&
    (d1.getDate() === d2.getDate())
}

export function monthDiff (d1, d2) {
  let m
  m = (d1.getFullYear() - d2.getFullYear()) * 12
  m += d1.getMonth()
  m -= d2.getMonth()
  return m
}

export function yearDiff (d1, d2) {
  return ~~(monthDiff(d1, d2) / 12)
}

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
/**
 * 日期对象转换为指定格式的字符串
 * @param date Date日期对象, 如果缺省，则为当前时间
 * @param f 日期格式,格式定义如下 yyyy-MM-dd HH:mm:ss
 *
 * YYYY/yyyy/YY/yy 表示年份
 * MM/M 月份
 * W/w 星期
 * dd/DD/d/D 日期
 * hh/HH/h/H 时间
 * mm/m 分钟
 * ss/SS/s/S 秒
 * @return string 指定格式的时间字符串
 */
export function dateToStr (date, formatStr) {
  formatStr = formatStr || 'yyyy-MM-dd'
  date = date || new Date()
  var str = formatStr
  str = str.replace(/yyyy|YYYY/, date.getFullYear())
  str = str.replace(/yy|YY/, (date.getYear() % 100) > 9 ? (date.getYear() % 100).toString() : '0' + (date.getYear() % 100))
  str = str.replace(/MM/, addZero(date.getMonth() + 1))
  str = str.replace(/M/g, date.getMonth() + 1)
  str = str.replace(/w|W/g, localConfig.dayAbbreviation[date.getDay()])
  str = str.replace(/dd|DD/, addZero(date.getDate()))
  str = str.replace(/d|D/g, date.getDate())
  str = str.replace(/hh|HH/, addZero(date.getHours()))
  str = str.replace(/h|H/g, date.getHours())
  str = str.replace(/mm/, addZero(date.getMinutes()))
  str = str.replace(/m/g, date.getMinutes())
  str = str.replace(/ss|SS/, addZero(date.getSeconds()))
  str = str.replace(/s|S/g, date.getSeconds())
  return str
}

export function strFormatToDate (val, format) {
  var iVal = 0
  var iFormat = 0
  var c = ''
  var token = ''
  var x, y
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth() + 1
  var date = 1
  var hh = now.getHours()
  var mm = now.getMinutes()
  var ss = now.getSeconds()
  var ampm = ''
  while (iFormat < format.length) {
    c = format.charAt(iFormat)
    token = ''
    while ((format.charAt(iFormat) === c) && (iFormat < format.length)) {
      token += format.charAt(iFormat++)
    }
    // Extract contents of value based on format token
    if (token === 'yyyy' || token === 'YYYY' || token === 'yy' || token === 'YY' || token === 'y' || token === 'Y') {
      if (token === 'yyyy' || token === 'YYYY') {
        x = 4
        y = 4
      }
      if (token === 'yy' || token === 'YY') {
        x = 2
        y = 2
      }
      if (token === 'y' || token === 'Y') {
        x = 2
        y = 4
      }
      year = getInt(val, iVal, x, y)
      if (year == null) {
        return 0
      }
      iVal += year.length
      if (year.length === 2) {
        if (year > 70) {
          year = 1900 + (year - 0)
        } else {
          year = 2000 + (year - 0)
        }
      }
    } else if (token === 'MMM' || token === 'NNN') {
      month = 0
      for (var i = 0; i < MONTH_NAMES.length; i++) {
        var monthName = MONTH_NAMES[i]
        if (val.substring(iVal, iVal + monthName.length).toLowerCase() === monthName.toLowerCase()) {
          if (token === 'MMM' || (token === 'NNN' && i > 11)) {
            month = i + 1
            if (month > 12) {
              month -= 12
            }
            iVal += monthName.length
            break
          }
        }
      }
      if ((month < 1) || (month > 12)) {
        return 0
      }
    } else if (token === 'EE' || token === 'E') {
      for (let i = 0; i < DAY_NAMES.length; i++) {
        let dayName = DAY_NAMES[i]
        if (val.substring(iVal, iVal + dayName.length).toLowerCase() === dayName.toLowerCase()) {
          iVal += dayName.length
          break
        }
      }
    } else if (token === 'MM' || token === 'M') {
      month = getInt(val, iVal, token.length, 2)
      if (month == null || (month < 1) || (month > 12)) {
        return 0
      }
      iVal += month.length
    } else if (token === 'dd' || token === 'd' || token === 'DD' || token === 'D') {
      date = getInt(val, iVal, token.length, 2)
      if (date === null || (date < 1) || (date > 31)) {
        return 0
      }
      iVal += date.length
    } else if (token === 'hh' || token === 'h') {
      hh = getInt(val, iVal, token.length, 2)
      if (hh == null || (hh < 1) || (hh > 12)) {
        return 0
      }
      iVal += hh.length
    } else if (token === 'HH' || token === 'H') {
      hh = getInt(val, iVal, token.length, 2)
      if (hh == null || (hh < 0) || (hh > 23)) {
        return 0
      }
      iVal += hh.length
    } else if (token === 'KK' || token === 'K') {
      hh = getInt(val, iVal, token.length, 2)
      if (hh == null || (hh < 0) || (hh > 11)) {
        return 0
      }
      iVal += hh.length
    } else if (token === 'kk' || token === 'k') {
      hh = getInt(val, iVal, token.length, 2)
      if (hh == null || (hh < 1) || (hh > 24)) {
        return 0
      }
      iVal += hh.length
      hh--
    } else if (token === 'mm' || token === 'm') {
      mm = getInt(val, iVal, token.length, 2)
      if (mm == null || (mm < 0) || (mm > 59)) {
        return 0
      }
      iVal += mm.length
    } else if (token === 'ss' || token === 's' || token === 'SS' || token === 's') {
      ss = getInt(val, iVal, token.length, 2)
      if (ss == null || (ss < 0) || (ss > 59)) {
        return 0
      }
      iVal += ss.length
    } else if (token === 'u') {
      let u = getInt(val, iVal, token.length, 3)
      if (u == null || (u < 0) || (u > 999)) {
        return 0
      }
      iVal += u.length
    } else if (token === 'a') {
      if (val.substring(iVal, iVal + 2).toLowerCase() === 'am') {
        ampm = 'AM'
      } else if (val.substring(iVal, iVal + 2).toLowerCase() === 'pm') {
        ampm = 'PM'
      } else {
        return 0
      }
      iVal += 2
    } else {
      if (val.substring(iVal, iVal + token.length) !== token) {
        return 0
      } else {
        iVal += token.length
      }
    }
  }
  // Is date valid for month?
  if (month === 2) {
    // Check for leap year
    if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) { // leap
      // year
      if (date > 29) {
        return 0
      }
    } else {
      if (date > 28) {
        return 0
      }
    }
  }
  if ((month === 4) || (month === 6) || (month === 9) || (month === 11)) {
    if (date > 30) {
      return 0
    }
  }
  // Correct hours value
  if (hh < 12 && ampm === 'PM') {
    hh = hh - 0 + 12
  } else if (hh > 11 && ampm === 'AM') {
    hh -= 12
  }
  return new Date(year, month - 1, date, hh, mm, ss)
}

function getInt (str, i, minlength, maxlength) {
  for (var x = maxlength; x >= minlength; x--) {
    var token = str.substring(i, i + x)
    if (token.length < minlength) {
      return null
    }
    if (isInteger(token)) {
      return token
    }
  }
  return null
}

function isInteger (val) {
  return (new RegExp(/^\d+$/).test(val))
}

function addZero (val) {
  return val > 9 ? val : '0' + val
}
