import RefreshControl from './RefreshControl';
import InfiniteScroll from './InfiniteScroll';
import { isNotNull } from '../utils';

export default {
  name: 'mu-load-more',
  props: {
    refreshing: Boolean,
    ...InfiniteScroll.props,
    loadedAll: Boolean
  },
  data () {
    return {
      trigger: null
    };
  },
  mounted () {
    this.trigger = this.$el;
  },
  render (h) {
    return h('div', {
      staticClass: 'mu-load-more'
    }, [
      isNotNull(this.$listeners.refresh) ? h(RefreshControl, {
        props: {
          refreshing: this.refreshing,
          trigger: this.trigger
        },
        on: {
          refresh: () => this.$emit('refresh')
        }
      }) : undefined,
      this.$slots.default,
      isNotNull(this.$listeners.load) && !this.loadedAll ? h(InfiniteScroll, {
        props: {
          loading: this.loading,
          loadingText: this.loadingText
        },
        on: {
          load: () => this.$emit('load')
        }
      }) : undefined
    ]);
  }
};
