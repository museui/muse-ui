export default {
  props: {
    disabled: Boolean,
    type: {
      type: String,
      default: 'button'
    },
    keyboardFocused: Boolean
  },
  data () {
    return {
      focus: this.focus
    };
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e);
    },
    handleKeyboardFocus (isFocus) {
      this.focus = isFocus;
      this.$emit('keyboard-focus', isFocus);
    },
    handleHover (e) {
      this.$emit('hover', e);
    },
    handleHoverExit (e) {
      this.$emit('hover-exit', e);
    },
    getListener () {
      return {
        ...this.$listeners,
        click: this.handleClick,
        keyboardFocus: this.handleKeyboardFocus,
        hover: this.handleHover,
        hoverExit: this.handleHoverExit
      };
    }
  }
};
