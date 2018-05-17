import { isNotNull } from '../utils';
import resize from '../internal/directives/resize';
import color from '../internal/mixins/color';

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
      getActiveColor: this.getActiveColor
    };
  },
  props: {
    indicatorColor: String,
    textColor: String,
    fullWidth: Boolean,
    center: Boolean,
    fixed: Boolean,
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
      return this.getColor(this.textColor);
    },
    addTab (tab) {
      this.tabs.push(tab);
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
      this.$nextTick(() => {
        const activeTab = this.getActiveTab();
        if (!activeTab) return;
        const el = activeTab.$el;
        const lineEl = this.$refs.line;
        const rect = el.getBoundingClientRect();
        const tabsRect = this.$el.getBoundingClientRect();
        lineEl.style.width = rect.width + 'px';
        lineEl.style.left = (rect.left - tabsRect.left) + 'px';
      });
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
      staticClass: `mu-tabs ${this.getColorClass()} ${this.getTextColorClass()}`,
      class: {
        'mu-tabs-full-width': this.fullWidth,
        'mu-tabs-center': this.center,
        'mu-tabs-inverse': this.textColor,
        'mu-tabs-fixed': this.fixed
      },
      style: {
        'background-color': !this.textColor ? getColor(this.color) : ''
      },
      directives: [{
        name: 'resize',
        value: this.setTabHighLineStyle
      }]
    }, [
      this.$slots.default,
      h('span', {
        staticClass: 'mu-tab-link-highlight',
        class: {
          'mu-primary-color': this.indicatorColor === 'primary',
          'mu-secondary-color': this.indicatorColor === 'secondary'
        },
        style: {
          'background-color': this.getColor(this.indicatorColor)
        },
        ref: 'line'
      })
    ]);
  }
};
