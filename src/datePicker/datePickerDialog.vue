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
      type: Date
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
    handleClose () {
      this.dismiss()
    },
    show () {
      this.$emit('show')
      this.open = true
    },
    dismiss () {
      this.open = false
      this.$emit('dismiss')
    }
  },
  render (h) {
    const Calendar = h(calendar, {
      props: {
        autoOk: this.autoOk,
        dateTimeFormat: this.dateTimeFormat,
        okLabel: this.okLabel,
        cancelLabel: this.cancelLabel,
        disableYearSelection: this.disableYearSelection,
        firstDayOfWeek: this.firstDayOfWeek,
        initialDate: this.initialDate,
        maxDate: this.maxDate,
        minDate: this.minDate,
        mode: this.mode
      },
      on: {
        accept: this.handleAccept,
        dismiss: this.handleDismiss
      }
    })
    return h('div', {}, this.open ? [
      this.container === 'dialog' ? h(dialog, {
        class: ['mu-date-picker-dialog', this.mode],
        on: {
          close: this.handleClose
        }
      }, [Calendar]) : h(popover, {
        props: {
          trigger: this.trigger
        },
        on: {
          close: this.handleClose
        }
      }, [Calendar])
    ] : [])
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
