import Popover from '../Popover';

export default {
  name: 'mu-menu',
  props: {
    popoverClass: [String, Object, Array],
    cover: Popover.props.cover,
    placement: Popover.props.placement,
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
    show () {
      if (this.timer) clearTimeout(this.timer);
      this.active = true;
      this.$emit('open');
    },
    hide () {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.active = false;
        this.$emit('close');
      }, 200);
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
          trigger: this.trigger
        },
        on: {
          close: this.hide,
          mouseenter: () => this.openOnHover && this.show(),
          mouseleave: () => this.openOnHover && this.hide()
        }
      }, this.$slots.content);
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'mu-menu'
    }, [
      h('div', {
        staticClass: 'mu-menu-activator',
        on: {
          click: () => this.openOnHover ? null : this.active ? this.hide() : this.show(),
          mouseenter: () => this.openOnHover && this.show(),
          mouseleave: () => this.openOnHover && this.hide()
        }
      }, this.$slots.default),
      this.createPopover(h)
    ]);
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
