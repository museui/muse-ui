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
    createMenuItem (h, menu, isNested) {
      return (
        <mu-list-item slot={isNested ? 'nested' : 'default'} button nested={menu.children && menu.children.length > 0} toggleNested>
          <mu-list-item-content>
            <mu-list-item-title style={{ 'font-size': isNested ? '14px' : '16px' }}>{menu.title}</mu-list-item-title>
          </mu-list-item-content>
          {
            menu.children && menu.children.length > 0 ? <mu-list-item-action>
              <mu-icon class='toggle-icon' size='24' value='keyboard_arrow_down' />
            </mu-list-item-action> : null
          }
          {
            menu.children && menu.children.map((m) => {
              return this.createMenuItem(h, m, true);
            })
          }
        </mu-list-item>
      );
    },
    createContent (h) {
      const menus = [{
        title: '快速上手',
        children: [{
          title: '安装'
        }, {
          title: '使用'
        }, {
          title: '常见问题解答'
        }]
      }, {
        title: '样式 & 主题风格',
        children: [{
          title: 'Color 色彩'
        }, {
          title: 'Theme 主题'
        }, {
          title: 'Icons 图标'
        }]
      }, {
        title: '组件',
        children: [{
          title: 'Alert'
        }, {
          title: 'AppBar'
        }, {
          title: 'Avatar'
        }, {
          title: 'Badge'
        }, {
          title: 'Bottom Navigation'
        }, {
          title: 'Bottom Sheet'
        }, {
          title: 'Breadcrumbs'
        }, {
          title: 'Buttons'
        }, {
          title: 'Card'
        }, {
          title: 'Chip'
        }, {
          title: 'Data Table'
        }, {
          title: 'Dialog'
        }, {
          title: 'Divider'
        }, {
          title: 'Grid List'
        }, {
          title: 'Input controls',
          children: [{
            title: 'Date Input'
          }, {
            title: 'Select'
          }, {
            title: 'Select Controls'
          }, {
            title: 'Text Field'
          }]
        }, {
          title: 'List'
        }, {
          title: 'Menu'
        }, {
          title: 'Pagination'
        }, {
          title: 'Paper'
        }, {
          title: 'Pickers',
          children: [{
            title: 'Date Picker'
          }, {
            title: 'Time Picker'
          }]
        }, {
          title: 'Popover'
        }, {
          title: 'Progress'
        }, {
          title: 'Slider'
        }, {
          title: 'Snackbar'
        }, {
          title: 'Stepper'
        }, {
          title: 'SubHeader'
        }, {
          title: 'Tabs'
        }, {
          title: 'Tooltip'
        }]
      }].map((menu) => {
        return this.createMenuItem(h, menu);
      });
      return (
        <div class='mu-app-drawer-content'>
          <mu-divider />
          <mu-list dense>
            {menus}
          </mu-list>
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
