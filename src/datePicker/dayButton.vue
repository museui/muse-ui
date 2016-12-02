<script>
import {isPc} from '../utils'
export default {
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    date: {
      type: Date
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      hover: false
    }
  },
  computed: {
    isNow () {
      const now = new Date()
      return this.date && this.date.getYear() === now.getYear() && this.date.getMonth() === now.getMonth() && this.date.getDate() === now.getDate()
    },
    dayButtonClass () {
      return {
        selected: this.selected,
        hover: this.hover,
        'mu-day-button': true,
        disabled: this.disabled,
        now: this.isNow
      }
    }
  },
  methods: {
    handleHover () {
      if (isPc() && !this.disabled) this.hover = true
    },
    handleHoverExit () {
      this.hover = false
    },
    handleClick (event) {
      this.$emit('click', event)
    }
  },
  render (h) {
    return this.date ? h('button', {
      class: this.dayButtonClass,
      on: {
        mouseenter: this.handleHover,
        mouseleave: this.handleHoverExit,
        click: this.handleClick
      },
      domProps: {
        disabled: this.disabled
      }
    }, [
      h('div', {class: 'mu-day-button-bg'}),
      h('span', {
        class: 'mu-day-button-text',
        domProps: {
          innerHTML: this.date.getDate()
        }
      })
    ]) : h('span', {class: 'mu-day-empty'})
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-day-button {
  display: inline-block;
  background: none;
  user-select: none;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  margin: 0px;
  padding: 4px 0px;
  font-size: inherit;
  font-weight: 400;
  position: relative;
  border: 10px;
  width: 42px;
  &.disabled{
    opacity: .4;
  }
}

.mu-day-empty {
  font-weight: 400;
  padding: 4px 0px;
  position: relative;
  width: 42px;
}
.mu-day-button-bg {
  position: absolute;
  top: 0;
  left: 4px;
  height: 34px;
  background-color: @primaryColor;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
  transition: all .45s @easeOutFunction;
  width: 34px;
  .mu-day-button.hover &,
  .mu-day-button.selected &{
    transform: scale(1);
  }
  .mu-day-button.hover &{
    opacity: 0.6;
  }
  .mu-day-button.selected &{
    opacity: 1;
  }
}

.mu-day-button-text{
  font-weight: 400;
  position: relative;
  color: @textColor;
  .mu-day-button.now &{
    color: @primaryColor;
  }
  .mu-day-button.hover &,
  .mu-day-button.selected &{
    color: @alternateTextColor;
  }
}
</style>
