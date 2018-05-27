export default {
  name: 'mu-grid-tile',
  inject: ['getGridListCellHeight', 'getGridListCols', 'getGridListPadding'],
  props: {
    actionPosition: {
      type: String,
      default: 'right',
      validator (val) {
        return ['left', 'right'].indexOf(val) !== -1;
      }
    },
    cols: {
      type: Number,
      default: 1
    },
    rows: {
      type: Number,
      default: 1
    },
    title: {
      type: String
    },
    subTitle: {
      type: String
    },
    titlePosition: {
      type: String,
      default: 'bottom',
      validator (val) {
        return ['top', 'bottom'].indexOf(val) !== -1;
      }
    }
  },
  computed: {
    tileClass () {
      return {
        'is-top': this.titlePosition === 'top',
        'action-left': this.actionPosition === 'left',
        'multiline': this.$slots.title && this.$slots.subTitle && this.$slots.title.length > 0 && this.$slots.subTitle.length > 0
      };
    },
    style () {
      return {
        width: (this.cols / this.getGridListCols() * 100) + '%',
        padding: (this.getGridListPadding() / 2) + 'px',
        height: (this.getGridListCellHeight() * this.rows) + 'px'
      };
    }
  },
  render (h) {
    const title = h('div', {
      staticClass: 'mu-grid-tile-title'
    }, this.$slots.title && this.$slots.title.length > 0 ? this.$slots.title : this.title);

    const subTitle = h('div', {
      staticClass: 'mu-grid-tile-subtitle'
    }, this.$slots.subTitle && this.$slots.subTitle.length > 0 ? this.$slots.subTitle : this.subTitle);

    return h('div', {
      staticClass: 'mu-grid-tile-wrapper',
      style: this.style,
      on: this.$listeners
    }, [
      h('div', {
        staticClass: 'mu-grid-tile',
        class: this.tileClass
      }, [
        this.$slots.default,
        h('div', { staticClass: 'mu-grid-tile-titlebar' }, [
          h('div', { staticClass: 'mu-grid-tile-title-container' }, [title, subTitle]),
          h('div', { staticClass: 'mu-grid-tile-action' }, this.$slots.action)
        ])
      ])
    ]);
  }
};
