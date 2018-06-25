import popup from '../internal/mixins/popup';
import { BottomSheetTransition } from '../internal/transitions';

export default {
  name: 'mu-bottom-sheet',
  mixins: [popup],
  render (h) {
    return h(BottomSheetTransition, [
      this.open ? h('div', {
        staticClass: 'mu-bottom-sheet',
        style: {
          'z-index': this.zIndex
        }
      }, this.$slots.default) : undefined
    ]);
  }
};
