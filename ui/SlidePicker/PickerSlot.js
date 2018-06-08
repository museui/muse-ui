import Drag from '../utils/drag';
import translateUtil from '../utils/translate';
import { transitionEnd } from '../utils/dom';
const ITEM_HEIGHT = 36;

export default {
  name: 'mu-slide-picker-slot',
  props: {
    divider: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ''
    },
    values: {
      type: Array,
      default () {
        return [];
      }
    },
    value: {},
    textAlign: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    visibleItemCount: {
      type: Number,
      default: 5
    }
  },
  data () {
    return {
      animate: false
    };
  },
  computed: {
    contentHeight () {
      return ITEM_HEIGHT * this.visibleItemCount;
    },
    valueIndex () {
      return this.values.indexOf(this.value);
    },
    dragRange () {
      const values = this.values;
      const visibleItemCount = this.visibleItemCount;
      return [-ITEM_HEIGHT * (values.length - Math.ceil(visibleItemCount / 2)), ITEM_HEIGHT * Math.floor(visibleItemCount / 2)];
    }
  },
  mounted: function () {
    if (!this.divider) {
      this.initEvents();
      this.doOnValueChange();
    }
  },
  methods: {
    value2Translate (value) {
      const values = this.values;
      const valueIndex = values.indexOf(value);
      const offset = Math.floor(this.visibleItemCount / 2);
      if (valueIndex !== -1) {
        return (valueIndex - offset) * -ITEM_HEIGHT;
      }
    },
    translate2Value (translate) {
      translate = Math.round(translate / ITEM_HEIGHT) * ITEM_HEIGHT;
      const index = -(translate - Math.floor(this.visibleItemCount / 2) * ITEM_HEIGHT) / ITEM_HEIGHT;
      return this.values[index];
    },
    doOnValueChange () {
      const value = this.value;
      const wrapper = this.$refs.wrapper;
      translateUtil.translateElement(wrapper, null, this.value2Translate(value));
    },
    doOnValuesChange () {
      const el = this.$el;
      const items = el.querySelectorAll('.mu-slide-picker-item');
      Array.prototype.forEach.call(items, (item, index) => {
        translateUtil.translateElement(item, null, ITEM_HEIGHT * index);
      });
    },
    initEvents () {
      const el = this.$refs.wrapper;
      const drag = new Drag(this.$el);
      let startTop = 0;
      let velocityTranslate, prevTranslate;
      drag.start(() => {
        startTop = translateUtil.getElementTranslate(el).top;
      }).drag((endPos, event) => {
        event.preventDefault();
        event.stopPropagation();
        const translate = startTop + endPos.y;
        translateUtil.translateElement(el, 0, translate);
        velocityTranslate = translate - prevTranslate || translate;
        prevTranslate = translate;
      }).end((endPos) => {
        const momentumRatio = 7;
        const currentTranslate = translateUtil.getElementTranslate(el).top;
        let momentumTranslate;
        if (endPos.time < 300) {
          momentumTranslate = currentTranslate + velocityTranslate * momentumRatio;
        }
        const dragRange = this.dragRange;
        this.animate = true;
        transitionEnd(el, () => {
          this.animate = false;
        });
        this.$nextTick(() => {
          let translate;
          if (momentumTranslate) {
            translate = Math.round(momentumTranslate / ITEM_HEIGHT) * ITEM_HEIGHT;
          } else {
            translate = Math.round(currentTranslate / ITEM_HEIGHT) * ITEM_HEIGHT;
          }
          translate = Math.max(Math.min(translate, dragRange[1]), dragRange[0]);
          translateUtil.translateElement(el, null, translate);
          this.$emit('change', this.translate2Value(translate));
        });
      });
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'mu-slide-picker-slot',
      class: {
        'mu-slide-picker-slot-divider': this.divider
      },
      style: {
        width: this.width
      }
    }, [
      this.divider
        ? h('div', {}, this.content)
        : h('div', {
          staticClass: 'mu-slide-picker-slot-wrapper',
          class: {
            animate: this.animate
          },
          style: {
            height: this.contentHeight + 'px'
          },
          ref: 'wrapper'
        }, this.values.map((item, index) => {
          return h('div', {
            staticClass: 'mu-slide-picker-item',
            style: {
              'text-align': this.textAlign
            },
            class: {
              selected: item === this.value
            },
            key: 'pick-slot-' + index
          }, item.text || item);
        }))
    ]);
  },
  watch: {
    values (newVal) {
      if (this.valueIndex === -1) {
        this.value = (newVal || [])[0];
      }
    },
    value () {
      this.doOnValueChange();
    }
  }
};
