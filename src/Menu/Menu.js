import Popover from '../Popover';

export default {
  name: 'mu-menu',
  props: {
    popoverClass: [String, Object, Array],
    cover: Popover.props.cover,
    placement: Popover.props.placement,
    space: Popover.props.space,
    open: Boolean,
    openOnHover: Boolean
  },
  data () {
    return {
      active: this.open,
      trigger: null
    };
  },
  mounted () {
    this.trigger = this.$el;
  },
  methods: {
    handleMouseEnter () {
      if (!this.openOnHover) return;
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => this.show(), 100);
    },
    handleMouseLeave () {
      if (!this.openOnHover) return;
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => this.hide(), 100);
    },
    show () {
      this.active = true;
      this.$emit('open');
    },
    hide () {
      this.active = false;
      this.$emit('close');
    },
    createPopover (h) {
      return h(Popover, {
        class: this.popoverClass,
        style: {
          'min-width': this.trigger ? this.trigger.offsetWidth + 'px' : ''
        },
        props: {
          cover: this.cover,
          placement: this.placement,
          open: this.active,
          space: this.space,
          trigger: this.trigger
        },
        on: {
          close: this.hide,
          mouseenter: this.handleMouseEnter,
          mouseleave: this.handleMouseLeave
        }
      }, this.$slots.content);
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'mu-menu',
      class: {
        'mu-menu__open': this.active
      }
    }, [
      h('div', {
        staticClass: 'mu-menu-activator',
        on: {
          click: () => this.openOnHover ? null : this.active ? this.hide() : this.show(),
          mouseenter: this.handleMouseEnter,
          mouseleave: this.handleMouseLeave
        }
      }, this.$slots.default),
      this.createPopover(h)
    ]);
  },
  beforeDestroy () {
    this.hide();
  },
  watch: {
    active (val) {
      this.$emit('update:open', val);
    },
    open (val) {
      this.active = val;
    }
  }
};
