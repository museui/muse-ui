import input from '../internal/mixins/input';
import clickOutSide from '../internal/directives/click-outside';
import Popover from '../Popover';
import { List, ListItem } from '../List';
import keycode from 'keycode';
import caseSensitiveFilter from './filter';
import { isPromise } from '../utils';

export default {
  name: 'mu-auto-complete',
  mixins: [input],
  directives: {
    'click-outside': clickOutSide
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    maxHeight: {
      type: [String, Number],
      default: 300
    },
    debounce: {
      type: Number,
      default: 200,
      validator (val) {
        return val > 0;
      }
    },
    filter: {
      type: Function,
      default: caseSensitiveFilter
    },
    maxSearchResults: {
      type: Number,
      default: 0
    },
    openOnFocus: Boolean,
    dense: {
      type: Boolean,
      default: true
    },
    textline: List.props.textline,
    popoverClass: String,
    placement: {
      type: String,
      default: 'bottom-start'
    },
    space: Number,
    avatar: Boolean
  },
  data () {
    return {
      open: false,
      enableData: [],
      focusIndex: -1
    };
  },
  methods: {
    setValue (value, item, e) {
      this.open = false;
      this.focusIndex = -1;
      if (!item) return;
      this.$emit('input', value, e);
      this.$emit('select', value, item, e);
      this.$emit('change', value, e);
    },
    onKeydown (e) {
      if (this.disabled || this.$attrs.readonly) return;
      const code = keycode(e);
      const maxIndex = this.enableData.length - 1;
      const minIndex = 0;
      switch (code) {
        case 'enter':
          if (this.focusIndex === -1) return;
          const { value, item } = this.enableData[this.focusIndex];
          this.setValue(value, item, e);
          break;
        case 'up':
          event.preventDefault();
          if (!this.open) return;
          this.focusIndex--;
          if (this.focusIndex < minIndex) this.focusIndex = maxIndex;
          break;
        case 'down':
          event.preventDefault();
          if (!this.open) return;
          this.focusIndex++;
          if (this.focusIndex > maxIndex) this.focusIndex = minIndex;
          break;
        case 'tab':
          this.blur(e);
          break;
        default:
          this.focusIndex = -1;
          break;
      }
      this.$emit('keydown', e);
    },
    onInput (e) {
      const value = e.target.value;
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.filterData(value);
      }, this.debounce);
      this.$emit('input', value, e);
    },
    focus (e) {
      this.isFocused = true;
      if (this.openOnFocus) this.filterData(this.value);
      this.$emit('focus', e);
    },
    filterData (val) {
      this.open = true;
      const results = this.filter(val, this.data, this.maxSearchResults);
      switch (true) {
        case Array.isArray(results):
          this.enableData = results;
          return;
        case isPromise(results):
          results.then((results) => {
            this.enableData = Array.isArray(results) ? results : [];
          });
          return;
      }
      this.enableData = [];
    },
    blur (e) {
      this.isFocused = false;
      this.focusIndex = -1;
      this.open = false;
      this.$emit('blur', e);
    },
    setScollPosition (index) {
      if (!this.open) return;
      this.$nextTick(() => {
        const popoverEl = this.$refs.list.$el;
        const optionEl = popoverEl.querySelector('.is-focused');
        if (!optionEl) return;
        const optionHeight = optionEl.offsetHeight;
        let scrollTop = optionEl.offsetTop - optionHeight;
        if (scrollTop < optionHeight) scrollTop = 0;
        popoverEl.scrollTop = scrollTop;
      });
    },
    createTextField (h) {
      const listeners = {
        ...this.$listeners,
        input: this.onInput,
        change: (e) => this.$emit('change', e.target.value, e),
        keydown: this.onKeydown,
        focus: this.focus
      };
      const placeholder = !this.labelFloat ? this.$attrs.placeholder : '';
      return [
        h('input', {
          staticClass: 'mu-text-field-input',
          ref: 'input',
          attrs: {
            tabindex: 0,
            ...this.$attrs,
            disabled: this.disabled,
            placeholder
          },
          domProps: {
            value: this.value
          },
          on: listeners
        })
      ];
    },
    createContentList (h) {
      return h(List, {
        staticClass: 'mu-option-list',
        ref: 'list',
        props: {
          dense: this.dense,
          textline: this.textline
        },
        style: {
          'maxHeight': this.maxHeight + 'px'
        }
      }, this.enableData.map((item, index) => {
        return h(ListItem, {
          staticClass: 'mu-option',
          class: {
            'is-focused': this.focusIndex === index
          },
          props: {
            button: true,
            avatar: this.avatar
          },
          on: {
            click: (e) => this.setValue(item.value, item.item, e)
          }
        }, this.$scopedSlots.default ? this.$scopedSlots.default({
          ...item,
          index
        }) : [
          h('span', {
            domProps: {
              innerHTML: item.highlight
            }
          })
        ]);
      }));
    }
  },
  render (h) {
    const trigger = this.$refs.input;
    return this.createInput(h, {
      staticClass: 'mu-text-field',
      ref: 'content',
      directives: [{
        name: 'click-outside',
        value: (e) => {
          if (this.$refs.popover.$el.contains(e.target)) return;
          this.blur(e);
        }
      }]
    }, [
      this.createTextField(h),
      this.$slots.default,
      h(Popover, {
        staticClass: [this.popoverClass || ''].join(' '),
        props: {
          trigger: trigger,
          placement: this.placement,
          space: this.space,
          open: this.open
        },
        on: {
          close: () => (this.open = false)
        },
        ref: 'popover',
        style: {
          'visibility': this.enableData.length === 0 ? 'hidden' : '',
          'min-width': trigger ? trigger.offsetWidth + 'px' : ''
        }
      }, [
        this.createContentList(h),
        this.$slots.popover
      ])
    ]);
  },
  watch: {
    focusIndex () {
      this.setScollPosition();
    }
  }
};
