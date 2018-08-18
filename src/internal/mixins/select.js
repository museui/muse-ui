import TouchRipple from '../TouchRipple';
import keycode from 'keycode';
import color from './color';
import ripple from './ripple';

export default function (type = 'checkbox') { // checkbox
  const iconProps = type === 'switch' ? {} : { uncheckIcon: String, checkedIcon: String };
  return {
    mixins: [color, ripple],
    inheritAttrs: false,
    inject: {
      muFormItem: {
        default: ''
      }
    },
    model: {
      prop: 'inputValue',
      event: 'change'
    },
    props: {
      label: String,
      labelLeft: Boolean,
      readonly: Boolean,
      ...iconProps,
      disabled: Boolean,
      tabIndex: [Number, String]
    },
    methods: {
      start (event) {
        if (this.disabled) return;
        if (this.ripple && (event.type !== 'mousedown' || event.button === 0)) {
          this.$refs.ripple.start(event);
        }
        this.$emit(event.type, event);
      },
      end (event) {
        if (this.disabled) return;
        if (this.ripple) this.$refs.ripple.end();
        if (event) this.$emit(event.type, event);
      },
      handleClick (e) {
        if (this.disabled || this.readonly) return;
        this.end();
        this.toggle();
        if (!this) return; // #1136
        this.muFormItem && this.muFormItem.onBlur();
        this.$emit('click', e);
      },
      handleKeydown (e) {
        if (this.disabled) return;
        this.end(e);
        if (keycode(e) === 'enter' && !this.readonly) this.handleClick(e);
      },
      createRipple (h, staticClass, children) {
        return this.disabled || !this.ripple ? h('div', {
          staticClass
        }, children) : h(TouchRipple, {
          staticClass,
          props: {
            rippleWrapperClass: `mu-${type}-ripple-wrapper`,
            centerRipple: true,
            color: this.rippleColor,
            opacity: this.rippleOpacity
          },
          ref: 'ripple'
        }, children);
      },
      createInputElement (h) {
        return h('input', {
          attrs: {
            ...this.$attrs,
            type: type === 'switch' ? 'checkbox' : type,
            disabled: this.disabled,
            checked: this.checked,
            readonly: this.readonly,
            tabindex: -1
          }
        });
      },
      createSelect (h, view) {
        const colorClass = this.getNormalColorClass(this.color, true);
        const label = this.label ? h('div', { staticClass: `mu-${type}-label` }, this.label) : undefined;
        const wrapper = h('div', {
          staticClass: `mu-${type}-wrapper`
        }, this.labelLeft ? [label, view] : [view, label]);

        return h('div', {
          staticClass: `mu-${type} ${this.checked ? colorClass : ''}`,
          attrs: {
            tabindex: this.disabled ? -1 : this.tabIndex ? this.tabIndex : 0
          },
          style: {
            color: this.checked && !this.disabled ? this.getColor(this.color) : ''
          },
          class: {
            'label-left': this.labelLeft,
            'disabled': this.disabled,
            [`mu-${type}-checked`]: this.checked,
            'no-label': !this.label
          },
          on: {
            ...this.$listeners,
            click: this.handleClick,
            keydown: this.handleKeydown,
            mousedown: this.start,
            mouseleave: this.end,
            mouseup: this.end,
            touchstart: this.start,
            touchend: this.end,
            touchcancel: this.end,
            focus: this.start,
            blur: this.end
          }
        }, [
          this.createInputElement(h),
          wrapper
        ]);
      }
    }
  };
}
