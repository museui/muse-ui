import Button from '../Button';

export default {
  name: 'mu-pagination',
  props: {
    total: {
      type: Number,
      default: 0,
      validator: (val) => val >= 0
    },
    current: {
      type: Number,
      default: 1,
      validator: (val) => val >= 1
    },
    pageCount: {
      type: Number,
      default: 7,
      validator (val) {
        return val >= 5 && val <= 21 && val % 2 !== 0;
      }
    },
    pageSize: {
      type: Number,
      default: 10
    },
    raised: Boolean,
    circle: Boolean
  },
  computed: {
    showPageCount () {
      return this.pageCount - 2;
    },
    totalPage () {
      return Math.ceil(this.total / this.pageSize);
    },
    items () {
      if (this.total === 0) return [];
      const showPageCount = this.showPageCount;
      const arr = [];
      const start = 1;
      const end = this.totalPage;

      if (end <= showPageCount + 2) {
        for (let i = start; i <= end; i++) {
          arr.push({ text: i, value: i });
        }
        return arr;
      }
      arr.push({ text: start, value: start });
      if (this.current - start >= showPageCount - 1) {
        const go = this.current - showPageCount;
        arr.push({
          text: '...',
          value: go < 1 ? 1 : go
        });
      }

      let listStart = this.current - Math.floor(showPageCount / 2);
      if (listStart <= 1) listStart = 2;
      let listEnd = listStart + showPageCount - 1;
      if (listEnd >= end) listEnd = end - 1;
      listStart = listEnd - showPageCount + 1;

      for (let i = listStart; i <= listEnd; i++) {
        arr.push({ text: i, value: i });
      }

      if (end - this.current >= showPageCount - 1) {
        const go = this.current + showPageCount;
        arr.push({
          text: '...',
          value: go > end ? end : go
        });
      }
      arr.push({ text: end, value: end });
      return arr;
    }
  },
  methods: {
    changePage (page) {
      this.$emit('update:current', page);
      this.$emit('change', page);
    },
    createPrevBtn (h) {
      return h(Button, {
        staticClass: 'mu-pagination-btn',
        props: {
          flat: true,
          disabled: this.current <= 1
        },
        on: {
          click: () => this.changePage(this.current - 1)
        }
      }, [
        h('svg', {
          staticClass: 'mu-pagination-svg-icon',
          attrs: {
            viewBox: '0 0 24 24'
          }
        }, [
          h('path', {
            attrs: {
              d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'
            }
          })
        ])
      ]);
    },
    creatNextBtn (h) {
      return h(Button, {
        staticClass: 'mu-pagination-btn',
        props: {
          flat: true,
          disabled: this.current >= this.totalPage
        },
        on: {
          click: () => this.changePage(this.current + 1)
        }
      }, [
        h('svg', {
          staticClass: 'mu-pagination-svg-icon',
          attrs: {
            viewBox: '0 0 24 24'
          }
        }, [
          h('path', {
            attrs: {
              d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
            }
          })
        ])
      ]);
    },
    createPageList (h) {
      return h('ul', {}, this.items.map(item => {
        const btn = h(Button, {
          staticClass: 'mu-pagination-item',
          class: {
            'is-current': this.current === item.value
          },
          props: {
            flat: true
          },
          on: {
            click: () => this.changePage(item.value)
          }
        }, [
          item.text === '...'
            ? h('svg', {
              staticClass: 'mu-pagination-svg-icon',
              attrs: {
                viewBox: '0 0 24 24'
              }
            }, [
              h('path', {
                attrs: {
                  d: 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
                }
              })
            ])
            : item.text
        ]);
        return h('li', {}, [btn]);
      }));
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'mu-pagination',
      class: {
        'mu-pagination__raised': this.raised,
        'mu-pagination__circle': this.circle
      }
    }, [
      this.createPrevBtn(h),
      this.createPageList(h),
      this.creatNextBtn(h)
    ]);
  }
};
