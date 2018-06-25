import Button from '../Button';
import swipe from '../internal/directives/swipe';

export default {
  name: 'mu-carousel',
  directives: {
    swipe
  },
  provide () {
    return {
      addCarouselItem: this.addCarouselItem,
      removeCarouselItem: this.removeCarouselItem,
      isCarouselActive: this.isCarouselActive,
      getCarouselTransition: this.getTransition
    };
  },
  props: {
    active: {
      type: Number,
      default: 0
    },
    cycle: {
      type: Boolean,
      default: true
    },
    interval: {
      type: [Number, String],
      default: 6000,
      validator: value => value > 0
    },
    transition: {
      type: String,
      default: 'slide',
      validator: (val) => ['slide', 'fade'].indexOf(val) !== -1
    },
    hideIndicators: Boolean,
    hideControls: Boolean
  },
  data () {
    return {
      items: [],
      inverse: false,
      activeIndex: this.active
    };
  },
  mounted () {
    this.startAutoNext();
  },
  beforeDestroy () {
    if (this.timer) clearInterval(this.timer);
  },
  methods: {
    getTransition () {
      return this.transition;
    },
    addCarouselItem (item) {
      const index = this.$children.indexOf(item);
      return index === -1 ? this.items.push(item) : this.items.splice(index, 0, item);
    },
    removeCarouselItem (item) {
      const index = this.items.indexOf(item);
      if (index === -1) return;
      this.items.splice(index, 1);
    },
    isCarouselActive (item) {
      return this.items.indexOf(item) === this.activeIndex;
    },
    startAutoNext () {
      if (this.timer) clearInterval(this.timer);
      if (!this.cycle) return;
      this.timer = setInterval(() => this.next(), this.interval > 0 ? this.interval : 6000);
    },
    next () {
      const maxIndex = this.items.length - 1;
      let index = this.activeIndex + 1;
      if (index > maxIndex) index = 0;
      this.activeIndex = index;
      this.inverse = false;
    },
    prev () {
      let index = this.activeIndex - 1;
      if (index < 0) index = this.items.length - 1;
      this.activeIndex = index;
      this.inverse = true;
    },
    changeActiveIndex (index) {
      if (index !== this.activeIndex) {
        this.inverse = this.activeIndex > index;
        this.activeIndex = index;
      }
    },
    createControls (h) {
      if (this.hideControls) return [];
      return [
        h(Button, {
          class: 'mu-carousel-button mu-carousel-button__left',
          props: {
            icon: true
          },
          on: {
            click: this.prev
          }
        }, [
          this.$slots.left && this.$slots.left.length > 0
            ? this.$slots.left
            : h('svg', {
              staticClass: 'mu-carousel-svg-icon',
              attrs: {
                viewBox: '0 0 24 24'
              }
            }, [
              h('path', {
                attrs: {
                  d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'
                }
              }),
              h('path', {
                attrs: {
                  d: 'M0 0h24v24H0z',
                  fill: 'none'
                }
              })
            ])
        ]),
        h(Button, {
          class: 'mu-carousel-button mu-carousel-button__right',
          props: {
            icon: true
          },
          on: {
            click: this.next
          }
        }, [
          this.$slots.right && this.$slots.right.length > 0
            ? this.$slots.right
            : h('svg', {
              staticClass: 'mu-carousel-svg-icon',
              attrs: {
                viewBox: '0 0 24 24'
              }
            }, [
              h('path', {
                attrs: {
                  d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
                }
              }),
              h('path', {
                attrs: {
                  d: 'M0 0h24v24H0z',
                  fill: 'none'
                }
              })
            ])
        ])
      ];
    },
    createIndicators (h) {
      if (this.hideIndicators) return;
      return h('div', {
        staticClass: 'mu-carousel-indicators'
      }, this.items.map((item, index) => {
        const active = index === this.activeIndex;
        return this.$scopedSlots.indicator
          ? this.$scopedSlots.indicator({ index, active })
          : h(Button, {
            staticClass: 'mu-carousel-indicator-button',
            class: {
              'mu-carousel-indicator-button__active': active
            },
            props: {
              icon: true
            },
            on: {
              click: () => this.changeActiveIndex(index)
            }
          }, [
            h('span', {
              staticClass: 'mu-carousel-indicator-icon'
            })
          ]);
      }));
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'mu-carousel',
      class: {
        'mu-carousel__transition_inverse': this.inverse
      },
      directives: [{
        name: 'swipe',
        value: {
          left: this.next,
          right: this.prev
        },
        modifiers: {
          touch: true
        }
      }]
    }, [
      ...this.createControls(h),
      this.createIndicators(h),
      this.$slots.default
    ]);
  },
  watch: {
    activeIndex (val) {
      this.startAutoNext();
      this.$emit('change', val);
      this.$emit('update:active', val);
    },
    active (val) {
      this.changeActiveIndex(val);
    },
    cycle () {
      this.startAutoNext();
    },
    interval () {
      this.startAutoNext();
    }
  }
};
