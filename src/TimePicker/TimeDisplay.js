export default {
  props: {
    affix: {
      type: String,
      default: '',
      validator (val) {
        return ['', 'pm', 'am'].indexOf(val) !== -1;
      }
    },
    format: {
      type: String,
      validator (val) {
        return val && ['ampm', '24hr'].indexOf(val) !== -1;
      }
    },
    mode: {
      type: String,
      default: 'hour',
      validator (val) {
        return ['hour', 'minute'].indexOf(val) !== -1;
      }
    },
    selectedTime: {
      type: Date,
      default () {
        return new Date();
      },
      required: true
    }
  },
  computed: {
    sanitizeTime () {
      let hour = this.selectedTime.getHours();
      let min = this.selectedTime.getMinutes().toString();
      if (this.format === 'ampm') {
        hour %= 12;
        hour = hour || 12;
      }
      hour = hour.toString();
      if (hour.length < 2) hour = `0${hour}`;
      if (min.length < 2) min = `0${min}`;
      return [hour, min];
    }
  },
  methods: {
    handleSelectAffix (affix) {
      this.$emit('selectAffix', affix);
    },
    handleSelectHour () {
      this.$emit('selectHour');
    },
    handleSelectMin () {
      this.$emit('selectMin');
    }
  },
  render (h) {
    const displayTime = h('div', {
      staticClass: 'mu-time-display-time'
    }, [
      h('span', {
        staticClass: 'mu-time-display-clickable',
        class: {
          'inactive': this.mode === 'minute'
        },
        on: {
          click: this.handleSelectHour
        }
      }, this.sanitizeTime[0]),
      h('span', {}, ':'),
      h('span', {
        staticClass: 'mu-time-display-clickable',
        class: {
          'inactive': this.mode === 'hour'
        },
        on: {
          click: this.handleSelectMin
        }
      }, this.sanitizeTime[1])
    ]);

    const displayAffix = this.format === 'ampm' ? h('div', {
      staticClass: 'mu-time-display-affix'
    }, [
      h('div', {
        staticClass: 'mu-time-display-clickable',
        class: {
          'inactive': this.affix === 'am'
        },
        on: {
          click: () => this.handleSelectAffix('pm')
        }
      }, 'PM'),
      h('div', {
        staticClass: 'mu-time-display-clickable',
        class: {
          'inactive': this.affix === 'pm'
        },
        on: {
          click: () => this.handleSelectAffix('am')
        }
      }, 'AM')
    ]) : undefined;
    return h('div', {
      staticClass: 'mu-time-display'
    }, [
      h('div', {
        staticClass: 'mu-time-display-text'
      }, [
        this.format === 'ampm' ? h('div', {
          staticClass: 'mu-time-display-affix'
        }) : undefined,
        displayTime,
        displayAffix
      ])
    ]);
  }
};
