export default {
  methods: {
    blur () {
      this.deactivateInput();
      this.closeMenu();
      this.$emit('blur');
    },
    focus () {
      this.openMenu();
      this.$emit('focus');
    },
    focusInput () {
      if (this.$refs.input) {
        this.$refs.input.focus();

        this.$nextTick(() => {
          this.$refs.input.select();
        });
      } else {
        !this.isFocused && this.$refs.select.focus();
      }
    },
    createListeners () {
      const listeners = Object.assign({}, this.$listeners);
      delete listeners.input;

      return {
        ...listeners,
        click: () => {
          if (this.disabled || this.readonly) return;
          if (this.isFocused && !this.open) return this.openMenu();

          this.focus();
        },
        focus: (e) => {
          if (this.disabled || this.readonly || this.isFocused) {
            return;
          }

          this.activateInput();
          this.$nextTick(this.focusInput);
        }
        // keydown: this.onKeyDown // Located in mixins/keyboard.js
      };
    }
  }
};
