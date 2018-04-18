import PopupManager from './manager';
import { getZIndex } from './utils';

export default {
  props: {
    open: Boolean,
    overlay: {
      type: Boolean,
      default: true
    },
    overlayClose: {
      type: Boolean,
      default: true
    },
    overlayOpacity: {
      type: Number,
      default: 0.4
    },
    overlayColor: {
      type: String,
      default: '#000'
    },
    escPressClose: { // 按退出键是否触发关闭事件
      type: Boolean,
      default: true
    },
    appendBody: { // 是否添加到 body 元素后, 内部使用
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      overlayZIndex: getZIndex(),
      zIndex: getZIndex()
    };
  },
  methods: {
    overlayClick (e) {
      if (!this.overlay || !this.overlayClose) return;
      this.$emit('update:open', false);
      this.$emit('close', 'overlay');
    },
    escPress (e) {
      if (!this.escPressClose) return;
      this.$emit('update:open', false);
      this.$emit('close', 'esc');
    },
    setZIndex () {
      const dom = this.$el;
      if (!this.zIndex) this.zIndex = getZIndex();
      if (dom) dom.style.zIndex = this.zIndex;
    },
    resetZIndex () {
      this.overlayZIndex = getZIndex();
      this.zIndex = getZIndex();
    },
    popupEl () {
      return this.$el;
    },
    appendPopupElToBody () {
      if (!this.appendBody) return;
      this.$nextTick(() => {
        const popupEl = this.popupEl();
        if (!popupEl) {
          console.warn('必须有一个 ref=‘popup’ 的元素');
          return;
        }
        document.body.appendChild(popupEl);
      });
    }
  },
  mounted () {
    if (this.open) {
      PopupManager.open(this);
      this.appendPopupElToBody();
    }
  },
  updated () {
    if (!this.overlay && this.open) {
      this.setZIndex();
    }
  },
  beforeDestroy () {
    PopupManager.close(this);
    if (this.appendBody) {
      const popupEl = this.popupEl();
      if (!popupEl) return;
      if (popupEl.parentNode) popupEl.parentNode.removeChild(popupEl);
    }
  },
  watch: {
    open (val, oldVal) {
      if (val) {
        this.resetZIndex();
        PopupManager.open(this);
        this.appendPopupElToBody();
      } else {
        PopupManager.close(this);
      }
    }
  }
};
