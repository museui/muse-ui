export default {
  name: 'mu-carousel-item',
  inject: [
    'addCarouselItem',
    'removeCarouselItem',
    'isCarouselActive',
    'getCarouselTransition'
  ],
  data () {
    return {
      classes: []
    };
  },
  computed: {
    active () {
      return this.isCarouselActive(this);
    },
    transition () {
      return this.getCarouselTransition();
    }
  },
  created () {
    this.addCarouselItem(this);
  },
  beforeDestroy () {
    this.removeCarouselItem(this);
  },
  render (h) {
    return h('transition', {
      props: {
        name: 'mu-carousel-' + this.transition
      }
    }, [
      h('div', {
        staticClass: 'mu-carousel-item',
        class: [...this.classes],
        directives: [{
          name: 'show',
          value: this.active
        }]
      }, this.$slots.default)
    ]);
  }
};
