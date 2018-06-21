export default {
  methods: {
    blur () {
      this.deactivateInput();
      this.closeMenu();
      this.$emit('blur');
    },
    focus () {
      this.activateInput();
      this.openMenu();
      this.$emit('focus');
    },
    focusInput () {
      this.$refs.input.focus();
    },
    createListeners () {
      const listeners = Object.assign({}, this.$listeners);
      delete listeners.input;
      delete listeners.change;
      return {
        ...listeners,
        click: (e) => {
          if (this.disabled || this.readonly || !this.autoComplete) return;
          if (this.isFocused && !this.open) {
            this.openMenu();
            return;
          }
          this.focus();
        },
        focus: (e) => {
          if (this.disabled || this.readonly || this.isFocused) {
            return;
          }

          this.activateInput();
          this.$nextTick(this.focusInput);
        },
        keydown: this.onKeydown //  mixins/keyboard.js
      };
    }
  }
};
