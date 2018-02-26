import TouchRipple from '../TouchRipple';
import keycode from 'keycode';

export default function (type = 'checkbox') { // checkbox
  const iconProps = type === 'switch' ? {} : { uncheckIcon: String, checkedIcon: String };
  return {
    inheritAttrs: false,
    model: {
      prop: 'inputValue',
      event: 'change'
    },
    props: {
      label: String,
      labelLeft: Boolean,
      ...iconProps,
      disabled: Boolean,
      tabIndex: [Number, String]
    },
    methods: {
      start (event) {
        if (this.disabled) return;
        if (event.type !== 'mousedown' || event.button === 0) {
          this.$refs.ripple.start(event);
        }
        this.$emit(event.type, event);
      },
      end (event) {
        if (this.disabled) return;
        this.$refs.ripple.end();
        this.$emit(event.type, event);
      },
      handleClick (e) {
        if (this.disabled) return;
        this.toggle();
        this.$emit('click', e);
      },
      handleKeydown (e) {
        if (this.disabled) return;
        this.end(e);
        if (keycode(e) === 'enter') this.handleClick(e);
      },
      createRipple (h, staticClass, children) {
        return this.disabled ? h('div', {
          staticClass
        }, children) : h(TouchRipple, {
          staticClass,
          props: {
            rippleWrapperClass: `mu-${type}-ripple-wrapper`,
            centerRipple: true
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
            tabindex: -1
          }
        });
      },
      createSelect (h, view) {
        const label = this.label ? h('div', { staticClass: `mu-${type}-label` }, this.label) : undefined;
        const wrapper = h('div', {
          staticClass: `mu-${type}-wrapper`
        }, this.labelLeft ? [label, view] : [view, label]);

        return h('div', {
          staticClass: `mu-${type}`,
          attrs: {
            tabindex: this.disabled ? -1 : this.tabIndex ? this.tabIndex : 0
          },
          class: {
            'label-left': this.labelLeft,
            'disabled': this.disabled,
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
