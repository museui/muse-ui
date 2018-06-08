import Paper from '../Paper';
import Button from '../Button';
import { ExpandTransition } from '../internal/transitions';

export default {
  name: 'mu-expansion-panel',
  props: {
    expand: Boolean,
    zDepth: {
      type: Number,
      default: 2
    }
  },
  data () {
    return {
      show: this.expand
    };
  },
  methods: {
    createToggleIcon (h) {
      return h('svg', {
        staticClass: '',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [
        h('g', {}, [
          h('path', {
            attrs: {
              d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'
            }
          })
        ])
      ]);
    },
    createHeader (h) {
      return h('div', {
        staticClass: 'mu-expansion-panel-header',
        on: {
          click: () => {
            this.show = !this.show;
            this.$emit('update:expand', this.show);
            this.$emit('change', this.show);
          }
        }
      }, [
        this.$slots.header,
        h(Button, {
          staticClass: 'mu-expansion-toggle-btn',
          props: {
            icon: true
          },
          attrs: {
            tabindex: -1
          }
        }, [this.createToggleIcon(h)])
      ]);
    },
    createContainer (h) {
      return h(ExpandTransition, {}, [
        h('div', {
          staticClass: 'mu-expansion-panel-container',
          directives: [{
            name: 'show',
            value: this.show
          }]
        }, [
          this.createContent(h),
          this.createActions(h)
        ])
      ]);
    },
    createContent (h) {
      return h('div', {
        staticClass: 'mu-expansion-panel-content'
      }, this.$slots.default);
    },
    createActions (h) {
      return this.$slots.action && this.$slots.action.length > 0
        ? h('div', {
          staticClass: 'mu-expansion-panel-actions'
        }, this.$slots.action)
        : undefined;
    }
  },
  render (h) {
    return h(Paper, {
      staticClass: 'mu-expansion-panel',
      class: {
        'mu-expansion-panel__expand': this.show
      },
      props: {
        zDepth: this.zDepth,
        rounded: false
      }
    }, [
      this.createHeader(h),
      this.createContainer(h)
    ]);
  },
  watch: {
    expand (val) {
      this.show = val;
    }
  }
};
