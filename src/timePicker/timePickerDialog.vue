<script>
import clock from './clock'
import popover from '../popover'
import dialog from '../dialog'
export default {
  props: {
    autoOk: {
      type: Boolean,
      default: false
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
    mode: {
      type: String,
      default: 'portrait',
      validator (val) {
        return val && ['portrait', 'landscape'].indexOf(val) !== -1
      }
    },
    format: {
      type: String,
      default: 'ampm',
      validator (val) {
        return ['ampm', '24hr'].indexOf(val) !== -1
      }
    },
    initialTime: {
      type: Date
    }
  },
  data () {
    return {
      open: false,
      showClock: false,
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
    dismiss () {
      this.open = false
      this.$emit('dismiss')
    },
    hideClock () {
      this.showClock = false
    }
  },
  watch: {
    open (val) {
      if (val) this.showClock = true
    }
  },
  render (h) {
    const Clock = this.showClock ? h(clock, {
      props: {
        autoOk: this.autoOk,
        cancelLabel: this.cancelLabel,
        okLabel: this.okLabel,
        landscape: this.mode === 'landscape',
        initialTime: this.initialTime,
        format: this.format
      },
      on: {
        accept: this.handleAccept,
        dismiss: this.handleDismiss
      }
    }) : undefined
    return h('div', {
    }, [
      this.container === 'dialog' ? h(dialog, {
        props: {
          open: this.open,
          dialogClass: ['mu-time-picker-dialog', this.mode]
        },
        on: {
          close: this.handleClose,
          hide: this.hideClock
        }
      }, [Clock]) : h(popover, {
        props: {
          trigger: this.trigger,
          overlay: false,
          open: this.open
        },
        on: {
          close: this.handleClose,
          hide: this.hideClock
        }
      }, [Clock])
    ])
  }
}
</script>

<style lang="less">
.mu-time-picker-dialog{
  width: 280px;
 &.landscape {
   width: 479px;
   .mu-dialog-body {
     min-height: 352px;
     min-width: 479px;
   }
 }
 .mu-dialog-body {
   padding: 0;
   min-height: 450px;
   min-width: 280px;
 }
}
</style>
