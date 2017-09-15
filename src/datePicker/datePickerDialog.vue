<script>
import {dateTimeFormat} from './dateUtils'
import popover from '../popover'
import dialog from '../dialog'
import calendar from './calendar'
export default {
  props: {
    dateTimeFormat: {
      type: Object,
      default: dateTimeFormat
    },
    autoOk: {
      type: Boolean
    },
    cancelLabel: {
      type: String
    },
    okLabel: {
      type: String
    },
    container: {
      type: String,
      default: 'dialog',
      validator (val) {
        return val && ['dialog', 'inline'].indexOf(val) !== -1
      }
    },
    disableYearSelection: {
      type: Boolean
    },
    firstDayOfWeek: {
      type: Number
    },
    initialDate: {
      type: Date,
      default () {
        return new Date()
      }
    },
    maxDate: {
      type: Date
    },
    minDate: {
      type: Date
    },
    mode: {
      type: String,
      default: 'portrait',
      validator (val) {
        return val && ['portrait', 'landscape'].indexOf(val) !== -1
      }
    },
    shouldDisableDate: {
      type: Function
    }
  },
  data () {
    return {
      open: false,
      showCalendar: false,
      trigger: null
    }
  },
  mounted () {
    this.trigger = this.$el
  },
  methods: {
    handleAccept (date) {
      this.$emit('accept', date)
      this.open = false
    },
    handleDismiss () {
      this.dismiss()
    },
    handleClose (reson) {
      this.dismiss()
    },
    dismiss () {
      this.open = false
      this.$emit('dismiss')
    },
    handleMonthChange (date) {
      this.$emit('monthChange', date)
    },
    handleYearChange (date) {
      this.$emit('yearChange', date)
    },
    hideCanlendar () {
      this.showCalendar = false
    }
  },
  watch: {
    open (val) {
      if (val) this.showCalendar = true
    }
  },
  render (h) {
    const Calendar = this.showCalendar ? h(calendar, {
      props: {
        autoOk: this.autoOk,
        dateTimeFormat: this.dateTimeFormat,
        okLabel: this.okLabel,
        cancelLabel: this.cancelLabel,
        disableYearSelection: this.disableYearSelection,
        shouldDisableDate: this.shouldDisableDate,
        firstDayOfWeek: this.firstDayOfWeek,
        initialDate: this.initialDate,
        maxDate: this.maxDate,
        minDate: this.minDate,
        mode: this.mode
      },
      on: {
        accept: this.handleAccept,
        dismiss: this.handleDismiss,
        monthChange: this.handleMonthChange,
        yearChange: this.handleYearChange
      }
    }) : ''
    return h('div', {
      style: {
        // 'margin-top': '-28px'
      }
    }, [
      this.container === 'dialog' ? h(dialog, {
        props: {
          open: this.open,
          dialogClass: ['mu-date-picker-dialog', this.mode]
        },
        on: {
          close: this.handleClose,
          hide: this.hideCanlendar
        }
      }, [Calendar]) : h(popover, {
        props: {
          trigger: this.trigger,
          overlay: false,
          open: this.open
        },
        on: {
          close: this.handleClose,
          hide: this.hideCanlendar
        }
      }, [Calendar])
    ])
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-date-picker-dialog {
   width: 310px;
  &.landscape {
    width: 479px;
    .mu-dialog-body {
      min-height: 330px;
      min-width: 479px;
    }
  }
  .mu-dialog-body {
    padding: 0;
    min-height: 434px;
    min-width: 310px;
  }
}
</style>
