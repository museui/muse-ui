import keycode from 'keycode';

export default {
  data () {
    return {
      focusIndex: -1
    };
  },
  computed: {
    enableOptions () {
      return this.options.filter((option) => {
        return option.visible && !option.disabled;
      });
    }
  },
  methods: {
    onKeydown (e) {
      const code = keycode(e);
      if (!this.open && ['enter', 'space', 'up', 'down'].indexOf(code)) {
        e.preventDefault();
        return this.openMenu();
      }
      const options = this.enableOptions;
      switch (code) {
        case 'enter':
          const option = options[this.focusIndex];
          if (option) this.optionClick(option);
          break;
        case 'up':
          event.preventDefault();
          this.selectedIndex = -1;
          this.decrementFocusIndex();
          break;
        case 'down':
          event.preventDefault();
          this.selectedIndex = -1;
          this.incrementFocusIndex();
          break;
        case 'tab':
          this.blur();
          if (this.multiple) this.searchValue = '';
          break;
        case 'left':
        case 'right':
        case 'delete':
        case 'backspace':
          if (!this.searchValue && this.filterable && this.multiple) this.changeSelectedIndex(code);
          break;
      }
    },
    decrementFocusIndex () {
      let index = this.focusIndex;
      const maxIndex = this.getOptionCount() - 1;
      index--;
      if (index < 0) index = maxIndex;
      this.setFocusIndex(index);
    },
    incrementFocusIndex () {
      let index = this.focusIndex;
      const maxIndex = this.getOptionCount() - 1;
      index++;
      if (index > maxIndex) index = 0;
      this.setFocusIndex(index);
    },
    getOptionCount () {
      return this.enableOptions.length;
    },
    resetFocusIndex () {
      this.focusIndex = -1;
    },
    setFocusIndex (index) {
      this.focusIndex = index;
    },
    getSelectedIndex () {
      for (let i = 0; i < this.enableOptions.length; i++) {
        if (this.enableOptions[i].selected) return i;
      }
      return -1;
    },
    setScollPosition (index) {
      this.$nextTick(() => {
        const option = this.enableOptions[index];
        if (!option) return;
        const optionEl = option.$el;
        const optionHeight = optionEl.offsetHeight;
        let scrollTop = optionEl.offsetTop - optionHeight;
        if (scrollTop < optionHeight) scrollTop = 0;
        this.$refs.list.scrollTop = scrollTop;
      });
    }
  },
  watch: {
    focusIndex (val) {
      this.enableOptions.forEach((option, index) => {
        option.focused = index === val;
      });
      this.setScollPosition(val);
    }
  }
};
