import input from '../internal/mixins/input';
import clickOutSide from '../internal/directives/click-outside';
import Popover from '../Popover';
import { List, ListItem } from '../List';
import keycode from 'keycode';

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
    avatar: Boolean
  },
  data () {
    return {
      open: false,
      focusIndex: -1
    };
  },
  computed: {
    enableData () {
      const results = [];
      for (let i = 0; i < this.data.length; i++) {
        const value = this.getValueByItem(this.data[i]);
        if (value.toLowerCase().indexOf((this.value || '').toLowerCase()) !== -1) {
          results.push(this.data[i]);
        }
        if (this.maxSearchResults && this.maxSearchResults === results.length) break;
      }
      return results;
    }
  },
  methods: {
    setValue (item, e) {
      this.open = false;
      this.focusIndex = -1;
      if (!item) return;
      const value = this.getValueByItem(item);
      this.$emit('input', value, e);
      this.$emit('select', value, item, e);
      this.$emit('change', value, e);
    },
    getValueByItem (item) {
      if (!item) return '';
      return typeof item === 'string' ? item : item.value;
    },
    onKeydown (e) {
      if (this.disabled || this.$attrs.readonly) return;
      const code = keycode(e);
      const maxIndex = this.enableData.length - 1;
      const minIndex = 0;
      switch (code) {
        case 'enter':
          if (this.focusIndex === -1) return;
          this.setValue(this.enableData[this.focusIndex], e);
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
      const val = e.target.value;
      if (val) this.open = true;
      this.$emit('input', val, e);
    },
    focus (e) {
      this.isFocused = true;
      if (this.openOnFocus) this.open = true;
      this.$emit('focus', e);
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
        const popoverEl = this.$refs.popover.$el;
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
        props: {
          dense: this.dense,
          textline: this.textline
        }
      }, this.enableData.map((item, index) => {
        const highlight = this.getHighlight(item);
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
            click: (e) => {
              this.setValue(item, e);
            }
          }
        }, this.$scopedSlots.default ? this.$scopedSlots.default({
          item,
          highlight,
          index
        }) : [
          highlight.before,
          h('span', {
            staticClass: 'mu-secondary-text-color'
          }, highlight.highlight),
          highlight.after
        ]);
      }));
    },
    getHighlight (item) {
      const value = this.getValueByItem(item);
      if (!this.value || !this.open) return { before: value, highlight: '', after: '', html: value };
      const index = value.toLowerCase().indexOf(this.value.toLowerCase());
      const before = value.substring(0, index);
      const highlight = value.substring(index, index + this.value.length);
      const after = value.substring(index + this.value.length);
      return {
        before,
        highlight,
        after,
        html: [
          before,
          `<span class="mu-secondary-text-color">${highlight}</span>`,
          after
        ].join('')
      };
    }
  },
  render (h) {
    const trigger = this.$refs.content;
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
        staticClass: 'mu-option-list',
        props: {
          trigger: trigger,
          open: this.open
        },
        on: {
          close: () => (this.open = false)
        },
        ref: 'popover',
        style: {
          'maxHeight': this.maxHeight + 'px',
          'height': this.enableData.length === 0 ? 0 : '',
          'min-width': trigger ? trigger.offsetWidth + 'px' : ''
        }
      }, [
        this.createContentList(h)
      ])
    ]);
  },
  watch: {
    focusIndex () {
      this.setScollPosition();
    }
  }
};
