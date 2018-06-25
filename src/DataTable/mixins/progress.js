import { LinearProgress } from '../../Progress';
import { FadeTransition } from '../../internal/transitions';

export default {
  data () {
    return {
      headerHeight: ''
    };
  },
  mounted () {
    this.headerHeight = this.$refs.header.offsetHeight + 'px';
  },
  methods: {
    createProgress (h) {
      return h(FadeTransition, {}, [
        this.loading ? h(LinearProgress, {
          staticClass: 'mu-table-progress',
          style: {
            top: this.headerHeight
          }
        }) : undefined
      ]);
    }
  }
};
