import keycode from 'keycode';
import FocusRipple from '../internal/FocusRipple';
import color from '../internal/mixins/color';

export default {
  name: 'mu-slider',
  mixins: [color],
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 0.1
    },
    thumbColor: String,
    trackColor: String,
    disabled: Boolean,
    displayValue: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      active: false,
      hover: false,
      focused: false,
      dragging: false
    };
  },
  computed: {
    percent () {
      const percentNum = (this.value - this.min) / (this.max - this.min) * 100;
      return percentNum > 100 ? 100 : percentNum < 0 ? 0 : percentNum;
    }
  },
  created () {
    this.handleDragMouseMove = this.handleDragMouseMove.bind(this);
    this.handleMouseEnd = this.handleMouseEnd.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  },
  methods: {
    handleKeydown (e) {
      const { min, max, step } = this;
      let action;
      switch (keycode(e)) {
        case 'page down':
        case 'down':
          action = 'decrease';
          break;
        case 'left':
          action = 'decrease';
          break;
        case 'page up':
        case 'up':
          action = 'increase';
          break;
        case 'right':
          action = 'increase';
          break;
        case 'home':
          action = 'min';
          break;
        case 'end':
          action = 'max';
          break;
      }
      let value = this.value;
      if (action) {
        e.preventDefault();
        switch (action) {
          case 'decrease':
            value -= step;
            break;
          case 'increase':
            value += step;
            break;
          case 'min':
            value = min;
            break;
          case 'max':
            value = max;
            break;
        }

        value = parseFloat(value.toFixed(5));

        if (value > max) {
          value = max;
        } else if (value < min) {
          value = min;
        }
      }
      this.$emit('change', value);
    },
    handleMouseDown (e) {
      if (this.disabled) return;
      this.setValue(e);
      e.preventDefault();
      document.addEventListener('mousemove', this.handleDragMouseMove);
      document.addEventListener('mouseup', this.handleMouseEnd);
      this.$el.focus();
      this.onDragStart(e);
    },
    handleMouseUp () {
      if (this.disabled) return;
      this.active = false;
    },
    handleTouchStart (e) {
      if (this.disabled) return;
      this.setValue(e.touches[0]);

      document.addEventListener('touchmove', this.handleTouchMove);
      document.addEventListener('touchup', this.handleTouchEnd);
      document.addEventListener('touchend', this.handleTouchEnd);
      document.addEventListener('touchcancel', this.handleTouchEnd);

      e.preventDefault();
      this.onDragStart(e);
    },
    handleTouchEnd (e) {
      if (this.disabled) return;
      document.removeEventListener('touchmove', this.handleTouchMove);
      document.removeEventListener('touchup', this.handleTouchEnd);
      document.removeEventListener('touchend', this.handleTouchEnd);
      document.removeEventListener('touchcancel', this.handleTouchEnd);
      this.onDragStop(e);
    },
    handleFocus () {
      if (this.disabled) return;
      this.focused = true;
    },
    handleBlur () {
      if (this.disabled) return;
      this.focused = false;
    },
    handleMouseEnter () {
      if (this.disabled) return;
      this.hover = true;
    },
    handleMouseLeave () {
      if (this.disabled) return;
      this.hover = false;
    },
    // 从点击位置更新 value
    setValue (e) {
      const { $el, max, min, step } = this;
      let value = (e.clientX - $el.getBoundingClientRect().left) / $el.offsetWidth * (max - min);
      value = Math.round(value / step) * step + min;
      value = parseFloat(value.toFixed(5));

      if (value > max) {
        value = max;
      } else if (value < min) {
        value = min;
      }
      this.$emit('change', value);
    },
    // 拖拽控制
    onDragStart (e) {
      this.dragging = true;
      this.active = true;
      this.$emit('drag-start', e);
    },
    onDragUpdate (e) {
      if (this.dragRunning) return;
      this.dragRunning = true;
      window.requestAnimationFrame(() => {
        this.dragRunning = false;
        if (!this.disabled) this.setValue(e);
      });
    },
    onDragStop (e) {
      this.dragging = false;
      this.active = false;
      this.$emit('drag-stop', e);
    },
    handleDragMouseMove (e) {
      this.onDragUpdate(e);
    },
    handleTouchMove (e) {
      this.onDragUpdate(e.touches[0]);
    },
    handleMouseEnd (e) {
      document.removeEventListener('mousemove', this.handleDragMouseMove);
      document.removeEventListener('mouseup', this.handleMouseEnd);
      this.onDragStop(e);
    }
  },
  render (h) {
    const colorClass = this.getNormalColorClass(this.color, true);
    const color = this.getColor(this.color);
    const thumbColorClass = this.getNormalColorClass(this.thumbColor);
    const thumbColor = this.getColor(this.thumbColor);
    const thumbTextColorClass = this.getNormalColorClass(this.thumbColor, true);
    const trackColorClass = this.getNormalColorClass(this.trackColor);
    const trackColor = this.getColor(this.trackColor);

    const percent = this.percent + '%';

    const input = h('input', {
      attrs: {
        ...this.$attrs,
        type: 'hidden',
        value: this.value
      }
    });

    const displayValue = this.displayValue ? h('div', {
      staticClass: 'mu-slider-display-value ' + thumbColorClass,
      style: {
        left: percent,
        'background-color': thumbColor
      }
    }, [
      h('span', {
        staticClass: 'display-value-text'
      }, this.value)
    ]) : undefined;

    const thumb = h('div', {
      staticClass: ['mu-slider-thumb', thumbColorClass, thumbTextColorClass].join(' '),
      style: {
        left: this.percent + '%',
        color: thumbColor,
        'background-color': thumbColor
      }
    }, [
      (this.focused || this.hover) && !this.active ? h(FocusRipple) : undefined
    ]);

    return h('div', {
      staticClass: 'mu-slider ' + colorClass,
      class: {
        zero: this.value <= this.min,
        active: this.active,
        'display-value': this.displayValue && this.active,
        disabled: this.disabled
      },
      style: { color },
      attrs: {
        tabindex: this.disabled ? -1 : 0
      },
      on: {
        ...this.$listeners,
        focus: this.handleFocus,
        blur: this.handleBlur,
        keydown: this.handleKeydown,
        touchstart: this.handleTouchStart,
        touchend: this.handleTouchEnd,
        touchcancel: this.handleTouchEnd,
        mousedown: this.handleMouseDown,
        mouseup: this.handleMouseUp,
        mouseenter: this.handleMouseEnter,
        mouseleave: this.handleMouseLeave
      }
    }, [
      input,
      displayValue,
      h('div', {
        staticClass: `mu-slider-track ${trackColorClass}`,
        style: {
          'background-color': trackColor
        }
      }),
      h('div', { staticClass: 'mu-slider-fill', style: { width: percent }}),
      thumb
    ]);
  }
};
