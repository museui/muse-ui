import packageJson from '../../../../package.json';
export default {
  props: {
    open: Boolean
  },
  data () {
    const desktop = isDesktop();
    return {
      docked: desktop,
      version: packageJson.version
    };
  },
  computed: {
    home () {
      return this.$route && this.$route.name === 'home';
    }
  },
  mounted () {
    this.changeNav();
    this.handleResize = () => {
      this.changeNav();
    };
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    changeNav () {
      const desktop = isDesktop();
      this.docked = this.home ? false : desktop;
      if (desktop === this.desktop) return;
      if (!desktop && this.desktop && this.open) {
        this.$emit('update:open', false);
      }
      if (desktop && !this.desktop && !this.open && !this.home) {
        this.$emit('update:open', true);
      }
      this.desktop = desktop;
    },
    createHeader (h) {
      return (
        <mu-appbar zDepth={0} class='mu-app-drawer-header'>
          <router-link tag='div' class='mu-appbar-title-text' to='/'>Muse-UI</router-link>
          <div class='mu-app-version'>v{this.version}</div>
        </mu-appbar>
      );
    },
    createContent (h) {
      return (
        <div class='mu-app-drawer-content'>
          <mu-divider />
        </div>
      );
    }
  },
  render (h) {
    return h('mu-drawer', {
      staticClass: 'mu-app-drawer',
      props: {
        open: this.open,
        docked: this.docked,
        zDepth: this.docked ? 0 : 2
      },
      on: {
        'update:open': (val) => this.$emit('update:open', val)
      }
    }, [
      this.createHeader(h),
      this.createContent(h)
    ]);
  },
  watch: {
    home (val) {
      this.$emit('update:open', !val);
      this.changeNav();
    }
  }
};

function isDesktop () {
  return window.innerWidth > 993;
}
