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
    }
  },
  render (h) {
    const Clock = h(clock, {
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
    })
    return h('div', {
      style: {
        'margin-top': '-28px'
      }
    }, this.open ? [
      this.container === 'dialog' ? h(dialog, {
        class: ['mu-time-picker-dialog', this.mode],
        on: {
          close: this.handleClose
        }
      }, [Clock]) : h(popover, {
        props: {
          trigger: this.trigger
        },
        on: {
          close: this.handleClose
        }
      }, [Clock])
    ] : [])
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
