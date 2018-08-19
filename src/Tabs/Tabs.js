import { isNotNull } from '../utils';
import resize from '../internal/directives/resize';
import color from '../internal/mixins/color';
import translateUtils from '../utils/translate';

export default {
  name: 'mu-tabs',
  mixins: [color],
  provide () {
    return {
      tabClick: this.handleTabClick,
      getDefaultVal: this.getDefaultVal,
      addTab: this.addTab,
      removeTab: this.removeTab,
      setTabHighLineStyle: this.setTabHighLineStyle,
      getActiveValue: this.getActiveValue,
      getActiveColor: this.getActiveColor,
      getTabsInverse: this.getInverse
    };
  },
  props: {
    inverse: Boolean,
    indicatorColor: String,
    fullWidth: Boolean,
    center: Boolean,
    value: {}
  },
  data () {
    return {
      tabs: [],
      activeValue: isNotNull(this.value) ? this.value : 0
    };
  },
  created () {
    this.tabIndex = 0;
  },
  mounted () {
    this.setTabHighLineStyle();
  },
  updated () {
    this.setTabHighLineStyle();
  },
  methods: {
    handleTabClick (value, tab) {
      if (this.activeValue !== value) {
        this.activeValue = value;
        this.$emit('update:value', value);
        this.$emit('change', value);
      }
    },
    getActiveValue () {
      return this.activeValue;
    },
    getDefaultVal () {
      return this.tabIndex++;
    },
    getActiveColor () {
      return this.inverse ? {
        className: this.getNormalColorClass(this.color, true),
        color: this.getColor(this.color)
      } : { className: '', color: '' };
    },
    getInverse () {
      return this.inverse;
    },
    addTab (tab) {
      const index = this.$children.indexOf(tab);
      return index === -1 ? this.tabs.push(tab) : this.tabs.splice(index, 0, tab);
    },
    removeTab (tab) {
      const index = this.tabs.indexOf(tab);
      if (index === -1) return;
      this.tabs.splice(index, 1);
    },
    getActiveTab () {
      return this.tabs.filter((tab) => tab.active)[0];
    },
    setTabHighLineStyle () {
      const activeTab = this.getActiveTab();
      if (!activeTab || !this.$refs.line || !activeTab.$el) return;
      const el = activeTab.$el;
      const lineEl = this.$refs.line;
      const rect = el.getBoundingClientRect();
      const tabsRect = this.$el.getBoundingClientRect();
      lineEl.style.width = rect.width + 'px';
      translateUtils.translateElement(lineEl, rect.left - tabsRect.left, 0);
    }
  },
  watch: {
    value (val) {
      this.activeValue = val;
    },
    activeValue () {
      this.setTabHighLineStyle();
    }
  },
  directives: {
    resize
  },
  render (h) {
    return h('div', {
      staticClass: `mu-tabs ${!this.inverse ? this.getColorClass(false) : ''}`,
      class: {
        'mu-tabs-full-width': this.fullWidth,
        'mu-tabs-center': this.center,
        'mu-tabs-inverse': this.inverse
      },
      style: {
        'background-color': !this.inverse ? this.getColor(this.color) : ''
      },
      directives: [{
        name: 'resize',
        value: this.setTabHighLineStyle
      }]
    }, [
      this.$slots.default,
      h('span', {
        staticClass: `mu-tab-link-highlight ${this.getNormalColorClass(this.indicatorColor, false, false)}`,
        style: {
          'background-color': this.getColor(this.indicatorColor)
        },
        ref: 'line'
      })
    ]);
  }
};
