import packageJson from '../../../package.json';
import navConfig from '../configs/nav';
import locale from '../locale';

export default {
  props: {
    open: Boolean,
    docked: Boolean,
    home: Boolean
  },
  data () {
    return {
      version: packageJson.version
    };
  },
  computed: {
    path () {
      return this.$route && this.$route.meta && this.$route.meta.path;
    }
  },
  methods: {
    createHeader (h) {
      return (
        <mu-appbar zDepth={0} color='transparent' class='mu-app-drawer-header'>
          <router-link tag='div' class='mu-appbar-title-text' to='/'>Muse-UI</router-link>
          <mu-menu>
            <div class='mu-app-version'>v{this.version}</div>
            <mu-list slot='content' dense>
              <mu-list-item button href='/'>
                <mu-list-item-title>v3.0.0-beta</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button={true} href='/2.1.0'>
                <mu-list-item-title>v2.10.0</mu-list-item-title>
              </mu-list-item>
            </mu-list>
          </mu-menu>
        </mu-appbar>
      );
    },
    createMenuItem (h, menu, isNested) {
      return (
        <mu-list-item to={menu.path ? '/' + locale + menu.path : undefined} value={menu.path} slot={isNested ? 'nested' : 'default'} button nested={menu.children && menu.children.length > 0}>
          <mu-list-item-content>
            <mu-list-item-title style={{ 'font-size': isNested ? '14px' : '16px', 'font-weight': isNested ? '400' : '500' }}>{menu.name}</mu-list-item-title>
          </mu-list-item-content>
          {
            menu.children && menu.children.length > 0 ? <mu-list-item-action>
              <mu-icon class='toggle-icon' size='24' value='keyboard_arrow_down' />
            </mu-list-item-action> : null
          }
          {
            !menu.children && menu.badge ? <mu-list-item-action>
              <mu-badge color='primary' content={menu.badge} />
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
      const menus = navConfig[locale].map(menu => {
        return this.createMenuItem(h, menu);
      });
      return (
        <div class='mu-app-drawer-content'>
          <mu-divider />
          <mu-list dense value={this.path} toggleNested>
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
    path () {
      if (!this.docked) this.$emit('update:open', false);
    }
  }
};
